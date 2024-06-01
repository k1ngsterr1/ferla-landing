import React from "react";
import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
import LinkButton from "@shared/ui/LinkButton";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface ICartCard {
  photo: string | StaticImageData;
  name: string;
  href: string;
}

export const CartCard: React.FC<ICartCard> = ({ photo, name, href }) => {
  return (
    <div className="flex flex-col items-center">
      <div className={styles.cart_card}>
        <Image src={photo} alt={name} className={styles.cart_card__image} />
      </div>
      <div className="flex items-center justify-center gap-2 mt-4">
        <Link href={href} className={styles.link}>
          Explore{" "}
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.link__icon}
          />
        </Link>
      </div>
    </div>
  );
};
