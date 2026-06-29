import { Clock } from "lucide-react";
import { getOpenStatus } from "../lib/hours";

export function OpenStatus() {
  const status = getOpenStatus();

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white px-4 py-2 text-sm font-black text-charcoal shadow-sm">
      <span className={`h-2.5 w-2.5 rounded-full ${status.isOpen ? "bg-herb" : "bg-chili"}`} />
      <Clock size={16} />
      <span>{status.label}</span>
      <span className="hidden font-semibold text-charcoal/55 sm:inline">{status.detail}</span>
    </div>
  );
}
