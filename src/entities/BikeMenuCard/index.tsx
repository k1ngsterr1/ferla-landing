import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

interface IBikeMenuCard {
  image: string | StaticImageData;
  name: string;
  href: string;
}

export const BikeMenuCard: React.FC<IBikeMenuCard> = ({
  image,
  name,
  href,
}) => {
  return (
    <div className={`${styles.bike_card} hoverable`}>
      <Image
        className={`${styles.bike_card__image} hoveralbe`}
        src={image}
        alt={name}
      />
      <span className={`${styles.bike_card__name} hoverable`}>{name}</span>
      <Link href={href} className={`${styles.bike_card__link} hoverable`}>
        Learn
      </Link>
    </div>
  );
};
