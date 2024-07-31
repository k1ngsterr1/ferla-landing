import React from "react";
import Image from "next/image";

import styles from "../BusinessBlockMobile/styles.module.scss";

interface ILazyImage {
  src: any;
}
const LazyImage: React.FC<ILazyImage> = ({ src }) => {
  return (
    <Image
      src={src}
      priority
      width={200}
      height={200}
      alt="Ferla Bikes Main Image"
      className={styles.business_block_mob__image}
    />
  );
};

export default LazyImage;
