import React from "react";
import styles from "./styles.module.scss";
import Button from "@shared/ui/Button";
import Image, { StaticImageData } from "next/image";
import { MiniText } from "@shared/ui/MiniText";

interface ICartMainProps {
  title: string;
  paragraph: string;
  miniText: string;
  image: StaticImageData | string;
}

export const CartMain: React.FC<ICartMainProps> = ({
  title,
  paragraph,
  miniText,
  image,
}) => {
  return (
    <main className={styles.main_screen} id="home">
      <span className={styles.main_screen__mini_text}>{miniText}</span>
      <h1 className={`${styles.main_screen__heading} animate__fadeInLeft`}>
        {title}
      </h1>
      <p className={styles.main_screen__paragraph}>{paragraph}</p>
      <Button
        text="Order Now"
        animation="fade-reveal-left"
        buttonType="filled"
        targetId="form"
        margin="mt-8"
      />
      <Image
        src={image}
        alt="Ferla Bikes Main Image"
        className={styles.main_screen__image}
      />
    </main>
  );
};
