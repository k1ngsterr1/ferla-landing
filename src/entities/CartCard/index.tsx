"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useCartPopup } from "@shared/lib/context/PopupContext";

import styles from "./styles.module.scss";

interface ICartCard {
  photo: string | StaticImageData;
  name: string;
  title: string;
  paragraph: string;
  href: string;
  data: any;
}

export const CartCard: React.FC<ICartCard> = ({
  photo,
  name,
  paragraph,
  title,
  href,
  data,
}) => {
  const { toggleCartPopup } = useCartPopup();

  const handleCardClick = () => {
    const cardData = {
      image: photo,
      name: name,
      title: title,
      href: href,
      paragraph: paragraph,
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
          src={photo}
          alt={name}
          className={styles.cart_card__image}
          width={500}
          height={500}
        />
        <span className={styles.cart_card__name}>{name}</span>
      </div>
      <div className="flex items-center justify-center gap-2 mt-4">
        <a href={href} className={`${styles.link} hoverable`}>
          {data.components && data.components["50"]
            ? data.components["50"].value
            : "From Initial Concept To Market Leader"}
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.link__icon}
          />
        </a>
      </div>
    </div>
  );
};
