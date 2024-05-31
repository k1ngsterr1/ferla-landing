import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import LinkButton from "@shared/ui/LinkButton";

interface ICartCard {
  photo: string;
  name: string;
  href: string;
}

export const CardCard: React.FC<ICartCard> = ({ photo, name, href }) => {
  return (
    <div className={styles.cart_card}>
      <Image src={photo} alt={name} className={styles.cart_card__image} />
    </div>
  );
};
