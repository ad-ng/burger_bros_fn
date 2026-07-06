import { Download, Share, Smartphone, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

const dismissStorageKey = "burger-bros-install-dismissed";

function isIosDevice() {
  if (typeof window === "undefined") {
    return false;
  }

  return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
}

function isStandalone() {
  if (typeof window === "undefined") {
    return false;
  }

  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (window.navigator as Navigator & { standalone?: boolean }).standalone === true
  );
}

export function InstallPrompt() {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);
  const isIos = useMemo(isIosDevice, []);

  useEffect(() => {
    if (isStandalone() || window.localStorage.getItem(dismissStorageKey) === "true") {
      return;
    }

    const showTimer = window.setTimeout(() => setVisible(true), 2600);
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallEvent(event as BeforeInstallPromptEvent);
      setVisible(true);
    };
    const handleInstalled = () => {
      setVisible(false);
      window.localStorage.setItem(dismissStorageKey, "true");
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleInstalled);

    return () => {
      window.clearTimeout(showTimer);
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    window.localStorage.setItem(dismissStorageKey, "true");
  };

  const install = async () => {
    if (!installEvent) {
      return;
    }

    await installEvent.prompt();
    const choice = await installEvent.userChoice;

    if (choice.outcome === "accepted") {
      setVisible(false);
      window.localStorage.setItem(dismissStorageKey, "true");
    }

    setInstallEvent(null);
  };

  if (!visible || (!installEvent && !isIos)) {
    return null;
  }

  return (
    <div className="fixed inset-x-3 bottom-20 z-[65] mx-auto max-w-md rounded-[1.2rem] border border-charcoal/10 bg-white p-4 text-charcoal shadow-card sm:bottom-5 sm:right-5 sm:left-auto">
      <div className="flex gap-3">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-cheddar text-charcoal">
          <Smartphone size={22} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-chili">Add to phone</p>
              <h2 className="mt-1 font-display text-2xl font-black leading-none">Burger Bros shortcut</h2>
            </div>
            <button
              type="button"
              onClick={dismiss}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cream text-charcoal"
              aria-label="Dismiss install prompt"
            >
              <X size={18} />
            </button>
          </div>

          {isIos && !installEvent ? (
            <p className="mt-3 text-sm font-semibold leading-6 text-charcoal/65">
              Tap Share, then Add to Home Screen for quick menu access.
            </p>
          ) : (
            <p className="mt-3 text-sm font-semibold leading-6 text-charcoal/65">
              Install the menu shortcut for faster ordering, no app store needed.
            </p>
          )}

          <div className="mt-4 flex gap-2">
            {installEvent ? (
              <button
                type="button"
                onClick={install}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-chili px-5 text-sm font-black uppercase tracking-[0.12em] text-white"
              >
                <Download size={17} />
                Install
              </button>
            ) : (
              <div className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-cream px-4 text-sm font-black text-charcoal">
                <Share size={17} />
                Share &gt; Add
              </div>
            )}
            <button
              type="button"
              onClick={dismiss}
              className="inline-flex h-11 items-center justify-center rounded-full border border-charcoal/10 px-4 text-sm font-black uppercase tracking-[0.12em] text-charcoal"
            >
              Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
