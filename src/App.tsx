import { motion } from "framer-motion";
import { Bike, Flame, Leaf, MapPin, Quote, Sandwich, Star, Users } from "lucide-react";
import { useState } from "react";
import { CartDrawer } from "./components/CartDrawer";
import { CmsPreview } from "./components/CmsPreview";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { InstallPrompt } from "./components/InstallPrompt";
import { LocationCard } from "./components/LocationCard";
import { MenuExplorer } from "./components/MenuExplorer";
import { MenuPage } from "./components/MenuPage";
import { Navbar } from "./components/Navbar";
import { OfflineNotice } from "./components/OfflineNotice";
import { OpenStatus } from "./components/OpenStatus";
import { PrintedMenu } from "./components/PrintedMenu";
import { SectionTitle } from "./components/SectionTitle";
import { TodaysSpecial } from "./components/TodaysSpecial";
import { CartProvider, useCart } from "./context/CartContext";
import { locations } from "./data/locations";
import { reviews } from "./data/reviews";
import { whatsappUrl } from "./lib/contact";

const whyItems = [
  { title: "Gourmet street food", icon: Sandwich, text: "Premium ingredients with the pace and punch of street service." },
  { title: "Juicy burgers", icon: Flame, text: "Saucy, stacked, toasted, and built to hit from the first bite." },
  { title: "Tex-Mex flavors", icon: Star, text: "Tacos, loaded sides, and bright sauces that bring the heat." },
  { title: "Kigali delivery", icon: Bike, text: "Cravings move fast across the city with easy WhatsApp ordering." },
  { title: "Vegan options", icon: Leaf, text: "Fresh, plant-forward picks for the green-craving crew." },
  { title: "Hangout spot", icon: Users, text: "Urban, easy, and made for friends who arrive hungry." },
];

function App() {
  const pathname = window.location.pathname.replace(/\/$/, "");

  if (pathname === "/cms") {
    return <CmsPreview />;
  }

  return (
    <CartProvider>
      <AppRoutes pathname={pathname} />
    </CartProvider>
  );
}

function AppRoutes({ pathname }: { pathname: string }) {
  const [cartOpen, setCartOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <>
      {pathname === "/menu" ? (
        <div className="min-h-screen bg-cream text-charcoal">
          <Navbar cartCount={totalItems} onCartOpen={() => setCartOpen(true)} />
          <MenuPage onCartOpen={() => setCartOpen(true)} />
          <Footer />
          <FloatingWhatsApp cartCount={totalItems} onCartOpen={() => setCartOpen(true)} />
          <InstallPrompt />
          <OfflineNotice />
        </div>
      ) : (
        <PublicSite
          cartCount={totalItems}
          onCartOpen={() => setCartOpen(true)}
        />
      )}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

function PublicSite({ cartCount, onCartOpen }: { cartCount: number; onCartOpen: () => void }) {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Navbar cartCount={cartCount} onCartOpen={onCartOpen} />
      <main>
        <Hero />
        <section className="px-4 pb-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl justify-start">
            <OpenStatus />
          </div>
        </section>

        <TodaysSpecial />

        <MenuExplorer variant="preview" onAddToCart={onCartOpen} />

        <PrintedMenu />

        <section id="why" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Why Burger Bros"
              title="Built for big Kigali cravings."
              description="Bold food, fast service, real flavor, and the kind of spot people remember after one visit."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {whyItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="rounded-[1.35rem] border border-charcoal/10 bg-cream p-6 shadow-sm"
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: index * 0.04, duration: 0.45 }}
                  >
                    <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-chili text-white">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-display text-2xl font-black text-charcoal">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-charcoal/66">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="locations" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Locations"
              title="Pull up or order in."
              description="Two Kigali contact points, daily hours, and delivery-ready WhatsApp ordering."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {locations.map((location, index) => (
                <LocationCard key={location.name} location={location} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="hours" className="bg-charcoal px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[.8fr_1.2fr] md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-cheddar">Opening hours</p>
              <h2 className="mt-3 font-display text-4xl font-black leading-none md:text-6xl">
                Daily fuel from lunch to late.
              </h2>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-6">
              <OpenStatus />
              <p className="font-display text-4xl font-black text-cheddar">11:30 AM - 11:30 PM</p>
              <p className="mt-3 text-lg font-semibold leading-7 text-white/72">
                Open every day with delivery availability across Kigali. Message us on WhatsApp for the fastest order flow.
              </p>
            </div>
          </div>
        </section>

        <Gallery />

        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Google reviews"
              title="Kigali has spoken."
              description="Real customer reviews from people who came hungry and left with a Burger Bros story."
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {reviews.map((review, index) => (
                <motion.article
                  key={review.name}
                  className="flex h-full flex-col rounded-[1.35rem] border border-charcoal/10 bg-cream p-6 shadow-sm"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                >
                  <Quote className="mb-4 text-chili" size={28} />
                  <div className="mb-4 flex gap-1 text-cheddar">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="flex-1 text-base font-semibold leading-7 text-charcoal/74">"{review.text}"</p>
                  <p className="mt-5 font-display text-xl font-black text-charcoal">{review.name}</p>
                  <a
                    href={review.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 text-sm font-black uppercase tracking-[0.12em] text-chili hover:text-charcoal"
                  >
                    Google review
                  </a>
                </motion.article>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a
                href="https://www.instagram.com/burger_bros_kigali/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-charcoal bg-cheddar px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-charcoal transition hover:-translate-y-1 hover:bg-white"
              >
                Follow us on Instagram
              </a>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-chili p-8 text-white shadow-glow md:p-14"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-cheddar">Final call</p>
                <h2 className="mt-3 font-display text-5xl font-black leading-none md:text-7xl">
                  Craving Burger Bros?
                </h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl("Hi Burger Bros Kigali, I’m craving Burger Bros. Please send today’s available menu and delivery options.")}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-charcoal transition hover:-translate-y-1 hover:bg-cheddar"
                >
                  Order on WhatsApp
                </a>
                <a
                  href="#locations"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-1 hover:bg-charcoal"
                >
                  <MapPin size={18} />
                  Visit Us Today
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp cartCount={cartCount} onCartOpen={onCartOpen} />
      <InstallPrompt />
      <OfflineNotice />
    </div>
  );
}

export default App;
