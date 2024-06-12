import React from "react";
import Image from "next/image";
import market_image from "@assets/webp/pc/market_leader_pc.webp";

import styles from "../../../../entities/Video/styles.module.scss";

interface ILazyImage {
  src: string;
}

const LazyImage: React.FC<ILazyImage> = ({ src }) => {
  return (
    <Image
      priority
      src={src}
      width={"925"}
      height={"820"}
      className={styles.video__market}
      alt="Video Market"
    />
  );
};

export default LazyImage;
