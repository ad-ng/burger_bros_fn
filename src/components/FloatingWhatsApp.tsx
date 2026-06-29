import { MessageCircle, ShoppingBag } from "lucide-react";
import { whatsappUrl } from "../lib/contact";

export function FloatingWhatsApp() {
  return (
    <>
      <a
        href={whatsappUrl()}
        className="fixed bottom-24 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-herb text-white shadow-card transition hover:-translate-y-1 hover:bg-charcoal sm:bottom-6 sm:right-6"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
      <a
        href={whatsappUrl()}
        className="fixed inset-x-4 bottom-4 z-50 inline-flex items-center justify-center gap-2 rounded-full bg-chili px-5 py-4 text-sm font-black uppercase tracking-[0.13em] text-white shadow-glow sm:hidden"
      >
        <ShoppingBag size={18} />
        Order Burger Bros
      </a>
    </>
  );
}
