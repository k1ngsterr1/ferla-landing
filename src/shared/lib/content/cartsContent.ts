import { StaticImageData } from "next/image";

import cart from "@assets/webp/cards/bike_card_pc.webp";

export interface ICard {
  name: string;
  image: StaticImageData;
  href: string;
}

export const cartsContent: ICard[] = [
  { name: "Ferla X", image: cart, href: "test" },
  { name: "Ferla X", image: cart, href: "test" },
  { name: "Ferla X", image: cart, href: "test" },
  { name: "Ferla X", image: cart, href: "test" },
];
