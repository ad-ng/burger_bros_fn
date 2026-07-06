import { ArrowRight, Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { menuFilters, menuItems, type MenuFilter } from "../data/menu";
import { isLunchItem, isPopularItem, isVeganItem } from "../lib/menuHelpers";
import { MenuCard } from "./MenuCard";
import { SectionTitle } from "./SectionTitle";

type QuickFilter = "All" | "Available" | "Popular" | "Lunch" | "Vegan";

const quickFilters: QuickFilter[] = ["All", "Available", "Popular", "Lunch", "Vegan"];

type MenuExplorerProps = {
  compact?: boolean;
  variant?: "preview" | "full";
  onAddToCart?: () => void;
};

export function MenuExplorer({ compact = false, variant = "full", onAddToCart }: MenuExplorerProps) {
  const [activeCategory, setActiveCategory] = useState<MenuFilter>("All");
  const [quickFilter, setQuickFilter] = useState<QuickFilter>("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMenuItems = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch =
        normalizedSearch.length === 0 ||
        [item.name, item.description, item.category, item.tag, item.price]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);
      const matchesQuickFilter =
        quickFilter === "All" ||
        (quickFilter === "Available" && !item.soldOut) ||
        (quickFilter === "Popular" && isPopularItem(item)) ||
        (quickFilter === "Lunch" && isLunchItem(item)) ||
        (quickFilter === "Vegan" && isVeganItem(item));

      return matchesCategory && matchesSearch && matchesQuickFilter;
    });
  }, [activeCategory, quickFilter, searchTerm]);

  const visibleMenuItems =
    variant === "preview"
      ? menuItems.filter((item) => isPopularItem(item) && !item.soldOut).slice(0, 6)
      : filteredMenuItems;

  if (variant === "preview") {
    return (
      <section id="menu" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Popular picks"
            title="Start with the crowd favorites."
            description="A quick taste of the menu. Open the full QR menu when you are ready to browse everything and build an order."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleMenuItems.map((item, index) => (
              <MenuCard key={item.name} item={item} index={index} onAddToCart={onAddToCart} />
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/menu"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-1 hover:bg-chili"
            >
              View Full Menu
              <ArrowRight size={18} />
            </a>
            <a
              href="#printed-menu"
              className="inline-flex items-center justify-center rounded-full border-2 border-charcoal px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-charcoal transition hover:-translate-y-1 hover:bg-white"
            >
              See Printed Menu
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="menu" className={`${compact ? "px-4 py-8" : "px-4 py-20"} sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        {!compact ? (
          <SectionTitle
            eyebrow="Featured menu"
            title="Stacked, sauced, ready."
            description="Search cravings, filter fast, add items to the cart, and send the whole order through WhatsApp."
          />
        ) : null}

        <div className="mb-5 grid gap-3 rounded-[1.3rem] border border-charcoal/10 bg-white p-3 shadow-sm lg:grid-cols-[1fr_auto]">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/45" size={20} />
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search burgers, tacos, vegan, 5,000..."
              className="h-14 w-full rounded-xl border border-charcoal/10 bg-cream px-12 pr-12 text-base font-bold text-charcoal outline-none transition focus:border-chili"
            />
            {searchTerm ? (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white text-charcoal"
                aria-label="Clear menu search"
              >
                <X size={18} />
              </button>
            ) : null}
          </label>

          <div className="flex flex-wrap gap-2">
            {quickFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setQuickFilter(filter)}
                className={`inline-flex h-14 items-center gap-2 rounded-xl px-4 text-xs font-black uppercase tracking-[0.12em] transition ${
                  quickFilter === filter
                    ? "bg-charcoal text-white"
                    : "bg-cream text-charcoal hover:bg-cheddar"
                }`}
              >
                {filter === "All" ? <SlidersHorizontal size={16} /> : null}
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {menuFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveCategory(filter)}
              className={`rounded-full border px-5 py-3 text-sm font-black uppercase tracking-[0.12em] transition ${
                activeCategory === filter
                  ? "border-charcoal bg-charcoal text-white"
                  : "border-charcoal/15 bg-white text-charcoal hover:border-chili hover:text-chili"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {filteredMenuItems.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredMenuItems.map((item, index) => (
              <MenuCard key={item.name} item={item} index={index} onAddToCart={onAddToCart} />
            ))}
          </div>
        ) : (
          <div className="rounded-[1.4rem] border border-dashed border-charcoal/20 bg-white p-10 text-center">
            <h3 className="font-display text-3xl font-black text-charcoal">No menu matches found</h3>
            <p className="mt-2 text-sm font-semibold text-charcoal/60">
              Try another craving, category, or price range.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
