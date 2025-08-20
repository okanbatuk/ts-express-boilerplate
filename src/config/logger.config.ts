import pinoHttp from "pino-http";
import { config } from "./env.config";

export const logger = pinoHttp({
  level: process.env.LOG_LEVEL || "info",
  transport:
    config.NODE_ENV === "development"
      ? {
          target: "pino-pretty",
          options: { translateTime: "HH:MM:ss", colorize: true },
        }
      : undefined,
});
