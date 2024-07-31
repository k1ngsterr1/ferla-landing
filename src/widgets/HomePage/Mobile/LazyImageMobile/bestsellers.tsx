import React from "react";
import Image from "next/image";

import styles from "../BestSellersMobile/styles.module.scss";

interface ILazyImage {
  src: any;
}

const LazyImage: React.FC<ILazyImage> = ({ src }) => {
  return (
    <Image
      src={src}
      width={200}
      height={200}
      priority
      alt="Ferla Bikes Main Image"
      className={styles.best_sellers_mob__image}
    />
  );
};

export default LazyImage;
