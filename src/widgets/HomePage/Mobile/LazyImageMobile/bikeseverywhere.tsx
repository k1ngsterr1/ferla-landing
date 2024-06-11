import React from "react";
import Image from "next/image";

import { bikes } from "@shared/lib/content/bikesImagesContent";

import styles from "../BikeEverywhereMobile/styles.module.scss";

const LazyImage = () => {
  return (
    <>
      {bikes.map((bike, index) => (
        <Image
          key={index}
          src={bike.image}
          priority
          className={styles.bikes_everywhere_mob__gallery_image}
          alt="bike"
        />
      ))}
    </>
  );
};

export default LazyImage;
