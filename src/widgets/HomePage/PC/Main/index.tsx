import React from "react";
import Button from "@shared/ui/Button";
import Link from "next/link";
import Image from "next/image";
import main_pc from "@assets/webp/pc/mainImage_pc.webp";

import styles from "./styles.module.scss";

export const MainScreen = () => {
  return (
    <main className={styles.main_screen} id="home">
      <h1 className={`${styles.main_screen__heading} animate__fadeInLeft`}>
        Let us introduce <strong className="text-red">ferla bikes</strong>
      </h1>
      <p className={styles.main_screen__paragraph}>
        From Coffee Bikes and Ice Cream Bikes to Marketing & Promo Bikes,
        Hospitality Bikes, Vending Carts and more, we provide the perfect
        solution for your mobile retail pop-up.
      </p>
      <Button
        text="Get A Free Consultation"
        animation="fade-reveal-left"
        buttonType="filled"
        targetId="form"
        margin="mt-8"
      />
      <Link className={`${styles.main_screen__link} hoverable`} href="#video">
        Watch the true story
      </Link>
      <Image
        src={main_pc}
        alt="Ferla Bikes Main Image"
        className={styles.main_screen__image}
      />
    </main>
  );
};
