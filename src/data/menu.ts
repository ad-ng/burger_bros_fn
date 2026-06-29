export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
  tag: string;
};

// Update menu prices and images here. Replace images with files in /public/images.
export const menuItems: MenuItem[] = [
  {
    name: "Gourmet Cheeseburger",
    description: "Smashed beef, melted cheddar, pickles, onions, and signature Bros sauce.",
    price: "RWF 8,500",
    image: "/images/menu-cheese-box.webp",
    tag: "Best seller",
  },
  {
    name: "Drunken Granny Burger",
    description: "A loud, saucy burger with caramelized onions and a punchy house glaze.",
    price: "RWF 9,500",
    image: "/images/menu-truffle-burger.webp",
    tag: "Bold",
  },
  {
    name: "Tokyo Chicken Katsu Burger",
    description: "Crispy katsu chicken, slaw, sesame mayo, and sweet-spicy street sauce.",
    price: "RWF 9,000",
    image: "/images/menu-katsu.svg",
    tag: "Crunchy",
  },
  {
    name: "Crispy Fish Burger",
    description: "Golden fish fillet, tartar-style sauce, lettuce, and bright pickles.",
    price: "RWF 8,800",
    image: "/images/menu-fish.svg",
    tag: "Fresh",
  },
  {
    name: "Champions Breakfast Burger",
    description: "Egg, beef, cheese, crispy potatoes, and a breakfast sauce that wakes up.",
    price: "RWF 9,700",
    image: "/images/menu-burger-tray.webp",
    tag: "All day",
  },
  {
    name: "Lunch Pack",
    description: "Burger, fries, and a drink made for quick midday wins.",
    price: "RWF 12,000",
    image: "/images/menu-burger-fries.webp",
    tag: "Value",
  },
  {
    name: "Ultimate BB Combo Pack",
    description: "Burgers, tacos, loaded fries, sauces, and enough energy for the whole table.",
    price: "RWF 28,000",
    image: "/images/menu-burger-cheesy-double.webp",
    tag: "Shareable",
  },
];
