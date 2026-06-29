import { motion } from "framer-motion";
import { ArrowDown, Flame, MessageCircle } from "lucide-react";
import { whatsappUrl } from "../lib/contact";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream bg-hero-radial pt-28 md:pt-32">
      <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-10 px-4 pb-16 sm:px-6 md:grid-cols-[1.02fr_.98fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-chili/25 bg-white px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-chili shadow-sm">
            <Flame size={16} fill="currentColor" />
            Kigali street food energy
          </div>
          <h1 className="font-display text-5xl font-black leading-[0.88] text-charcoal sm:text-7xl lg:text-8xl">
            Fast.
            <span className="block text-chili">Juicy.</span>
            Unforgettable.
          </h1>
          <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-charcoal/74 md:text-xl">
            Gourmet burgers, tacos, and street-food vibes in the heart of Kigali.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl()}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-chili px-7 py-4 text-base font-black uppercase tracking-[0.12em] text-white shadow-glow transition hover:-translate-y-1 hover:bg-charcoal"
            >
              <MessageCircle size={20} />
              Order Now on WhatsApp
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-charcoal bg-white px-7 py-4 text-base font-black uppercase tracking-[0.12em] text-charcoal transition hover:-translate-y-1 hover:bg-cheddar"
            >
              View Menu
              <ArrowDown size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute -left-4 top-8 z-10 rounded-full bg-cheddar px-5 py-3 text-sm font-black uppercase tracking-[0.15em] text-charcoal shadow-card md:left-4">
            Fresh daily
          </div>
          <div className="absolute bottom-12 right-0 z-10 rounded-full bg-charcoal px-5 py-3 text-sm font-black uppercase tracking-[0.15em] text-white shadow-card">
            Tacos too
          </div>
          <div className="relative rounded-[2rem] border-4 border-charcoal bg-cheddar p-3 shadow-card">
            {/* Replace this hero image in /public/images when updating the homepage food photography. */}
            <img
              src="/images/hero-burger-real.webp"
              alt="Juicy Burger Bros truffle burger with fries"
              className="aspect-[4/5] w-full rounded-[1.55rem] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
