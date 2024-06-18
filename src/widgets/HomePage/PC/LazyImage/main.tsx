import React from "react";
import Image from "next/image";

import styles from "../Main/styles.module.scss";

import image from "../../../../assets/webp/pc/compressed_image.jpg";
import main_pc from "@assets/webp/pc/mainImage_pc.webp";

interface ILazyImage {
  src: string;
}

const LazyImage: React.FC<ILazyImage> = ({ src }) => {
  return (
    <Image
      src={src}
      priority
      width={"820"}
      height={"820"}
      // placeholder="blur"
      // blurDataURL={"../../../../assets/webp/pc/compressed_image.jpg"}
      alt="Ferla Bikes Main Image"
      className={styles.main_screen__image}
    />
  );
};

export default LazyImage;
