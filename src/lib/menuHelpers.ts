import type { MenuItem } from "../data/menu";

export const getMenuItemId = (item: Pick<MenuItem, "name">) =>
  item.name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const isVeganItem = (item: MenuItem) =>
  [item.name, item.description, item.tag].some((value) => value.toLowerCase().includes("vegan"));

export const isLunchItem = (item: MenuItem) => item.category === "Lunch";

export const isPopularItem = (item: MenuItem) =>
  ["Signature", "Combo", "Premium", "All day"].includes(item.tag);

export const parsePriceValue = (price: string) => Number(price.replace(/[^0-9]/g, ""));

export const formatRwf = (value: number) => `RWF ${value.toLocaleString("en-US")}`;
