import { ArrowLeft, MapPin, Minus, Plus, Send, ShoppingBag, Trash2, X } from "lucide-react";
import { useMemo, useState } from "react";
import { cartOrderUrl, useCart } from "../context/CartContext";
import { locations } from "../data/locations";
import { formatRwf, parsePriceValue } from "../lib/menuHelpers";

type CartDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const {
    lines,
    totalItems,
    totalPrice,
    lastOrderMessage,
    addItem,
    decrementItem,
    removeItem,
    clearCart,
    buildOrderMessage,
    saveLastOrder,
  } = useCart();
  const [deliveryArea, setDeliveryArea] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [notes, setNotes] = useState("");
  const orderMessage = useMemo(
    () => buildOrderMessage(notes, deliveryArea, selectedBranch),
    [buildOrderMessage, deliveryArea, notes, selectedBranch],
  );

  const handleSendOrder = () => {
    saveLastOrder(orderMessage);
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-[70] bg-charcoal/45 transition ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed bottom-0 right-0 top-0 z-[80] flex w-full max-w-md flex-col bg-cream shadow-card transition duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Order cart"
      >
        <div className="flex items-center justify-between border-b border-charcoal/10 bg-white px-5 py-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-chili">WhatsApp cart</p>
            <h2 className="font-display text-3xl font-black text-charcoal">{totalItems} item{totalItems === 1 ? "" : "s"}</h2>
            <p className="mt-1 text-xs font-bold text-charcoal/50">Closing keeps your cart saved.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-11 w-11 place-items-center rounded-full border border-charcoal/10 bg-cream text-charcoal"
            aria-label="Continue ordering"
          >
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {lines.length === 0 ? (
            <div className="grid min-h-80 place-items-center rounded-[1.2rem] border border-dashed border-charcoal/20 bg-white p-6 text-center">
              <div>
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-cheddar text-charcoal">
                  <ShoppingBag size={24} />
                </div>
                <h3 className="mt-4 font-display text-3xl font-black text-charcoal">Build an order</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-charcoal/60">
                  Add menu items, then send the full order to WhatsApp in one tap.
                </p>
                {lastOrderMessage ? (
                  <a
                    href={cartOrderUrl(lastOrderMessage)}
                    className="mt-5 inline-flex items-center justify-center rounded-full bg-charcoal px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white"
                  >
                    Order Again
                  </a>
                ) : null}
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/10 bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-charcoal"
                >
                  <ArrowLeft size={17} />
                  Browse Menu
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {lines.map((line) => (
                <div key={line.id} className="rounded-[1rem] border border-charcoal/10 bg-white p-4">
                  <div className="flex gap-3">
                    <img
                      src={line.item.image}
                      alt=""
                      className="h-20 w-20 rounded-xl object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-xl font-black leading-none text-charcoal">{line.item.name}</h3>
                      <p className="mt-2 text-sm font-black text-chili">
                        {formatRwf(parsePriceValue(line.item.price) * line.quantity)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(line.id)}
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream text-charcoal/60"
                      aria-label={`Remove ${line.item.name}`}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="inline-flex items-center rounded-full border border-charcoal/10 bg-cream p-1">
                      <button
                        type="button"
                        onClick={() => decrementItem(line.id)}
                        className="grid h-9 w-9 place-items-center rounded-full bg-white text-charcoal"
                        aria-label={`Decrease ${line.item.name}`}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-10 text-center text-sm font-black">{line.quantity}</span>
                      <button
                        type="button"
                        onClick={() => addItem(line.item)}
                        className="grid h-9 w-9 place-items-center rounded-full bg-charcoal text-white"
                        aria-label={`Increase ${line.item.name}`}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.12em] text-charcoal/45">
                      {line.item.category}
                    </span>
                  </div>
                </div>
              ))}

              <div className="grid gap-3 rounded-[1rem] border border-charcoal/10 bg-white p-4">
                <div>
                  <label className="text-xs font-black uppercase tracking-[0.14em] text-charcoal/50">
                    Preferred branch optional
                  </label>
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    {locations.map((location) => (
                      <button
                        key={location.name}
                        type="button"
                        onClick={() =>
                          setSelectedBranch((current) =>
                            current === location.name ? "" : location.name,
                          )
                        }
                        className={`flex min-h-16 items-start gap-2 rounded-xl border px-3 py-3 text-left transition ${
                          selectedBranch === location.name
                            ? "border-chili bg-chili text-white"
                            : "border-charcoal/10 bg-cream text-charcoal hover:border-cheddar"
                        }`}
                      >
                        <MapPin size={17} className="mt-0.5 shrink-0" />
                        <span>
                          <span className="block text-sm font-black">{location.name}</span>
                          <span className={`block text-xs font-semibold leading-5 ${
                            selectedBranch === location.name ? "text-white/75" : "text-charcoal/55"
                          }`}>
                            {location.address}
                          </span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <label className="text-xs font-black uppercase tracking-[0.14em] text-charcoal/50">
                  Delivery or pickup area
                </label>
                <input
                  value={deliveryArea}
                  onChange={(event) => setDeliveryArea(event.target.value)}
                  placeholder="Kimironko, Kisimenti, pickup..."
                  className="rounded-xl border border-charcoal/10 bg-cream px-4 py-3 text-sm font-bold text-charcoal outline-none focus:border-chili"
                />
                <label className="text-xs font-black uppercase tracking-[0.14em] text-charcoal/50">
                  Notes
                </label>
                <textarea
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  placeholder="No onions, extra sauce, delivery details..."
                  className="min-h-24 rounded-xl border border-charcoal/10 bg-cream px-4 py-3 text-sm font-bold leading-6 text-charcoal outline-none focus:border-chili"
                />
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-charcoal/10 bg-white p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-black uppercase tracking-[0.14em] text-charcoal/55">Estimated total</span>
            <span className="font-display text-3xl font-black text-chili">{formatRwf(totalPrice)}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="mb-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-charcoal/10 bg-cream px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-charcoal transition hover:bg-cheddar"
          >
            <ArrowLeft size={17} />
            Continue Ordering
          </button>
          <div className="grid grid-cols-[1fr_auto] gap-3">
            <a
              href={cartOrderUrl(orderMessage)}
              onClick={handleSendOrder}
              className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-glow ${
                lines.length === 0 ? "bg-charcoal/40" : "bg-chili hover:bg-charcoal"
              }`}
            >
              <Send size={18} />
              Send Order
            </a>
            <button
              type="button"
              onClick={clearCart}
              className="grid h-full min-h-14 w-14 place-items-center rounded-full border border-charcoal/10 bg-cream text-charcoal"
              aria-label="Clear cart"
              disabled={lines.length === 0}
            >
              <Trash2 size={19} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
