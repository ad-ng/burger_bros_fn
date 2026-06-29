import { Instagram, MessageCircle } from "lucide-react";
import { instagramUrl, whatsappUrl } from "../lib/contact";

export function Footer() {
  return (
    <footer className="bg-charcoal px-4 pb-28 pt-12 text-white sm:px-6 sm:pb-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_.8fr_.8fr_.8fr]">
        <div>
          <p className="font-display text-4xl font-black leading-none text-cheddar">Burger Bros</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/68">
            Gourmet street-food burgers, tacos, combos, and late-night cravings served daily in Kigali.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-cheddar">Quick links</h3>
          <div className="mt-4 grid gap-2 text-sm font-semibold text-white/72">
            <a href="#menu" className="hover:text-white">Menu</a>
            <a href="#locations" className="hover:text-white">Locations</a>
            <a href="#hours" className="hover:text-white">Opening hours</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-cheddar">Contact</h3>
          <div className="mt-4 grid gap-2 text-sm font-semibold text-white/72">
            <span>+250 795 288 854</span>
            <span>+250 795 301 311</span>
            <span>+250 786 859 786</span>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-cheddar">Find us</h3>
          <p className="mt-4 text-sm font-semibold leading-6 text-white/72">
            Kisimenti: House 1, KG 115 St, Kigali
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={instagramUrl}
              className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-cheddar hover:text-charcoal"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href={whatsappUrl()}
              className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-herb"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
