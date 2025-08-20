import "reflect-metadata";
import express from "express";
import cookieParser from "cookie-parser";
import { config, logger } from "./config/index.ts";

// import { container } from "./di/container.ts";
// import { router } from "./routes/index.ts;

export async function buildApp() {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser(config.COOKIE_SECRET));
  app.use(logger);
  // app.use("/api/v1", router(container));
  return app;
}
