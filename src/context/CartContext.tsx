import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { MenuItem } from "../data/menu";
import { whatsappUrl } from "../lib/contact";
import { formatRwf, getMenuItemId, parsePriceValue } from "../lib/menuHelpers";

export type CartLine = {
  id: string;
  item: MenuItem;
  quantity: number;
};

type CartContextValue = {
  lines: CartLine[];
  totalItems: number;
  totalPrice: number;
  lastOrderMessage: string;
  addItem: (item: MenuItem) => void;
  decrementItem: (id: string) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  buildOrderMessage: (notes?: string, deliveryArea?: string, branch?: string) => string;
  saveLastOrder: (message: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const cartStorageKey = "burger-bros-cart";
const lastOrderStorageKey = "burger-bros-last-order";

function readStoredCart() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = window.localStorage.getItem(cartStorageKey);
    return stored ? (JSON.parse(stored) as CartLine[]) : [];
  } catch {
    return [];
  }
}

function readLastOrder() {
  if (typeof window === "undefined") {
    return "";
  }

  return window.localStorage.getItem(lastOrderStorageKey) ?? "";
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(readStoredCart);
  const [lastOrderMessage, setLastOrderMessage] = useState(readLastOrder);

  useEffect(() => {
    window.localStorage.setItem(cartStorageKey, JSON.stringify(lines));
  }, [lines]);

  const totalItems = lines.reduce((sum, line) => sum + line.quantity, 0);
  const totalPrice = lines.reduce((sum, line) => sum + parsePriceValue(line.item.price) * line.quantity, 0);

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      totalItems,
      totalPrice,
      lastOrderMessage,
      addItem(item) {
        const id = getMenuItemId(item);
        setLines((current) => {
          const existing = current.find((line) => line.id === id);

          if (existing) {
            return current.map((line) =>
              line.id === id ? { ...line, quantity: line.quantity + 1 } : line,
            );
          }

          return [...current, { id, item, quantity: 1 }];
        });
      },
      decrementItem(id) {
        setLines((current) =>
          current
            .map((line) => (line.id === id ? { ...line, quantity: line.quantity - 1 } : line))
            .filter((line) => line.quantity > 0),
        );
      },
      removeItem(id) {
        setLines((current) => current.filter((line) => line.id !== id));
      },
      clearCart() {
        setLines([]);
      },
      buildOrderMessage(notes = "", deliveryArea = "", branch = "") {
        if (lines.length === 0) {
          return "Hi Burger Bros Kigali, I would like to order. Please send today’s available menu and delivery options.";
        }

        const orderLines = lines
          .map((line) => `${line.quantity}x ${line.item.name} - ${line.item.price}`)
          .join("\n");
        const parts = [
          "Hi Burger Bros Kigali, I would like to order:",
          orderLines,
          `Estimated total: ${formatRwf(totalPrice)}`,
        ];

        if (branch.trim()) {
          parts.push(`Preferred branch: ${branch.trim()}`);
        }

        if (deliveryArea.trim()) {
          parts.push(`Delivery/pickup area: ${deliveryArea.trim()}`);
        }

        if (notes.trim()) {
          parts.push(`Notes: ${notes.trim()}`);
        }

        parts.push("Please confirm availability and delivery options.");

        return parts.join("\n");
      },
      saveLastOrder(message) {
        setLastOrderMessage(message);
        window.localStorage.setItem(lastOrderStorageKey, message);
      },
    }),
    [lastOrderMessage, lines, totalItems, totalPrice],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}

export function cartOrderUrl(message: string) {
  return whatsappUrl(message);
}
