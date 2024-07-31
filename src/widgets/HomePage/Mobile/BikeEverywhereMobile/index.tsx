import React from "react";
import Button from "@shared/ui/Button";
import dynamic from "next/dynamic";

import styles from "./styles.module.scss";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { bikes } from "@shared/lib/content/bikesImagesContent";

const HeavyImage = dynamic(() => import("../LazyImageMobile/bikeseverywhere"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export const BikesEverywhereMobile = () => {
  return (
    <section className={styles.bikes_everywhere_mob} id="bikes-mob">
      <div className={styles.bikes_everywhere_mob__text}>
        <h4 className={styles.bikes_everywhere_mob__text__heading}>
          Ferla Bikes Everywhere
        </h4>
        <p className={styles.bikes_everywhere_mob__text__paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className={styles.bikes_everywhere_mob__gallery}>
        <HeavyImage />
      </div>
      <Button
        text={"Contact Us"}
        buttonType="transparent"
        margin="mt-8"
        icon={faChevronRight}
      />
    </section>
  );
};
