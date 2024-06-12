import React from "react";
import Image from "next/image";

import styles from "../MainScreenMob/styles.module.scss";

import mob_bg from "@assets/webp/mob/phone_bg.webp";

const LazyImage = () => {
  return (
    <Image
      src={mob_bg}
      alt="background image"
      priority
      className={styles.main_screen_mob__image}
    />
  );
};

export default LazyImage;
