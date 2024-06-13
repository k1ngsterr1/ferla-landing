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

interface IBikesEverywhere {
  data: any;
}
export const BikesEverywhereMobile: React.FC<IBikesEverywhere> = ({ data }) => {
  return (
    <section className={styles.bikes_everywhere_mob} id="bikes-mob">
      <div className={styles.bikes_everywhere_mob__text}>
        <h4 className={styles.bikes_everywhere_mob__text__heading}>
          {data.components && data.components["24"]
            ? data.components["24"].value
            : "Ferla Bikes Everywhere"}
        </h4>
        <p className={styles.bikes_everywhere_mob__text__paragraph}>
          {data.components && data.components["25"]
            ? data.components["25"].value
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        </p>
      </div>
      <div className={styles.bikes_everywhere_mob__gallery}>
        <HeavyImage
          data={
            data.components && data.components["26"]
              ? data.components["26"].value
              : bikes
          }
        />
      </div>
      <Button
        text="Start Selling"
        buttonType="transparent"
        margin="mt-8"
        icon={faChevronRight}
      />
    </section>
  );
};
