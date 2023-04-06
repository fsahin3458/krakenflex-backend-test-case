import axios, { AxiosError } from "axios";
import axiosRetry from "axios-retry";
import { config } from "../../resource/config";
import { logger } from "./logger";

export const httpClient = axios.create({
  headers: {
    "x-api-key": config.API_KEY,
  },
  baseURL: config.API_BASE_URL,
});

function shouldRetry(error: AxiosError) {
  const shouldRetry =
    (error.response?.status &&
      error.response?.status >= 500 &&
      error.response.status <= 599) ||
    axiosRetry.isNetworkOrIdempotentRequestError(error);

  if (shouldRetry) {
    logger.warn("Axios retry condition triggered...", error);
  }

  return shouldRetry;
}

// Set up axios-retry
axiosRetry(httpClient, {
  retries: config.HTTP_RETRY_COUNT,
  retryCondition: shouldRetry,
  retryDelay: (retryCount) => {
    // Exponential backoff retry delay
    return 2 ** retryCount * 1000; // in ms
  },
});
