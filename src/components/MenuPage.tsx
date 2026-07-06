import { MapPin } from "lucide-react";
import { OpenStatus } from "./OpenStatus";
import { MenuExplorer } from "./MenuExplorer";

type MenuPageProps = {
  onCartOpen: () => void;
};

export function MenuPage({ onCartOpen }: MenuPageProps) {
  return (
    <main className="pt-20">
      <section className="px-4 pb-2 pt-5 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-[1fr_auto_auto] md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-chili">Full ordering menu</p>
            <h1 className="mt-1 font-display text-3xl font-black leading-none md:text-4xl">
              Search, add, send on WhatsApp.
            </h1>
          </div>
          <OpenStatus />
          <a
            href="#locations"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-charcoal/10 bg-white px-4 text-sm font-black uppercase tracking-[0.12em] text-charcoal"
          >
            <MapPin size={17} />
            Branches
          </a>
        </div>
      </section>

      <MenuExplorer compact onAddToCart={onCartOpen} />

      <section id="locations" className="px-4 pb-24 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-[1.2rem] border border-charcoal/10 bg-white p-4 shadow-sm md:grid-cols-2">
          <div className="rounded-xl bg-cream p-4">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-charcoal/50">Kisimenti</p>
            <p className="mt-2 font-display text-2xl font-black">House 1, KG 115 St</p>
            <p className="mt-1 text-sm font-bold text-charcoal/60">+250 795 288 854</p>
          </div>
          <div className="rounded-xl bg-cream p-4">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-charcoal/50">Nyamirambo</p>
            <p className="mt-2 font-display text-2xl font-black">Nyamirambo branch/contact</p>
            <p className="mt-1 text-sm font-bold text-charcoal/60">+250 786 859 786</p>
          </div>
        </div>
      </section>
    </main>
  );
}
