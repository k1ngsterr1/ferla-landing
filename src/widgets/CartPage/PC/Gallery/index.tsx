import React from "react";
import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface ICartGalleryProps {
  miniText: string;
  title: string;
  paragraph: string;
  image: string | StaticImageData;
  images?: string[] | StaticImageData[];
}

export const CartGallery: React.FC<ICartGalleryProps> = ({
  miniText,
  paragraph,
  title,
  image,
  images,
}) => {
  return (
    <section className={styles.cart_gallery}>
      <div className="flex items-start justify-between">
        <div className="flex flex-col items-start">
          <span className={styles.cart_gallery__mini_text}>{miniText}</span>
          <h3 className={styles.cart_gallery__heading}>{title}</h3>
          <p className={styles.cart_gallery__paragraph}>{paragraph}</p>
          <Link href="#" className={`${styles.cart_gallery__link} hoverable`}>
            Learn more
            <FontAwesomeIcon
              icon={faChevronRight}
              className={styles.cart_gallery__link__chevron}
            />
          </Link>
        </div>
        <Image src={image} alt={title} className={styles.cart_gallery__image} />
      </div>
    </section>
  );
};
