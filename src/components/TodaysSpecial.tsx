import { motion } from "framer-motion";
import { Flame, MessageCircle } from "lucide-react";
import { whatsappUrl } from "../lib/contact";

export function TodaysSpecial() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-charcoal/10 bg-cream shadow-card md:grid-cols-[.95fr_1.05fr]"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative min-h-[340px] bg-cheddar">
          <img
            src="/images/menu-truffle-burger.webp"
            alt="Burger Bros truffle burger special"
            className="h-full min-h-[340px] w-full object-cover"
          />
          <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-chili px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white shadow-card">
            <Flame size={16} fill="currentColor" />
            Today’s Special
          </span>
        </div>
        <div className="flex flex-col justify-center p-7 md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-chili">Limited daily drop</p>
          <h2 className="mt-3 font-display text-4xl font-black leading-none text-charcoal md:text-6xl">
            Drunken Granny Burger
          </h2>
          <p className="mt-5 text-base font-semibold leading-7 text-charcoal/70 md:text-lg">
            Beef patty, onion marmalade, goats cheese, tomato, pickles, sauce, and chips.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <p className="font-display text-4xl font-black text-chili">RWF 7,000</p>
            <a
              href={whatsappUrl("Hi Burger Bros Kigali, I would like today’s special: Drunken Granny Burger for RWF 7,000.")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-chili"
            >
              <MessageCircle size={18} />
              Order Special
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
