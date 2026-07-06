import { motion } from "framer-motion";
import { Download, Maximize2, Share2, X } from "lucide-react";
import { useState } from "react";
import { printedMenuImages } from "../data/menu";
import { SectionTitle } from "./SectionTitle";

export function PrintedMenu() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const activeImage = activeImageIndex === null ? null : printedMenuImages[activeImageIndex];
  const shareUrl =
    activeImage && typeof window !== "undefined"
      ? `${window.location.origin}${activeImage.src}`
      : "";

  return (
    <>
      <section id="printed-menu" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Full menu"
            title="The printed Burger Bros menu."
            description="Open, download, or share the full menu pages for drinks, sides, tacos, quesadillas, lunch packs, desserts, and combo offers."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {printedMenuImages.map((image, index) => (
              <motion.article
                key={image.src}
                className="group overflow-hidden rounded-[1.5rem] border border-charcoal/10 bg-cream shadow-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
              >
                <button
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className="relative block w-full overflow-hidden text-left"
                  aria-label="Open full printed menu image"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-charcoal shadow-sm">
                    <Maximize2 size={18} />
                  </span>
                </button>
                <div className="flex items-center justify-between gap-3 p-4">
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-charcoal/60">
                    Page {index + 1}
                  </p>
                  <div className="flex gap-2">
                    <a
                      href={image.src}
                      download
                      className="grid h-10 w-10 place-items-center rounded-full bg-white text-charcoal shadow-sm transition hover:bg-cheddar"
                      aria-label="Download printed menu page"
                    >
                      <Download size={18} />
                    </a>
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(`Burger Bros Kigali menu: ${typeof window !== "undefined" ? window.location.origin : ""}${image.src}`)}`}
                      className="grid h-10 w-10 place-items-center rounded-full bg-charcoal text-white shadow-sm transition hover:bg-chili"
                      aria-label="Share printed menu page"
                    >
                      <Share2 size={18} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {activeImage ? (
        <div className="fixed inset-0 z-[90] bg-charcoal/92 p-4 text-white sm:p-6">
          <div className="mx-auto flex h-full max-w-6xl flex-col">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cheddar">Printed menu</p>
                <h3 className="font-display text-3xl font-black">Page {activeImageIndex! + 1}</h3>
              </div>
              <div className="flex gap-2">
                <a
                  href={activeImage.src}
                  download
                  className="grid h-11 w-11 place-items-center rounded-full bg-white text-charcoal"
                  aria-label="Download printed menu page"
                >
                  <Download size={19} />
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`Burger Bros Kigali menu: ${shareUrl}`)}`}
                  className="grid h-11 w-11 place-items-center rounded-full bg-cheddar text-charcoal"
                  aria-label="Share printed menu page"
                >
                  <Share2 size={19} />
                </a>
                <button
                  type="button"
                  onClick={() => setActiveImageIndex(null)}
                  className="grid h-11 w-11 place-items-center rounded-full bg-white text-charcoal"
                  aria-label="Close printed menu viewer"
                >
                  <X size={22} />
                </button>
              </div>
            </div>
            <div className="min-h-0 flex-1 overflow-auto rounded-[1rem] bg-white/8">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="mx-auto h-auto min-h-full max-w-none sm:max-w-full"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
