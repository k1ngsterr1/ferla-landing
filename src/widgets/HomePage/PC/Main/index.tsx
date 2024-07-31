import React from "react";
import Button from "@shared/ui/Button";
import Link from "next/link";
import image from "@assets/webp/pc/mainImage_pc.webp";
import dynamic from "next/dynamic";

import styles from "./styles.module.scss";

const HeavyImage = dynamic(() => import("../LazyImage/main"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

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
        text="Watch the true story"
        animation="fade-reveal-left"
        buttonType="filled"
        targetId="form-pc"
        margin="mt-8"
      />
      <Link className={`${styles.main_screen__link} hoverable`} href="#video">
        Watch the true story
      </Link>
      <HeavyImage src={image} />
    </main>
  );
};
