import { useEffect, useState } from "react";
import { subscribeToasts, type Toast } from "@/lib/toast";

export default function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  useEffect(() => subscribeToasts(setToasts), []);

  return (
    <ol className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
      {toasts.map(t => (
        <li
          key={t.id}
          role="status"
          className={
            "pointer-events-auto relative mb-2 flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg animate-in slide-in-from-bottom-full " +
            (t.variant === "destructive"
              ? "border-destructive bg-destructive text-destructive-foreground"
              : "border-border bg-background text-foreground")
          }
        >
          <div className="grid gap-1">
            <div className="text-sm font-semibold">{t.title}</div>
            {t.description && <div className="text-sm opacity-90">{t.description}</div>}
          </div>
        </li>
      ))}
    </ol>
  );
}
