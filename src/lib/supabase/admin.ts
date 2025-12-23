import "server-only";
import { createClient } from "@supabase/supabase-js";
import { serverEnv } from "@/backend/env.server";
import { sharedEnv } from "../../../env.shared";
export function createAdminClient() {
  if (!serverEnv.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error(
      "SUPABASE_SERVICE_ROLE_KEY is not set. This is required for admin operations.",
    );
  }

  return createClient(
    sharedEnv.NEXT_PUBLIC_SUPABASE_URL,
    serverEnv.SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  );
}
