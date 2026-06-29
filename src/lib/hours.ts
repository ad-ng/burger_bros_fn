export function getOpenStatus(now = new Date()) {
  const minutes = now.getHours() * 60 + now.getMinutes();
  const opens = 11 * 60 + 30;
  const closes = 23 * 60 + 30;
  const isOpen = minutes >= opens && minutes < closes;

  return {
    isOpen,
    label: isOpen ? "Open Now" : "Closed Now",
    detail: isOpen ? "Open today until 11:30 PM" : "Opens daily at 11:30 AM",
  };
}
