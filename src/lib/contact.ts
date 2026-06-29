const primaryWhatsAppNumber = "250795288854";

export const instagramUrl = "https://www.instagram.com/burger_bros_kigali/?hl=en";

export const whatsappUrl = (message = "Hi Burger Bros Kigali, I would like to order.") =>
  `https://wa.me/${primaryWhatsAppNumber}?text=${encodeURIComponent(message)}`;

export const phoneHref = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;
