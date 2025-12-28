use anyhow::anyhow;
use rmpv::Utf8String;
use serde::Deserialize;

pub fn kvstream_decode<T>(mut data: &[u8]) -> anyhow::Result<T>
where
    T: for<'de> Deserialize<'de>,
{
    let mut scratch: [u8; 256] = [0; 256];

    let mut start = 0;
    while start < data.len()
        && !matches!(
            rmp::Marker::from_u8(data[start]),
            rmp::Marker::Str8 | rmp::Marker::Str16 | rmp::Marker::Str32 | rmp::Marker::FixStr(_)
        )
    {
        start += 1;
    }

    let mut out = Vec::new();

    data = &data[start..];

    while !data.is_empty() {
        let key = rmp::decode::read_str(&mut data, &mut scratch[..])
            .map_err(|_e| anyhow!("failed to read string key"))?;
        let value = rmpv::decode::read_value(&mut data)?;
        out.push((
            rmpv::Value::String(Utf8String::from(key.to_string())),
            value,
        ));
    }

    let map = rmpv::Value::Map(out);
    rmpv::ext::from_value(map).map_err(anyhow::Error::from)
}

pub fn msgpack_len_decode<T>(data: &[u8]) -> anyhow::Result<T>
where
    T: for<'de> Deserialize<'de>,
{
    let (len, data) = data
        .split_at_checked(4)
        .ok_or(anyhow!("message too short"))?;
    let len = u32::from_le_bytes(len.try_into()?) as usize;

    if len > data.len() {
        return Err(anyhow!("message too short"));
    }

    rmp_serde::from_slice(&data[..len]).map_err(anyhow::Error::from)
}

pub fn heuristic_decode<T>(data: &[u8]) -> anyhow::Result<T>
where
    T: for<'de> Deserialize<'de>,
{
    // println!("{}", String::from_utf8_lossy(data));
    // if let Ok(v) = msgpack_len_decode::<serde_json::Value>(data) {
    //     println!("{}", serde_json::to_string_pretty(&v)?);
    // }
    //
    // if let Ok(v) = kvstream_decode::<HashMap<String, serde_json::Value>>(data) {
    //     println!("{}", serde_json::to_string_pretty(&v)?);
    // }
    // println!("{}", msgpack_len_decode(data));

    msgpack_len_decode(data).or_else(|_| kvstream_decode(data))
}
