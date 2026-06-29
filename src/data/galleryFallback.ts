export type GalleryImage = {
  id: string;
  imageUrl: string;
  permalink: string;
  caption: string;
};

// Local gallery images. Replace these files in /public/images when updating the gallery.
export const fallbackGalleryImages: GalleryImage[] = [
  {
    id: "fallback-loaded-burger-fries",
    imageUrl: "/images/gallery-loaded-burger-fries.webp",
    permalink: "/images/gallery-loaded-burger-fries.webp",
    caption: "Loaded Burger Bros burger with fries",
  },
  {
    id: "fallback-cheese-closeup",
    imageUrl: "/images/gallery-cheese-closeup.webp",
    permalink: "/images/gallery-cheese-closeup.webp",
    caption: "Close-up of a juicy Burger Bros cheeseburger",
  },
  {
    id: "fallback-burger-bros-guests",
    imageUrl: "/images/gallery-burger-bros-guests.jpg",
    permalink: "/images/gallery-burger-bros-guests.jpg",
    caption: "Guests enjoying Burger Bros Kigali",
  },
  {
    id: "fallback-burger-fries",
    imageUrl: "/images/menu-burger-fries.webp",
    permalink: "/images/menu-burger-fries.webp",
    caption: "Burger Bros burger and fries tray",
  },
  {
    id: "fallback-truffle-burger",
    imageUrl: "/images/menu-truffle-burger.webp",
    permalink: "/images/menu-truffle-burger.webp",
    caption: "Juicy truffle Burger Bros burger with fries",
  },
  {
    id: "fallback-cheesy-double",
    imageUrl: "/images/menu-burger-cheesy-double.webp",
    permalink: "/images/menu-burger-cheesy-double.webp",
    caption: "Cheesy Burger Bros burgers and fries",
  },
];
