export type MenuCategory =
  | "Burgers"
  | "Tacos"
  | "Quesadillas"
  | "Lunch"
  | "Combos"
  | "Steak"
  | "Sides";

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
  tag: string;
  category: MenuCategory;
  soldOut?: boolean;
};

// Update menu prices, categories, availability, and images here.
export const menuItems: MenuItem[] = [
  {
    name: "Gourmet Cheeseburger",
    description: "Beef patty, cheddar cheese, pickle, tomato, onion, sauce, and chips.",
    price: "RWF 5,500",
    image: "/images/menu-cheese-box.webp",
    tag: "Burger",
    category: "Burgers",
  },
  {
    name: "Drunken Granny Burger",
    description: "Beef patty, onion marmalade, goats cheese, tomato, pickles, sauce, and chips.",
    price: "RWF 7,000",
    image: "/images/menu-truffle-burger.webp",
    tag: "Signature",
    category: "Burgers",
  },
  {
    name: "Bluecheese Burger",
    description: "Beef patty, blue cheese, bacon, onion, sauce, and chips.",
    price: "RWF 7,000",
    image: "/images/menu-burger-cheesy-double.webp",
    tag: "Rich",
    category: "Burgers",
  },
  {
    name: "Tokyo Chicken Katsu Burger",
    description: "Fried chicken, coleslaw, cheese, katsu sauce, and chips.",
    price: "RWF 6,500",
    image: "/images/menu-katsu.svg",
    tag: "Crunchy",
    category: "Burgers",
  },
  {
    name: "Crispy Fish Burger",
    description: "Crispy fried fish, tartar sauce, lettuce, and chips.",
    price: "RWF 6,000",
    image: "/images/menu-fish.svg",
    tag: "Seafood",
    category: "Burgers",
  },
  {
    name: "Champions Breakfast Burger",
    description: "Beef patty, bacon, egg, tomato, cheddar, brioche bun, chips, and sauce.",
    price: "RWF 6,000",
    image: "/images/menu-burger-tray.webp",
    tag: "All day",
    category: "Burgers",
  },
  {
    name: "Moroccan Falafel Burger",
    description: "Falafel patty, beans, onion, cheddar, tomato, chips, and sauce.",
    price: "RWF 6,000",
    image: "/images/menu-burger-fries.webp",
    tag: "Vegan",
    category: "Burgers",
  },
  {
    name: "Cheesy Beef Tacos",
    description: "Two tacos with beef, cabbage, tomato, avocado, bell pepper, onion, and cheddar.",
    price: "RWF 5,500",
    image: "/images/printed-menu-tacos-combos.webp",
    tag: "2x in 1",
    category: "Tacos",
  },
  {
    name: "Chicken Katsu Tacos",
    description: "Two tacos with chicken, cabbage, tomato, avocado, bell pepper, chili oil, and cheddar.",
    price: "RWF 6,500",
    image: "/images/printed-menu-tacos-combos.webp",
    tag: "2x in 1",
    category: "Tacos",
  },
  {
    name: "Crispy Fish Tacos",
    description: "Two tacos with fish, cabbage, tomato, avocado, bell pepper, chili oil, and cheddar.",
    price: "RWF 7,000",
    image: "/images/printed-menu-tacos-combos.webp",
    tag: "2x in 1",
    category: "Tacos",
  },
  {
    name: "Shrimp Tacos",
    description: "Two tacos with shrimp, cabbage, tomato, avocado, bell pepper, chili oil, and cheddar.",
    price: "RWF 10,000",
    image: "/images/printed-menu-tacos-combos.webp",
    tag: "Premium",
    category: "Tacos",
  },
  {
    name: "Vegan Tacos",
    description: "Two tacos with falafel, cabbage, tomato, avocado, bell pepper, chili oil, and sauce.",
    price: "RWF 6,000",
    image: "/images/printed-menu-tacos-combos.webp",
    tag: "Vegan",
    category: "Tacos",
  },
  {
    name: "Cheesy Beef Quesadilla",
    description: "Three pieces with beef, corn, beans, bell pepper, onion, garlic, guacamole, and cheese.",
    price: "RWF 7,000",
    image: "/images/printed-menu-full.webp",
    tag: "3x in 1",
    category: "Quesadillas",
  },
  {
    name: "Chicken Quesadilla",
    description: "Three pieces with chicken, corn, beans, bell pepper, onion, garlic, guacamole, and cheese.",
    price: "RWF 7,500",
    image: "/images/printed-menu-full.webp",
    tag: "3x in 1",
    category: "Quesadillas",
  },
  {
    name: "Crispy Fish Quesadilla",
    description: "Three pieces with fish, corn, beans, bell pepper, onion, garlic, guacamole, and cheese.",
    price: "RWF 8,000",
    image: "/images/printed-menu-full.webp",
    tag: "3x in 1",
    category: "Quesadillas",
  },
  {
    name: "Shrimp Quesadilla",
    description: "Three pieces with shrimp, corn, beans, bell pepper, onion, garlic, guacamole, and cheese.",
    price: "RWF 12,000",
    image: "/images/printed-menu-full.webp",
    tag: "Premium",
    category: "Quesadillas",
    soldOut: true,
  },
  {
    name: "Burger Bros Lunch Pack",
    description: "Burger with beef patty, cheddar, brioche bun, sauce, chips, and coleslaw.",
    price: "RWF 5,000",
    image: "/images/menu-burger-fries.webp",
    tag: "12:00-16:00",
    category: "Lunch",
  },
  {
    name: "Egg & Bacon Lunch Pack",
    description: "Late breakfast burger with bacon, egg, cheddar, brioche bun, sauce, mini-fries, and salad.",
    price: "RWF 5,000",
    image: "/images/menu-burger-tray.webp",
    tag: "12:00-16:00",
    category: "Lunch",
  },
  {
    name: "Sweet Chili Meat & Chips Pack",
    description: "Juicy cheesy beef loaded chips with beans, cheddar, coleslaw, corn, sauce, salad, and tortillas.",
    price: "RWF 5,000",
    image: "/images/gallery-cheese-closeup.webp",
    tag: "12:00-16:00",
    category: "Lunch",
  },
  {
    name: "Ultimate BB Combo Pack",
    description: "Two gourmet burgers, two beef tacos, three beef quesadillas, tater tots, fries, sweet potato chips, spicy chicken wings, and sauces.",
    price: "RWF 33,000",
    image: "/images/menu-burger-cheesy-double.webp",
    tag: "Combo",
    category: "Combos",
  },
  {
    name: "Mexican Nights Combo Pack",
    description: "Two beef tacos, two chicken tacos, two fish tacos, two chips, two gourmet sauces, two ketchup, and guacamole bowl.",
    price: "RWF 22,000",
    image: "/images/printed-menu-tacos-combos.webp",
    tag: "Combo",
    category: "Combos",
  },
  {
    name: "Spicy Wings Abomination",
    description: "Fifty chicken wings with vegan pili, four chips, four sauces, and chili sauce.",
    price: "RWF 36,000",
    image: "/images/printed-menu-full.webp",
    tag: "Wings",
    category: "Combos",
  },
  {
    name: "Basil Pesto Steak & Fries",
    description: "Grilled beef with pesto, french fries, ketchup, mayo, and seasoning.",
    price: "RWF 9,500",
    image: "/images/printed-menu-full.webp",
    tag: "Steak",
    category: "Steak",
  },
  {
    name: "Sichuan Pepper Steak & Fries",
    description: "Grilled beef with Sichuan pepper sauce, french fries, ketchup, mayo, and seasoning.",
    price: "RWF 9,500",
    image: "/images/printed-menu-full.webp",
    tag: "Steak",
    category: "Steak",
  },
  {
    name: "Loaded Winnaz Chips",
    description: "Large Winnaz bag loaded with beef, salsa, cheddar, and gourmet sauce.",
    price: "RWF 4,500",
    image: "/images/printed-menu-tacos-combos.webp",
    tag: "Loaded",
    category: "Sides",
  },
  {
    name: "Potato Chips",
    description: "Burger Bros french fries with ketchup and mayo, salted.",
    price: "RWF 2,000",
    image: "/images/gallery-loaded-burger-fries.webp",
    tag: "Side",
    category: "Sides",
  },
];

export const menuFilters = [
  "All",
  "Burgers",
  "Tacos",
  "Quesadillas",
  "Lunch",
  "Combos",
  "Steak",
  "Sides",
] as const;

export type MenuFilter = (typeof menuFilters)[number];

export const printedMenuImages = [
  {
    src: "/images/printed-menu-full.webp",
    alt: "Burger Bros printed menu with burgers, tacos, quesadillas, combos, sides, desserts, and lunch items",
  },
  {
    src: "/images/printed-menu-tacos-combos.webp",
    alt: "Burger Bros printed menu showing tacos, quesadillas, hot wings, combo packs, and loaded chips",
  },
  {
    src: "/images/printed-menu-drinks.webp",
    alt: "Burger Bros printed menu showing soft drinks, juices, smoothies, and milkshakes",
  },
];
