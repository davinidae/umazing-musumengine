/** Options for RuntimeClient construction. */
export type RuntimeClientOptions = ServiceOptions;

/** Common options for long-running services (decrypt/encrypt). */
export type ServiceOptions = {
  DETERMINISTIC_ENC_SECRET: string;
};
