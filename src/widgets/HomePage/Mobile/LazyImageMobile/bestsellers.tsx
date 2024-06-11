import React from "react";
import Image from "next/image";

import styles from "../BestSellersMobile/styles.module.scss";

import bike from "@assets/webp/mob/best_sellers_mob.webp";

const LazyImage = () => {
  return (
    <Image
      src={bike}
      priority
      alt="Ferla Bikes Main Image"
      className={styles.best_sellers_mob__image}
    />
  );
};

export default LazyImage;
