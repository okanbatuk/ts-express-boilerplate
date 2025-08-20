import "reflect-metadata";
import express from "express";
import cookieParser from "cookie-parser";
import { config, logger } from "./config/index.js";

// import { container } from "./di/container.js";
// import { router } from "./routes/index.js";

export async function buildApp() {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser(config.COOKIE_SECRET));
  app.use(logger);
  // app.use("/api/v1", router(container));
  return app;
}
