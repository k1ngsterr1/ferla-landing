import React from "react";
import Button from "@shared/ui/Button";
import { MiniText } from "@shared/ui/MiniText";
import Image from "next/image";
import { AboutCardSwiper } from "@features/AboutCardSwiper";
import dynamic from "next/dynamic";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

import bike from "@assets/webp/mob/best_sellers_mob.webp";

const HeavyImage = dynamic(() => import("../LazyImageMobile/bestsellers"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export const BestSellersMobile = () => {
  return (
    <section className={styles.best_sellers_mob} id="business-mob">
      <div className={styles.best_sellers_mob__content}>
        <div className={styles.best_sellers_mob__content__text}>
          <MiniText text={"Your Bike, Your Way"} />
          <h3 className={styles.best_sellers_mob__content__text__heading}>
            Your Bike, Your Way
          </h3>
          <p className={styles.best_sellers_mob__content__text__paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <AboutCardSwiper />
        <Button
          text={"Contact Us"}
          buttonType="transparent"
          margin="mt-8"
          icon={faChevronRight}
        />
      </div>
      <HeavyImage src={bike} />
    </section>
  );
};
