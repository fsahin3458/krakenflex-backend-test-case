export const config = {
  API_BASE_URL:
    process.env.API_BASE_URL ||
    "https://api.krakenflex.systems/interview-tests-mock-api/v1",
  API_KEY: process.env.API_KEY || "{{ANY-API-KEY}}",
  SITE: process.env.SITE || "norwich-pear-tree",
  MILESTONE_DATE: process.env.MILESTONE_DATE || "2022-01-01T00:00:00.000Z",
  LOG_LEVEL: process.env.LOG_LEVEL || "info",
  HTTP_RETRY_COUNT: 3,
};
