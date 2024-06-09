import React from "react";
import Button from "@shared/ui/Button";
import Link from "next/link";

import styles from "./styles.module.scss";

export const MainScreenMobile = () => {
  return (
    <main className={styles.main_screen_mob} id="home-mob">
      <div className={styles.main_screen_mob__content}>
        <h1 className={styles.main_screen_mob__content__heading}>
          <strong>Business on Wheels for Everyone</strong>
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
          className={styles.main_screen_mob__content__link}
          href="#video-mob"
        >
          Watch the true story
        </Link>
      </div>
    </main>
  );
};
