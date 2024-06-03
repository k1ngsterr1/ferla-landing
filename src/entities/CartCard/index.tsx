"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useCartPopup } from "@shared/lib/context/PopupContext";

import styles from "./styles.module.scss";

interface ICartCard {
  photo: string | StaticImageData;
  name: string;
  href: string;
}

export const CartCard: React.FC<ICartCard> = ({ photo, name, href }) => {
  const { toggleCartPopup } = useCartPopup();

  return (
    <div
      className="flex flex-col items-center hoverable"
      onClick={toggleCartPopup}
    >
      <div className={`${styles.cart_card} hoverable`}>
        <Image src={photo} alt={name} className={styles.cart_card__image} />
        <span className={styles.cart_card__name}>{name}</span>
      </div>
      <div className="flex items-center justify-center gap-2 mt-4">
        <Link href={href} className={styles.link}>
          Explore
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.link__icon}
          />
        </Link>
      </div>
    </div>
  );
};
