import React from "react";
import Image from "next/image";

import styles from "../BestSellers/styles.module.scss";

import main_pc from "@assets/webp/pc/best_sellers_pc.webp";

interface ILazyImage {
  src: any;
}

const LazyImage: React.FC<ILazyImage> = ({ src }) => {
  return (
    <Image
      src={src}
      width={"925"}
      height={"820"}
      alt="Ferla Bikes Main Image"
      className={styles.best_sellers__image}
    />
  );
};

export default LazyImage;
