import React from "react";
import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";

interface IPopup {
  image: string | StaticImageData;
  title: string;
  paragraph: string;
}

export const Popup: React.FC<IPopup> = ({ image, title, paragraph }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.popup}>
        <Image src={image} alt={title} className={styles.popup__image} />
        <span className={styles.popup__title}>{title}</span>
        <p className={styles.popup__paragraph}>{paragraph}</p>
      </div>
    </div>
  );
};
