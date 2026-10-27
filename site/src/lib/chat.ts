import { supabase } from "./supabase";

export type ChatMessage = { role: "user" | "assistant"; content: string };

const OFFLINE_REPLY =
  "The assistant isn't connected in this local build. For compliance questions, email support@kindercompliance.com or request a demo.";

// Mirrors the live site's call to the `openai-chat` edge function.
export async function sendChat(messages: ChatMessage[]): Promise<string> {
  if (!supabase) return OFFLINE_REPLY;
  const { data, error } = await supabase.functions.invoke("openai-chat", { body: { messages } });
  if (error || !data?.content) return "Sorry, I encountered an error. Please try again.";
  return data.content as string;
}
