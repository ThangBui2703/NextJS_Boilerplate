import "server-only";
import { defineConfig } from "drizzle-kit";
import { serverEnv } from "../env.server";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/backend/db/schemas/*",
  out: "./src/backend/db/migrations",
  dbCredentials: {
    url: serverEnv.DATABASE_URL,
  },
});
