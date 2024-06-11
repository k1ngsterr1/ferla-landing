import React from "react";
import Image from "next/image";

import styles from "../Main/styles.module.scss";

import main_pc from "@assets/webp/pc/mainImage_pc.webp";

interface ILazyImage {
  src: string;
}

const LazyImage: React.FC<ILazyImage> = ({ src }) => {
  console.log("url:", src);

  return (
    <Image
      src={src}
      priority
      width={"50"}
      height={"50"}
      alt="Ferla Bikes Main Image"
      className={styles.main_screen__image}
    />
  );
};

export default LazyImage;
