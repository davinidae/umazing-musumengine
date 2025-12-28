#![feature(unix_send_signal)]

use std::collections::HashMap;
use std::io::{BufRead, BufReader, Read, Write};
// use std::fmt::Write;
use crate::msgpack::heuristic_decode;
use base64::Engine;
use base64::prelude::BASE64_STANDARD;
use hex_literal::hex;
use rand::{Rng, random};
use serde::de::DeserializeOwned;
use serde::{Deserialize, Serialize};
use serde_json::json;
use simple_rijndael::impls::RijndaelCbc;
use simple_rijndael::paddings::Pkcs7Padding;
use std::os::unix::process::ChildExt;
use std::process::{self, Child, ChildStdout, Stdio};
use tokio::io::AsyncReadExt;
use tracing::{debug, info};
use uuid::Uuid;

mod msgpack;

pub struct SteamSession {
    child: Child,
    stdout: BufReader<ChildStdout>,
    info: SteamInfo,
}

#[derive(Deserialize)]
pub struct SteamInfo {
    steam_id: String,
    session_ticket: String,
}

impl SteamSession {
    pub fn new(username: &str, password: &str) -> anyhow::Result<Self> {
        let mut command = process::Command::new("deno")
            .args(["run", "-A", "ticket-generator.ts"])
            .args(["--appid", "3224770"])
            .args(["--username", username])
            .args(["--password", password])
            .stdout(Stdio::piped())
            .spawn()?;

        let mut stdout = BufReader::new(command.stdout.take().unwrap());
        let mut line = String::new();
        stdout.read_line(&mut line)?;
        let ticket_info = serde_json::from_str(line.trim())?;
        Ok(SteamSession {
            child: command,
            stdout,
            info: ticket_info,
        })
    }

    pub fn steam_id(&self) -> &str {
        self.info.steam_id.as_str()
    }

    pub fn session_ticket(&self) -> &str {
        self.info.session_ticket.as_str()
    }
}

impl Drop for SteamSession {
    fn drop(&mut self) {
        info!("Tearing down steam session..");
        let _ = self.child.send_signal(2); // SIGINT
        let _ = self.child.wait();
    }
}

// deeply dumb method but It Seems To Work
pub fn gen_key() -> [u8; 32] {
    let mut out = Vec::new();
    let mut rng = rand::rng();

    while out.len() < 32 {
        let random_num: u16 = rng.random();
        write!(out, "{random_num:x}");
    }

    out[..32].try_into().unwrap()
}

pub fn salted_md5(data: &[u8]) -> [u8; 16] {
    let data = data
        .iter()
        .copied()
        .chain("co!=Y;(UQCGxJ_n82".as_bytes().iter().copied())
        .collect::<Vec<u8>>();
    md5::compute(&data).0
}

pub fn new_session_id(udid: Udid, viewer_id: i64) -> SessionId {
    let session_id = salted_md5(format!("{viewer_id}{}", udid.0).as_bytes());
    SessionId(session_id)
}

