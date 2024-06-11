import React from "react";
import Image from "next/image";

import styles from "../Main/styles.module.scss";

import main_pc from "@assets/webp/pc/mainImage_pc.webp";

const LazyImage = () => {
  return (
    <Image
      src={main_pc}
      priority
      alt="Ferla Bikes Main Image"
      className={styles.main_screen__image}
    />
  );
};

export default LazyImage;
