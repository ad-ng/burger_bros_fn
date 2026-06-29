import { motion } from "framer-motion";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import type { Location } from "../data/locations";
import { phoneHref, whatsappUrl } from "../lib/contact";

type LocationCardProps = {
  location: Location;
  index: number;
};

export function LocationCard({ location, index }: LocationCardProps) {
  return (
    <motion.article
      className="rounded-[1.5rem] border border-charcoal/10 bg-white p-6 shadow-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-cheddar text-charcoal">
        <MapPin size={22} />
      </div>
      <h3 className="font-display text-3xl font-black text-charcoal">{location.name}</h3>
      <p className="mt-2 text-base font-semibold text-charcoal/70">{location.address}</p>
      <div className="mt-5 space-y-1 text-sm font-black text-charcoal">
        <p>{location.phone}</p>
        {location.secondaryPhone ? <p>{location.secondaryPhone}</p> : null}
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <a
          href={phoneHref(location.phone)}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-4 py-3 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:bg-chili"
        >
          <Phone size={16} />
          Call
        </a>
        <a
          href={whatsappUrl(`Hi Burger Bros ${location.name}, I would like to order.`)}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-herb px-4 py-3 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:bg-charcoal"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>
        <a
          href={location.mapUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/20 bg-white px-4 py-3 text-sm font-black uppercase tracking-[0.1em] text-charcoal transition hover:bg-cheddar"
        >
          <MapPin size={16} />
          Directions
        </a>
      </div>
    </motion.article>
  );
}
