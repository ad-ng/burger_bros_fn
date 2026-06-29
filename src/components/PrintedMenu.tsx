import { motion } from "framer-motion";
import { printedMenuImages } from "../data/menu";
import { SectionTitle } from "./SectionTitle";

export function PrintedMenu() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Full menu"
          title="The printed Burger Bros menu."
          description="Browse the full menu pages for drinks, sides, tacos, quesadillas, lunch packs, desserts, and combo offers."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {printedMenuImages.map((image, index) => (
            <motion.a
              key={image.src}
              href={image.src}
              className="group overflow-hidden rounded-[1.5rem] border border-charcoal/10 bg-cream shadow-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              aria-label="Open full printed menu image"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
