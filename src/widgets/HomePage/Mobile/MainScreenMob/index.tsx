import React from "react";
import Button from "@shared/ui/Button";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

import styles from "./styles.module.scss";

const HeavyImage = dynamic(() => import("../LazyImageMobile/main"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export const MainScreenMobile = () => {
  return (
    <main className={styles.main_screen_mob} id="home-mob">
      <HeavyImage />
      <div className={styles.main_screen_mob__content}>
        <h1 className={styles.main_screen_mob__content__heading}>
          Let us introduce <strong className="text-red">ferla bikes</strong>
        </h1>
        <p className={styles.main_screen_mob__content__paragraph}>
          From Coffee Bikes and Ice Cream Bikes to Marketing & Promo Bikes,
          Hospitality Bikes, Vending Carts and more, we provide the perfect
          solution for your mobile retail pop-up.
        </p>
        <Button
          text="Get A Free Consultation"
          buttonType="filled"
          margin="mt-8"
          targetId="form-mob"
        />
        <Link
          className={`${styles.main_screen_mob__content__link} hoverable`}
          href="#video-mob"
        >
          Watch the true story
        </Link>
      </div>
    </main>
  );
};
