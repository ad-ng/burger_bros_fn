import { WifiOff, X } from "lucide-react";
import { useEffect, useState } from "react";

export function OfflineNotice() {
  const [offline, setOffline] = useState(() =>
    typeof navigator !== "undefined" ? !navigator.onLine : false,
  );
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const updateOnline = () => setOffline(false);
    const updateOffline = () => {
      setDismissed(false);
      setOffline(true);
    };

    window.addEventListener("online", updateOnline);
    window.addEventListener("offline", updateOffline);

    return () => {
      window.removeEventListener("online", updateOnline);
      window.removeEventListener("offline", updateOffline);
    };
  }, []);

  if (!offline || dismissed) {
    return null;
  }

  return (
    <div className="fixed inset-x-3 bottom-36 z-[66] mx-auto max-w-md rounded-[1rem] border border-charcoal/10 bg-charcoal p-4 text-white shadow-card sm:bottom-24 sm:right-5 sm:left-auto">
      <div className="flex gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cheddar text-charcoal">
          <WifiOff size={20} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-cheddar">Offline mode</p>
              <p className="mt-1 text-sm font-semibold leading-6 text-white/76">
                Cached menu pages and images still work. WhatsApp orders will send when your connection returns.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-white"
              aria-label="Dismiss offline notice"
            >
              <X size={17} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