#[derive(Clone, Copy, Serialize, Deserialize)]
#[serde(transparent)]
pub struct SessionId(#[serde(with = "hex")] [u8; 16]);

impl SessionId {
    pub fn bytes(&self) -> [u8; 16] {
        self.0
    }

    pub fn as_hex(&self) -> String {
        hex::encode(self.0)
    }
}

#[derive(Clone, Copy, Serialize, Deserialize)]
pub struct Udid(pub Uuid);

impl Udid {
    // equivalent to UUID without hyphens
    pub fn simple_representation(&self) -> String {
        self.0.as_simple().to_string()
    }

    // raw bytes of the uuid
    pub fn raw_bytes(&self) -> [u8; 16] {
        self.0.into_bytes()
    }

    // equivalent to first 16 characters of UUID (with no hyphens)
    pub fn iv_representation(&self) -> [u8; 16] {
        let out = self.simple_representation().into_bytes();
        out[..16].try_into().unwrap()
    }
}

#[derive(Clone, Serialize, Deserialize)]
#[serde(transparent)]
pub struct AuthKey(#[serde(with = "hex")] Vec<u8>);

static COMMON_HEADER: [u8; 52] = hex!(
    "6b20e2ab6c311330f761d737ce3f3025750850665eea58b6372f8d2f57501eb344bdb7270a9067f5b63cd61f152cfb986cbfbf7a"
);

#[derive(Clone, Serialize)]
pub struct UmaReqHeader {
    #[serde(with = "hex")]
    pub common_header: &'static [u8],
    pub session_id: SessionId,
    pub udid: Udid,
    #[serde(with = "hex")]
    pub random_bytes: [u8; 32],
    pub auth_key: Option<AuthKey>,
}

impl UmaReqHeader {
    pub fn new(udid: Udid, session_id: SessionId, auth_key: Option<AuthKey>) -> Self {
        UmaReqHeader {
            common_header: &COMMON_HEADER[..],
            session_id,
            udid,
            auth_key,
            random_bytes: random(),
        }
    }

    pub fn rerandomize(&mut self) {
        self.random_bytes = random();
    }

    pub fn encoded_size(&self) -> usize {
        self.common_header.len() + 16 + 16 + 32 + self.auth_key.as_ref().map_or(0, |v| v.0.len())
    }

    pub fn encode(&self) -> Vec<u8> {
        let mut out = Vec::with_capacity(self.encoded_size());
        out.extend_from_slice(self.common_header);
        out.extend_from_slice(&self.session_id.bytes());
        out.extend_from_slice(&self.udid.raw_bytes());
        out.extend_from_slice(&self.random_bytes);
        if let Some(auth_key) = &self.auth_key {
            out.extend_from_slice(&auth_key.0);
        }

        assert_eq!(self.encoded_size(), out.len());

        out
    }
}

#[derive(Serialize)]
pub struct UmaReqBody {
    #[serde(with = "hex")]
    data: Vec<u8>,
    #[serde(with = "hex", rename="key-hex")]
    key: [u8; 32],
}

impl UmaReqBody {
    pub fn encrypt(&self, iv: Udid) -> Vec<u8> {
        let iv = iv.iv_representation();

        let mut plaintext = Vec::with_capacity(self.data.len() + 4);
        plaintext.extend_from_slice(&(self.data.len() as u32).to_le_bytes());
        plaintext.extend_from_slice(&self.data);

        let cipher = RijndaelCbc::<Pkcs7Padding>::new(&self.key, 16).unwrap();
        let mut encrypted = cipher.encrypt(&iv, plaintext).unwrap();
        encrypted.extend_from_slice(&self.key);

        encrypted
    }

    pub fn encoded_size(&self) -> usize {
        let padding = 16 - (self.data.len() % 16);
        self.data.len() + padding + 32
    }
}

#[derive(Serialize)]
pub struct UmaRequest {
    header: UmaReqHeader,
    body: UmaReqBody,
}

impl UmaRequest {
    pub fn encode(&self) -> String {
        let mut out = Vec::with_capacity(4 + self.header.encoded_size() + self.body.encoded_size());

        let mut encrypted_body = self.body.encrypt(self.header.udid);
        let mut encoded_header = self.header.encode();
        let header_len = (encoded_header.len() as u32).to_le_bytes();
        out.extend_from_slice(&header_len);
        out.append(&mut encoded_header);
        out.append(&mut encrypted_body);

        BASE64_STANDARD.encode(out)
    }

    pub fn build(header: UmaReqHeader, body: &impl Serialize) -> UmaRequest {
        let body = UmaReqBody {
            data: rmp_serde::to_vec_named(body).unwrap(),
            key: gen_key(),
        };

        UmaRequest { header, body }
    }
}

fn decompress_response(source: &str, udid: Udid) -> Vec<u8> {
    let iv = udid.iv_representation();
    let mut source = BASE64_STANDARD.decode(source).unwrap();
    let key: Vec<u8> = source.drain(source.len() - 32..).collect();
    let cipher = RijndaelCbc::<Pkcs7Padding>::new(&key, 16).unwrap();
    let mut decrypted = cipher.decrypt(&iv, source).unwrap();
    let len: [u8; 4] = decrypted.drain(..4).collect::<Vec<_>>().try_into().unwrap();
    decrypted.truncate(u32::from_le_bytes(len) as usize);
    decrypted
}

// fn make_request(
//     udid: Uuid,
//     session_id: &str,
//     auth_key: Option<String>,
//     data: &impl Serialize,
// ) -> String {
//     let common_header = hex!(
//         "6b20e2ab6c311330f761d737ce3f3025750850665eea58b6372f8d2f57501eb344bdb7270a9067f5b63cd61f152cfb986cbfbf7a"
//     );
//
//     let mut header = Vec::new();
//     header.extend_from_slice(&common_header);
//     header.extend_from_slice(hex::decode(session_id).unwrap().as_slice());
//     header.extend_from_slice(&hex::decode(udid.to_string().replace("-", "").as_bytes()).unwrap());
//     assert_eq!(
//         &hex::decode(udid.to_string().replace("-", "").as_bytes()).unwrap(),
//         udid.as_bytes()
//     );
//
//     let random_bytes: [u8; 32] = random();
//     header.extend_from_slice(&random_bytes);
//
//     if let Some(auth_key) = auth_key {
//         header.extend_from_slice(hex::decode(auth_key).unwrap().as_slice());
//     }
//
//     let plaintext = rmp_serde::to_vec_named(data).unwrap();
//     compress_request(&header, &plaintext, udid)
// }

#[derive(Serialize, Deserialize, Clone)]
pub struct RequestBase {
    pub carrier: String,
    pub device: i64,
    pub device_id: String,
    pub device_name: String,
    pub dmm_onetime_token: Option<()>,
    pub dmm_viewer_id: Option<()>,
    pub graphics_device_name: String,
    pub ip_address: String,
    pub keychain: i64,
    pub locale: String,
    pub platform_os_version: String,
    pub viewer_id: i64,
    pub steam_id: Option<String>,
    pub steam_session_ticket: Option<String>,
}

impl Default for RequestBase {
    fn default() -> Self {
        RequestBase {
            carrier: "".to_string(),
            device: 2,
            device_id: "".to_string(),
            device_name: "Good Computer".to_string(),
            dmm_onetime_token: None,
            dmm_viewer_id: None,
            graphics_device_name: "Colorful Fish".to_string(),
            ip_address: "192.168.252.100".to_string(),
            keychain: 0,
            locale: "JPN".to_string(),
            platform_os_version: "Windows 10 (10.0.19045) 64bit".to_string(),
            viewer_id: 0,
            steam_id: None,
            steam_session_ticket: None,
        }
    }
}

#[derive(Serialize, Deserialize)]
pub struct SignupRequest {
    pub error_code: i64,
    pub error_message: String,
    pub attestation_type: i64,
    pub optin_user_birth: i64,
    pub dma_state: i64,
    pub country: String,
    pub credential: String,
}

#[derive(Serialize, Deserialize)]
pub struct StartSessionResponse {
    pub attest: bool,
    pub is_tutorial: bool,
    pub nonce: String,
    pub resource_version: String,
    pub terms_updated: bool,
}

#[derive(Serialize, Deserialize)]
pub struct StartSessionRequest {
    pub attestation_type: i64,
    pub device_token: Option<String>,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct DataHeaders {
    pub viewer_id: i64,
    pub sid: String,
    pub servertime: i64,
    pub result_code: i64,
    #[serde(flatten)]
    pub extra: HashMap<String, serde_json::Value>,
}

#[derive(Serialize, Deserialize)]
pub struct SignupData {
    pub viewer_id: i64,
    pub auth_key: String,
}

#[derive(Serialize, Deserialize)]
#[serde(bound(serialize = "T: Serialize", deserialize = "T: DeserializeOwned"))]
pub struct UmaResponse<T> {
    pub data_headers: DataHeaders,
    #[serde(default)]
    pub data: Option<T>,
}

pub struct UmaClient {
    pub agent: reqwest::Client,
    pub header: UmaReqHeader,
    pub base: RequestBase,
    pub base_url: &'static str,
    pub res_ver: String,
    pub steam_session: Option<SteamSession>,
}

impl UmaClient {
    pub fn new(udid: Udid, auth_key: Option<AuthKey>, base: RequestBase) -> Self {
        let viewer_id = base.viewer_id;
        let session_id = new_session_id(udid, viewer_id);
        let header = UmaReqHeader::new(udid, session_id, auth_key);

        let agent = reqwest::Client::builder()
            .user_agent("UnityPlayer/2022.3.62f2 (UnityWebRequest/1.0, libcurl/8.10.1-DEV)")
            .http1_title_case_headers()
            .build()
            .unwrap();

        UmaClient {
            agent,
            header,
            base,
            base_url: "https://api.games.umamusume.com/umamusume/",
            res_ver: "10002800".to_string(),
            steam_session: None,
        }
    }

    pub async fn steam_login(&mut self, username: &str, password: &str) -> anyhow::Result<()> {
        info!("Logging into steam as `{username}`");
        let steam_session = SteamSession::new(username, password)?;
        info!("Succeeded: steamID is `{}`", steam_session.steam_id());

        self.base.steam_id = Some(steam_session.steam_id().to_owned());
        self.base.steam_session_ticket = Some(steam_session.session_ticket().to_owned());

        self.steam_session = Some(steam_session);

        Ok(())
    }

    pub async fn signup(&mut self) -> anyhow::Result<UmaResponse<SignupData>> {
        let _res = self
            .request::<_, serde_json::Value>("tool/pre_signup", &())
            .await?;

        self.regen_sessionid();
        let res = self
            .request::<_, SignupData>(
                "tool/signup",
                &SignupRequest {
                    error_code: 0,
                    error_message: "".to_string(),
                    attestation_type: 0,
                    optin_user_birth: 199801,
                    dma_state: 0,
                    country: "Canada".to_string(),
                    credential: "".to_string(),
                },
            )
            .await?;

        self.base.viewer_id = res.data.as_ref().unwrap().viewer_id;
        self.header.auth_key = Some(AuthKey(
            BASE64_STANDARD.decode(&res.data.as_ref().unwrap().auth_key)?,
        ));

        Ok(res)
    }

    pub fn regen_sessionid(&mut self) {
        self.header.session_id = new_session_id(self.header.udid, self.base.viewer_id);
    }

    pub async fn start_session(
        &mut self,
        attestation_type: i64,
    ) -> anyhow::Result<UmaResponse<StartSessionResponse>> {
        let res = self
            .request::<_, StartSessionResponse>(
                "tool/start_session",
                &StartSessionRequest {
                    attestation_type,
                    device_token: None,
                },
            )
            .await?;

        self.res_ver = res.data.as_ref().unwrap().resource_version.clone();

        Ok(res)
    }

    pub async fn load_index(&mut self) -> anyhow::Result<UmaResponse<serde_json::Value>> {
        let res = self
            .request::<_, _>("load/index", &HashMap::<String, String>::new())
            .await?;

        Ok(res)
    }

    #[tracing::instrument(skip(self, req), fields(req = %serde_json::to_string(req).unwrap()))]
    pub async fn request<T: Serialize, R: DeserializeOwned + Serialize>(
        &mut self,
        endpoint: &str,
        req: &T,
    ) -> anyhow::Result<UmaResponse<R>> {
        info!("Making request..");
        // just a serialization trick, equivalent to just combining the req object and our own request base into one object
        #[derive(Serialize)]
        struct RequestWrapper<'a, T> {
            #[serde(flatten)]
            a: &'a T,
            #[serde(flatten)]
            b: &'a RequestBase,
        }

        
        let request = UmaRequest::build(
            self.header.clone(),
            &RequestWrapper {
                a: req,
                b: &self.base,
            },
        );

        let body = self
            .agent
            .post(format!("{}{}", self.base_url, endpoint))
            .header("SID", self.header.session_id.as_hex())
            .header("Device", self.base.device.to_string())
            .header("ViewerID", self.base.viewer_id.to_string())
            .header("X-Unity-Version", "2022.3.62f2")
            .header("APP-VER", "1.20.11")
            .header("RES-VER", &self.res_ver)
            .header("Accept", "*/*")
            .header("Content-Type", "application/x-msgpack")
            .body(request.encode());

        let wrapped = RequestWrapper {
            a: req,
            b: &self.base,
        };
        let headers = body
            .try_clone()
            .unwrap()
            .build()
            .unwrap()
            .headers()
            .into_iter()
            .map(|(k, v)| (k.to_string(), v.to_str().unwrap().to_owned()))
            .collect::<Vec<_>>();
        std::fs::create_dir_all(format!("./logs/{endpoint}"));
        std::fs::write(
            format!("./logs/{endpoint}/request.json"),
            &serde_json::to_string_pretty(&json!({
                // "request": {
                    "headers": headers,
                    "request-json": &wrapped,
                    "request-encoded": &request,
                // }
            })).unwrap()
        )?;


        let body = body.send().await?.text().await?;
        // let body = res.read_to_string()

        let body = decompress_response(&body, self.header.udid);

        std::fs::write(
            format!("./logs/{endpoint}/response.json"),
            &serde_json::to_string_pretty(&json!({
                // "request": {
                    "decrypted-response": hex::encode(&body),
                    "response-json": &heuristic_decode::<UmaResponse<serde_json::Value>>(&body).unwrap()
                // }
            })).unwrap()
        )?;

        let res = heuristic_decode::<UmaResponse<R>>(&body)?;

        info!(data_headers = ?res.data_headers, "request succeeded!");

        debug!(
            "Succesfully got response for `{endpoint}`: {}",
            serde_json::to_string_pretty(&res)?
        );

        if !res.data_headers.sid.is_empty() {
            self.header.session_id = SessionId(salted_md5(res.data_headers.sid.as_bytes()));
        }

        self.header.rerandomize();

        Ok(res)
    }

    pub fn serialize(&self) -> ClientConfig {
        ClientConfig {
            udid: Some(self.header.udid),
            auth_key: self.header.auth_key.clone(),
            base: Some(self.base.clone()),
        }
    }
}

#[derive(Serialize, Deserialize, Default)]
pub struct ClientConfig {
    pub udid: Option<Udid>,
    pub auth_key: Option<AuthKey>,
    pub base: Option<RequestBase>,
}

#[derive(Serialize, Deserialize, Clone)]
pub enum AuthMode {
    Steam {
        user: String,
        pass: String,
    },
    Custom {
        device_type: i64,
        attestation_type: i64,
    },
}

impl Default for AuthMode {
    fn default() -> Self {
        AuthMode::Custom {
            device_type: 2,
            attestation_type: 1,
        }
    }
}

pub async fn initialize_client(cfg: ClientConfig, auth: AuthMode) -> anyhow::Result<UmaClient> {
    let udid = cfg.udid.unwrap_or(Udid(Uuid::new_v4()));

    let device_type = match auth {
        AuthMode::Steam { .. } => 4,
        AuthMode::Custom { device_type, .. } => device_type,
    };

    let attestation_type = match auth {
        AuthMode::Steam { .. } => 0,
        AuthMode::Custom {
            attestation_type, ..
        } => attestation_type,
    };

    let base = cfg.base.unwrap_or_else(|| RequestBase {
        carrier: String::new(),
        // carrier: "OnePlus".to_string(),
        // device: 2,
        device: device_type,
        device_id: Uuid::new_v4().as_simple().to_string(),
        device_name: "OnePlus HD 542".to_string(),
        dmm_onetime_token: None,
        dmm_viewer_id: None,
        graphics_device_name: "Adreno (TM) 640".to_string(),
        ip_address: "192.168.1.100".to_string(),
        keychain: 0,
        locale: "JPN".to_string(),
        platform_os_version: "Windows 10  (10.0.19045) 64bit".to_string(),
        // platform_os_version: "Android OS 7.1.2 / API-25 (N2G48H/rel.se.infra.20200730.150525)".to_string(),
        viewer_id: 0,
        steam_id: None,
        steam_session_ticket: None,
    });

    let mut client = UmaClient::new(udid, cfg.auth_key, base);

    if let AuthMode::Steam { user, pass } = auth {
        client.steam_login(&user, &pass).await?;
    }

    if client.base.viewer_id != 0 && client.header.auth_key.is_some() {
        info!("Already signed up! viewer id => {}", client.base.viewer_id);
    } else {
        info!("Signing up...");
        client.signup().await?;
        info!("Signed up! viewer id => {}", client.base.viewer_id);
    }

    client.regen_sessionid();

    info!("Starting session...");

    let start_session_res = client.start_session(attestation_type).await?;
    info!("Session started, logging in & setting user data up...");

    client.load_index().await?;
    tokio::time::sleep(std::time::Duration::from_secs(2)).await;

    if start_session_res.data.unwrap().is_tutorial {
        info!("Skipping tutorial...");
        client
            .request::<_, serde_json::Value>("user/change_sex", &json!({"sex": 1}))
            .await?;
        client
            .request::<_, serde_json::Value>("user/change_name", &json!({"name": "Carrot Liker"}))
            .await?;
        client
            .request::<_, serde_json::Value>("tutorial/skip", &json!({}))
            .await?;
    } else {
        info!("Not in tutorial mode, continuing!");
    }

    client.load_index().await?;

    info!("Fully logged in!");

    Ok(client)
}
