import { motion } from "framer-motion";
import { Plus, Share2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import type { MenuItem } from "../data/menu";
import { getMenuItemId } from "../lib/menuHelpers";

type MenuCardProps = {
  item: MenuItem;
  index: number;
  onAddToCart?: () => void;
};

export function MenuCard({ item, index, onAddToCart }: MenuCardProps) {
  const { addItem } = useCart();
  const itemUrl = `${window.location.origin}${window.location.pathname}#${getMenuItemId(item)}`;
  const shareMessage = `Check out ${item.name} at Burger Bros Kigali: ${itemUrl}`;

  const handleAddToCart = () => {
    addItem(item);
    onAddToCart?.();
  };

  return (
    <motion.article
      id={getMenuItemId(item)}
      className={`group flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-charcoal/10 bg-white shadow-card ${
        item.soldOut ? "relative grayscale-[.25]" : ""
      }`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
    >
      <div className="relative overflow-hidden bg-cream-deep">
        <img
          src={item.image}
          alt={item.name}
          className={`aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105 ${
            item.soldOut ? "opacity-55" : ""
          }`}
        />
        <span className="absolute left-4 top-4 rounded-full bg-cheddar px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-charcoal">
          {item.tag}
        </span>
        <a
          href={`https://wa.me/?text=${encodeURIComponent(shareMessage)}`}
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white text-charcoal shadow-sm transition hover:bg-charcoal hover:text-white"
          aria-label={`Share ${item.name}`}
        >
          <Share2 size={17} />
        </a>
        {item.soldOut ? (
          <span className="absolute inset-x-5 top-1/2 -translate-y-1/2 rotate-[-8deg] rounded-full bg-charcoal px-5 py-3 text-center font-display text-3xl font-black uppercase tracking-[0.08em] text-white shadow-card">
            Sold Out
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-2xl font-black leading-none text-charcoal">{item.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-charcoal/68">{item.description}</p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="font-display text-2xl font-black text-chili">{item.price}</p>
          {item.soldOut ? (
            <span className="inline-flex h-11 items-center rounded-full bg-charcoal/10 px-4 text-sm font-black uppercase tracking-[0.12em] text-charcoal/45">
              Unavailable
            </span>
          ) : (
            <button
              type="button"
              onClick={handleAddToCart}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-charcoal px-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-chili"
            >
              <Plus size={16} />
              Add
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
