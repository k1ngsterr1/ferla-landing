import React from "react";
import Image from "next/image";

import styles from "../BusinessBlockMobile/styles.module.scss";

import main_pc from "@assets/webp/pc/mainImage_pc.webp";

const LazyImage = () => {
  return (
    <Image
      src={main_pc}
      priority
      alt="Ferla Bikes Main Image"
      className={styles.business_block_mob__image}
    />
  );
};

export default LazyImage;
