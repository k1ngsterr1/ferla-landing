import React from "react";
import Image from "next/image";

import styles from "../PartnersScreenMobile/styles.module.scss";

import planet from "@assets/vectors/illustrations.svg";

const LazyImage = () => {
  return (
    <Image
      src={planet}
      priority
      alt="planet"
      className={styles.partners_mob__content__image}
    />
  );
};

export default LazyImage;
