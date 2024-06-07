import React from "react";
import Button from "@shared/ui/Button";
import Image, { StaticImageData } from "next/image";

import styles from "./styles.module.scss";

interface IOrderNow {
  title: string;
  miniText: string;
  paragraph: string;
  image: StaticImageData;
  question: string;
}

export const OrderNow: React.FC<IOrderNow> = ({
  title,
  miniText,
  paragraph,
  image,
  question,
}) => {
  return (
    <section className={styles.order_screen} id="home">
      <div className="flex flex-col items-start">
        <span className={styles.order_screen__mini_text}>{miniText}</span>
        <h5 className={styles.order_screen__heading}>{title}</h5>
        <p className={styles.order_screen__paragraph}>{paragraph}</p>
        <Button
          text="Order Now"
          animation="fade-reveal-left"
          buttonType="filled"
          targetId="form"
          margin="mt-8"
        />
        <span className={styles.order_screen__span}>{question}</span>
      </div>
      <Image
        src={image}
        alt="Ferla Bikes Main Image"
        className={styles.order_screen__image}
      />
    </section>
  );
};
