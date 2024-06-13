import React from "react";
import Image, { StaticImageData } from "next/image";

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
          key={index}
          src={
            data.components && data.components[`${26 + index}`]
              ? data.component[`${26 + index}`].value
              : "Content Not Found"
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
