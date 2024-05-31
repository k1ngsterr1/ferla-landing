import React from "react";
import Button from "@shared/ui/Button";
import Link from "next/link";
import Image from "next/image";
import main_pc from "@assets/webp/pc/mainImage_pc.png";

import styles from "./styles.module.scss";

export const MainScreenMob = () => {
  return (
    <main className={styles.main_screen_mob}>
      <h1 className={styles.main_screen_mob__heading}>
      <strong>Business on Wheels for Everyone</strong>
      </h1>
      <p className={styles.main_screen_mob__paragraph}>
      From Coffee Bikes and Ice Cream Bikes to Marketing & Promo Bikes, Hospitality Bikes, Vending Carts and more, we provide the perfect solution for your mobile retail pop-up.
      </p>
      <Button
        text="Get A Free Consultation"
        buttonType="filled"
        margin="mt-8"
      />
      <Link className={styles.main_screen_mob__link} href="#video">
        Watch the true story
      </Link>
    </main>
  );
};