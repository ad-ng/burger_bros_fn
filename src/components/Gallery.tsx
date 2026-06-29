import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { fallbackGalleryImages } from "../data/galleryFallback";
import { instagramUrl } from "../lib/contact";
import { SectionTitle } from "./SectionTitle";

export function Gallery() {
  return (
    <section id="gallery" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Gallery"
          title="Fresh from Burger Bros."
          description="Real Burger Bros food and hangout moments from Kigali."
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {fallbackGalleryImages.map((image, index) => (
            <motion.a
              key={image.id}
              href={image.permalink}
              className={
                index === 0
                  ? "group relative overflow-hidden rounded-[1.5rem] bg-cream-deep md:col-span-2 md:row-span-2"
                  : "group relative overflow-hidden rounded-[1.5rem] bg-cream-deep"
              }
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.05, duration: 0.45 }}
              aria-label={`Open gallery image: ${image.caption}`}
            >
              <img
                src={image.imageUrl}
                alt={image.caption}
                loading="lazy"
                className="aspect-square h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-4 left-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/92 text-chili shadow-card transition group-hover:bg-cheddar group-hover:text-charcoal">
                <Instagram size={20} />
              </span>
            </motion.a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-charcoal bg-cheddar px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-charcoal transition hover:-translate-y-1 hover:bg-white"
          >
            <Instagram size={18} />
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
