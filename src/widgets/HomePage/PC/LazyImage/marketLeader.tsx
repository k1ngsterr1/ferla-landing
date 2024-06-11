import React from "react";
import Image from "next/image";

import styles from "../../../../entities/Video/styles.module.scss";

import market_image from "@assets/webp/pc/market_leader_pc.webp";

const LazyImage = () => {
  return (
    <Image
      priority
      src={market_image}
      className={styles.video__market}
      alt="Video Market"
    />
  );
};

export default LazyImage;
