import { MessageCircle, ShoppingBag } from "lucide-react";

type FloatingWhatsAppProps = {
  cartCount: number;
  onCartOpen: () => void;
};

export function FloatingWhatsApp({ cartCount, onCartOpen }: FloatingWhatsAppProps) {
  return (
    <>
      <button
        type="button"
        onClick={onCartOpen}
        className="fixed bottom-24 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-herb text-white shadow-card transition hover:-translate-y-1 hover:bg-charcoal sm:bottom-6 sm:right-6"
        aria-label="Open WhatsApp cart"
      >
        <MessageCircle size={28} />
        {cartCount > 0 ? (
          <span className="absolute -right-1 -top-1 grid h-6 min-w-6 place-items-center rounded-full bg-cheddar px-1 text-xs font-black text-charcoal">
            {cartCount}
          </span>
        ) : null}
      </button>
      <button
        type="button"
        onClick={onCartOpen}
        className="fixed inset-x-4 bottom-4 z-50 inline-flex items-center justify-center gap-2 rounded-full bg-chili px-5 py-4 text-sm font-black uppercase tracking-[0.13em] text-white shadow-glow sm:hidden"
      >
        <ShoppingBag size={18} />
        Cart {cartCount > 0 ? `(${cartCount})` : ""}
      </button>
    </>
  );
}
