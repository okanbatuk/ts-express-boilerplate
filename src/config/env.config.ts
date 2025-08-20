import { z } from "zod";
import dotenvSafe from "dotenv-safe";
dotenvSafe.config({
  allowEmptyValues: true,
});

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  DATABASE_URL: z.url(),
  COOKIE_SECRET: z.string().min(6),
  JWT_ACCESS_SECRET: z.string().min(6),
  JWT_REFRESH_SECRET: z.string().min(6),
  JWT_ACCESS_EXPIRES_IN: z.string().default("15m"),
  JWT_REFRESH_EXPIRES_IN: z.string().default("7d"),
  CORS_ORIGIN: z.url().default("http://localhost:3000"),
  PORT: z.coerce.number().default(5000),
});

export const config = envSchema.parse(process.env);
