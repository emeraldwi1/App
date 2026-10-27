export type Toast = { id: number; title: string; description?: string; variant?: "default" | "destructive" };

type Listener = (toasts: Toast[]) => void;
let toasts: Toast[] = [];
const listeners = new Set<Listener>();
let nextId = 1;

export function toast(t: Omit<Toast, "id">) {
  const id = nextId++;
  toasts = [...toasts, { ...t, id }];
  listeners.forEach(l => l(toasts));
  setTimeout(() => {
    toasts = toasts.filter(x => x.id !== id);
    listeners.forEach(l => l(toasts));
  }, 5000);
}

export function subscribeToasts(l: Listener) {
  listeners.add(l);
  l(toasts);
  return () => { listeners.delete(l); };
}
