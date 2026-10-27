import { useState } from "react";
import { Check, Cookie, Settings, X } from "lucide-react";

// Consent is stored locally. No analytics or marketing scripts are loaded in
// this build; read getCookieConsent() before adding any.
const KEY = "kc_cookie_consent";
type Consent = { necessary: true; analytics: boolean; marketing: boolean; savedAt: string };

export function getCookieConsent(): Consent | null {
  try { return JSON.parse(localStorage.getItem(KEY) ?? "null"); } catch { return null; }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => getCookieConsent() === null);
  const [customizing, setCustomizing] = useState(false);
  const [choice, setChoice] = useState({ analytics: false, marketing: false });

  function save(c: { analytics: boolean; marketing: boolean }) {
    try { localStorage.setItem(KEY, JSON.stringify({ necessary: true, ...c, savedAt: new Date().toISOString() })); } catch { /* storage blocked */ }
    setVisible(false);
  }

  if (!visible) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t shadow-lg animate-in slide-in-from-bottom-5 duration-300">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-primary/10 p-2">
              <Cookie className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">
                Cookie Preferences
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                We use cookies to enhance your experience, analyze site traffic, and for marketing purposes. You can choose which cookies to accept.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            <button type="button" onClick={() => setCustomizing(c => !c)} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
              <Settings className="h-4 w-4 mr-2" />
              Customize
            </button>
            <button type="button" onClick={() => save({ analytics: false, marketing: false })} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
              <X className="h-4 w-4 mr-2" />
              Necessary Only
            </button>
            <button type="button" onClick={() => save({ analytics: true, marketing: true })} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
              <Check className="h-4 w-4 mr-2" />
              Accept All
            </button>
          </div>
        </div>
        {customizing && (
          <div className="mt-4 grid gap-3 rounded-lg border border-border bg-card p-4 text-sm sm:grid-cols-3">
            <label className="flex items-center gap-2 text-muted-foreground"><input type="checkbox" checked disabled /> Necessary (always on)</label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={choice.analytics} onChange={e => setChoice(c => ({ ...c, analytics: e.target.checked }))} /> Analytics</label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={choice.marketing} onChange={e => setChoice(c => ({ ...c, marketing: e.target.checked }))} /> Marketing</label>
            <button type="button" onClick={() => save(choice)} className="sm:col-span-3 inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 font-medium text-primary-foreground hover:bg-primary/90">Save preferences</button>
          </div>
        )}
      </div>
    </div>
  );
}
