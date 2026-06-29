export type Location = {
  name: string;
  address: string;
  phone: string;
  secondaryPhone?: string;
  mapUrl: string;
};

export const locations: Location[] = [
  {
    name: "Kisimenti",
    address: "House 1, KG 115 St, Kigali",
    phone: "+250 795 288 854",
    secondaryPhone: "+250 795 301 311",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=House%201%20KG%20115%20St%20Kigali",
  },
  {
    name: "Nyamirambo",
    address: "Nyamirambo branch/contact",
    phone: "+250 786 859 786",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Burger%20Bros%20Nyamirambo%20Kigali",
  },
];
