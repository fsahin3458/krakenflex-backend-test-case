import { createLogger, transports, format } from "winston";
import { config } from "../../resource/config";

const logConfiguration = {
  format:
    process.env.NODE_ENV === "test"
      ? format.simple()
      : format.combine(format.json()),
  transports: [
    new transports.Console({
      level: config.LOG_LEVEL,
    }),
  ],
};

export const logger = createLogger(logConfiguration);
