import React from "react";
import Image from "next/image";

import styles from "../BestSellers/styles.module.scss";

import main_pc from "@assets/webp/pc/best_sellers_pc.webp";

const LazyImage = () => {
  return (
    <Image
      src={main_pc}
      priority
      alt="Ferla Bikes Main Image"
      className={styles.best_sellers__image}
    />
  );
};

export default LazyImage;
