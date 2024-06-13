"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useCartPopup } from "@shared/lib/context/PopupContext";

import styles from "./styles.module.scss";

interface ICartCard {
  img_url: string | StaticImageData;
  name: string;
  title: string;
  description: string;
  // href: string;
}

export const CartCard: React.FC<ICartCard> = ({
  img_url,
  name,
  description,
  title,
  // href,
}) => {
  const { toggleCartPopup } = useCartPopup();

  const handleCardClick = () => {
    const cardData = {
      img_url: img_url,
      name: name,
      title: name,
      // href: href,
      description: description,
    };
    toggleCartPopup(cardData);
  };

  return (
    <div className="flex flex-col items-center hoverable">
      <div
        className={`${styles.cart_card} hoverable`}
        onClick={handleCardClick}
      >
        <Image
          src={img_url}
          alt={name}
          className={styles.cart_card__image}
          width={200}
          height={200}
        />
        <span className={styles.cart_card__name}>{name}</span>
      </div>
      {/* <div className="flex items-center justify-center gap-2 mt-4">
        <a href={href} className={`${styles.link} hoverable`}>
          Explore
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.link__icon}
          />
        </a>
      </div> */}
    </div>
  );
};
