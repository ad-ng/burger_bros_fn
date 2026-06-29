import { motion } from "framer-motion";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-chili">{eyebrow}</p>
      <h2 className="font-display text-4xl font-black leading-[0.95] text-charcoal md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-charcoal/70 md:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
