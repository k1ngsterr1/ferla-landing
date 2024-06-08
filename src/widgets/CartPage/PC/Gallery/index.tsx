"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";

interface ICartGalleryProps {
  miniText: string;
  title: string;
  paragraph: string;
  image: StaticImageData;
  images: { url: StaticImageData; alt: string }[];
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
          <Fade direction="left" delay={100}>
            <span className={styles.cart_gallery__mini_text}>{miniText}</span>
          </Fade>
          <Fade direction="left" delay={150}>
            <h3 className={styles.cart_gallery__heading}>{title}</h3>
          </Fade>
          <Fade direction="left" delay={200}>
            <p className={styles.cart_gallery__paragraph}>{paragraph}</p>
          </Fade>
          <Fade direction="left" delay={250}>
            <button className={`${styles.cart_gallery__link} hoverable`}>
              Learn more
              <FontAwesomeIcon
                icon={faChevronRight}
                className={styles.cart_gallery__link__chevron}
              />
            </button>
          </Fade>
        </div>
        <Image src={image} alt={title} className={styles.cart_gallery__image} />
      </div>
    </section>
  );
};
