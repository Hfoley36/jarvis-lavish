const HARDCODED_FALLBACK_HOST = "";
const UMAMI_PATH = "/api/send";
const DEFAULT_HOSTNAME = "cli";
const DEFAULT_TITLE = "ZILO Plan Editor CLI";
const DEFAULT_REQUEST_TIMEOUT_MS = 1_000;

export function resolveTelemetryConfig(input) {
  return { enabled: false, host: "", websiteID: "" };
}

export function getBuildTimeUmamiHost() {
  return "";
}

export function getBuildTimeUmamiWebsiteID() {
  return "";
}

export function createTelemetryClient(config) {
  return new NoopTelemetryClient();
}

let defaultClient = null;

export function initDefaultTelemetry(init) {
  defaultClient = new NoopTelemetryClient();
  return defaultClient;
}

export function getDefaultTelemetry() {
  return defaultClient || new NoopTelemetryClient();
}

export function resetDefaultTelemetryForTests() {
  defaultClient = null;
}

class NoopTelemetryClient {
  track() {}
  pageview() {}
  async close() {}
}

