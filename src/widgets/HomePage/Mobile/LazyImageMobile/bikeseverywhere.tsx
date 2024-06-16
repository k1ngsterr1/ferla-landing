import React from "react";
import Image, { StaticImageData } from "next/image";
import image from "@assets/webp/pc/bike_01_pc.webp";

import { bikes } from "@shared/lib/content/bikesImagesContent";

import styles from "../BikeEverywhereMobile/styles.module.scss";

interface ILazyImage {
  data: any;
}

const LazyImage: React.FC<ILazyImage> = ({ data }) => {
  return (
    <>
      {bikes.map((bike, index) => (
        <Image
          width={950}
          height={950}
          key={index}
          src={
            data.components && data.components[`${30 + index}`]
              ? data.components[`${30 + index}`].value
              : image
          }
          priority
          className={styles.bikes_everywhere_mob__gallery_image}
          alt="bike"
        />
      ))}
    </>
  );
};

export default LazyImage;
