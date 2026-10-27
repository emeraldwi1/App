import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Supabase is optional. With no env vars set, the site runs fully offline and
// every feature below falls back to local behaviour.
const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const supabase: SupabaseClient | null = url && anonKey ? createClient(url, anonKey) : null;
export const isSupabaseConnected = supabase !== null;
