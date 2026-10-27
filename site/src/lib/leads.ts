import { supabase } from "./supabase";

// Same row shape the live site inserts into the `demo_requests` table.
export type DemoRequest = {
  center_name: string;
  admin_name: string;
  phone_number: string;
  email: string | null;
  address: string;
  license_number?: string | null;
};

const STORAGE_KEY = "kc_demo_requests";

export type StoredDemoRequest = DemoRequest & { id: string; created_at: string };

export function getLocalDemoRequests(): StoredDemoRequest[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export async function submitDemoRequest(row: DemoRequest): Promise<"supabase" | "local"> {
  if (supabase) {
    const { error } = await supabase.from("demo_requests").insert(row);
    if (error) throw error;
    return "supabase";
  }
  const saved: StoredDemoRequest = { ...row, id: crypto.randomUUID(), created_at: new Date().toISOString() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...getLocalDemoRequests(), saved]));
  return "local";
}

// The live site's contact form only showed a success toast and never stored
// anything. Here messages are kept, locally or in `contact_messages`
// (see supabase/schema.sql).
export type ContactMessage = { name: string; email: string; phone: string | null; subject: string; message: string };

const CONTACT_KEY = "kc_contact_messages";

export function getLocalContactMessages(): (ContactMessage & { id: string; created_at: string })[] {
  try {
    return JSON.parse(localStorage.getItem(CONTACT_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export async function submitContactMessage(row: ContactMessage): Promise<"supabase" | "local"> {
  if (supabase) {
    const { error } = await supabase.from("contact_messages").insert(row);
    if (error) throw error;
    return "supabase";
  }
  const saved = { ...row, id: crypto.randomUUID(), created_at: new Date().toISOString() };
  localStorage.setItem(CONTACT_KEY, JSON.stringify([...getLocalContactMessages(), saved]));
  return "local";
}
