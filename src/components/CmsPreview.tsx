import { motion } from "framer-motion";
import {
  ImagePlus,
  LayoutDashboard,
  LockKeyhole,
  MapPin,
  MessageSquareText,
  Save,
  Star,
  ToggleLeft,
  Utensils,
} from "lucide-react";
import { useState } from "react";
import { menuItems } from "../data/menu";

export function CmsPreview() {
  const [toastVisible, setToastVisible] = useState(false);
  const [soldOut, setSoldOut] = useState(true);
  const dashboardCards = [
    { label: "Menu Items", value: String(menuItems.length), icon: Utensils },
    { label: "Today’s Special", value: "1", icon: Star },
    { label: "Gallery", value: "6", icon: ImagePlus },
    { label: "Reviews", value: "4", icon: MessageSquareText },
    { label: "Locations", value: "2", icon: MapPin },
  ];

  const showDemoToast = () => {
    setToastVisible(true);
    window.setTimeout(() => setToastVisible(false), 2600);
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <main className="mx-auto grid min-h-screen max-w-7xl gap-8 px-4 py-8 lg:grid-cols-[360px_1fr] lg:px-8">
        <motion.aside
          className="rounded-[1.5rem] border border-charcoal/10 bg-charcoal p-6 text-white shadow-card"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cheddar text-charcoal">
            <LockKeyhole size={22} />
          </div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cheddar">Demo CMS Preview</p>
          <h1 className="mt-3 font-display text-4xl font-black leading-none">
            Burger Bros content manager
          </h1>
          <p className="mt-4 text-sm font-semibold leading-6 text-white/70">
            Changes are not saved yet. Full backend CMS can be added if Burger Bros wants it.
          </p>

          <div className="mt-8 rounded-[1.2rem] border border-white/10 bg-white/8 p-4">
            <label className="text-xs font-black uppercase tracking-[0.16em] text-white/55">Email</label>
            <div className="mt-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-charcoal">
              team@burgerbros.rw
            </div>
            <label className="mt-4 block text-xs font-black uppercase tracking-[0.16em] text-white/55">
              Password
            </label>
            <div className="mt-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-charcoal">
              ••••••••••••
            </div>
            <button
              type="button"
              onClick={showDemoToast}
              className="mt-4 w-full rounded-full bg-cheddar px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-charcoal transition hover:bg-white"
            >
              Preview Login
            </button>
          </div>
        </motion.aside>

        <section className="space-y-6">
          <div className="rounded-[1.5rem] border border-charcoal/10 bg-white p-6 shadow-card">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-chili">
                  <LayoutDashboard size={16} />
                  Demo dashboard
                </div>
                <h2 className="font-display text-4xl font-black leading-none text-charcoal">
                  Update prices, specials, photos, and sold-out items later.
                </h2>
              </div>
              <button
                type="button"
                onClick={showDemoToast}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-chili px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-glow transition hover:bg-charcoal"
              >
                <Save size={18} />
                Save Changes
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {dashboardCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.label}
                  className="rounded-[1.2rem] border border-charcoal/10 bg-white p-5 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.35 }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-cheddar text-charcoal">
                    <Icon size={20} />
                  </div>
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-charcoal/55">{card.label}</p>
                  <p className="mt-2 font-display text-4xl font-black text-charcoal">{card.value}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.1fr_.9fr]">
            <div className="rounded-[1.5rem] border border-charcoal/10 bg-white p-6 shadow-card">
              <h3 className="font-display text-3xl font-black text-charcoal">Menu editor</h3>
              <div className="mt-5 space-y-4">
                {menuItems.slice(0, 4).map((item) => (
                  <div key={item.name} className="grid gap-3 rounded-[1rem] bg-cream p-4 md:grid-cols-[1.4fr_.7fr_auto] md:items-center">
                    <div>
                      <label className="text-xs font-black uppercase tracking-[0.14em] text-charcoal/50">Item</label>
                      <input
                        value={item.name}
                        readOnly
                        className="mt-2 w-full rounded-xl border border-charcoal/10 bg-white px-4 py-3 text-sm font-bold text-charcoal"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-black uppercase tracking-[0.14em] text-charcoal/50">Price</label>
                      <input
                        value={item.price}
                        readOnly
                        className="mt-2 w-full rounded-xl border border-charcoal/10 bg-white px-4 py-3 text-sm font-bold text-charcoal"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setSoldOut((value) => !value)}
                      className={`mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-full px-4 text-xs font-black uppercase tracking-[0.1em] md:mt-0 ${
                        soldOut && item.soldOut ? "bg-charcoal text-white" : "bg-white text-charcoal"
                      }`}
                    >
                      <ToggleLeft size={18} />
                      Sold Out
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[1.5rem] border border-charcoal/10 bg-white p-6 shadow-card">
                <h3 className="font-display text-3xl font-black text-charcoal">Today’s Special</h3>
                <div className="mt-5 grid gap-4">
                  <input
                    readOnly
                    value="Drunken Granny Burger + Fries"
                    className="rounded-xl border border-charcoal/10 bg-cream px-4 py-3 text-sm font-bold text-charcoal"
                  />
                  <textarea
                    readOnly
                    value="Saucy beef, melted cheese, toasted bun, golden fries, and Burger Bros heat."
                    className="min-h-28 rounded-xl border border-charcoal/10 bg-cream px-4 py-3 text-sm font-bold leading-6 text-charcoal"
                  />
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-dashed border-charcoal/25 bg-white p-6 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-cheddar text-charcoal">
                    <ImagePlus size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-black text-charcoal">Image upload</h3>
                    <p className="text-sm font-semibold text-charcoal/60">Drag photos here in the full CMS.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-charcoal/10 bg-white p-6 shadow-card">
                <h3 className="font-display text-3xl font-black text-charcoal">Reviews</h3>
                <input
                  readOnly
                  value="Li Lin Sonia"
                  className="mt-5 w-full rounded-xl border border-charcoal/10 bg-cream px-4 py-3 text-sm font-bold text-charcoal"
                />
                <textarea
                  readOnly
                  value="Amazing burgers I’ve ever tasted very juicy and very big meat."
                  className="mt-4 min-h-24 w-full rounded-xl border border-charcoal/10 bg-cream px-4 py-3 text-sm font-bold leading-6 text-charcoal"
                />
              </div>

              <div className="rounded-[1.5rem] border border-charcoal/10 bg-white p-6 shadow-card">
                <h3 className="font-display text-3xl font-black text-charcoal">Locations</h3>
                <input
                  readOnly
                  value="Kisimenti: House 1, KG 115 St, Kigali"
                  className="mt-5 w-full rounded-xl border border-charcoal/10 bg-cream px-4 py-3 text-sm font-bold text-charcoal"
                />
                <input
                  readOnly
                  value="+250 795 288 854"
                  className="mt-4 w-full rounded-xl border border-charcoal/10 bg-cream px-4 py-3 text-sm font-bold text-charcoal"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {toastVisible ? (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-charcoal px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-card">
          Demo only — backend required to save changes.
        </div>
      ) : null}
    </div>
  );
}
