import { Menu, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { whatsappUrl } from "../lib/contact";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Why us", href: "#why" },
  { label: "Locations", href: "#locations" },
  { label: "Gallery", href: "#gallery" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-charcoal/10 bg-cream/88 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Burger Bros home">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-charcoal text-lg font-black text-cheddar shadow-card">
            BB
          </span>
          <span className="font-display text-xl font-black leading-none text-charcoal">
            Burger
            <br />
            Bros
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-extrabold uppercase tracking-[0.16em] text-charcoal/70 transition hover:text-chili"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={whatsappUrl()}
          className="hidden items-center gap-2 rounded-full bg-chili px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-charcoal md:flex"
        >
          <ShoppingBag size={18} />
          Order
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-charcoal/15 bg-white text-charcoal md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          <Menu size={22} />
        </button>
      </nav>

      {open ? (
        <div className="border-t border-charcoal/10 bg-cream px-4 py-4 md:hidden">
          <div className="mx-auto grid max-w-7xl gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full bg-white px-4 py-3 text-sm font-black uppercase tracking-[0.14em] text-charcoal shadow-sm"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
