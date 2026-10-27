const CALENDLY_URL = "https://calendly.com/kindercompliance/30-minute-introduction-meeting";

declare global {
  interface Window { Calendly?: { initPopupWidget: (opts: { url: string }) => void } }
}

let loading: Promise<void> | null = null;

// Loaded on first click instead of on every page view.
function loadCalendly(): Promise<void> {
  if (window.Calendly) return Promise.resolve();
  loading ??= new Promise((resolve, reject) => {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(css);
    const js = document.createElement("script");
    js.src = "https://assets.calendly.com/assets/external/widget.js";
    js.onload = () => resolve();
    js.onerror = () => reject(new Error("Calendly failed to load"));
    document.head.appendChild(js);
  });
  return loading;
}

export async function openCalendly() {
  try {
    await loadCalendly();
    window.Calendly!.initPopupWidget({ url: CALENDLY_URL });
  } catch {
    window.open(CALENDLY_URL, "_blank", "noopener");
  }
}
