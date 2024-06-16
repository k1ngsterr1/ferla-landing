import React from "react";
import Button from "@shared/ui/Button";
import { MiniText } from "@shared/ui/MiniText";
import Image from "next/image";
import { AboutCardSwiper } from "@features/AboutCardSwiper";
import dynamic from "next/dynamic";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

import bike from "@assets/webp/mob/best_sellers_mob.webp";

const HeavyImage = dynamic(() => import("../LazyImageMobile/bestsellers"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

interface IBestSellers {
  data: any;
}

export const BestSellersMobile: React.FC<IBestSellers> = ({ data }) => {
  return (
    <section className={styles.best_sellers_mob} id="business-mob">
      <div className={styles.best_sellers_mob__content}>
        <div className={styles.best_sellers_mob__content__text}>
          <MiniText
            text={
              data.components && data.components["14"]
                ? data.components["14"].value
                : "Your Bike, Your Way"
            }
          />
          <h3 className={styles.best_sellers_mob__content__text__heading}>
            {data.components && data.components["15"]
              ? data.components["15"].value
              : "Your Bike, Your Way"}
          </h3>
          <p className={styles.best_sellers_mob__content__text__paragraph}>
            {data.components && data.components["16"]
              ? data.components["16"].value
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          </p>
        </div>
        <AboutCardSwiper data={data} />
        <Button
          text={
            data.components && data.components["17"]
              ? data.components["17"].value
              : "Content Not Found"
          }
          buttonType="transparent"
          margin="mt-8"
          icon={faChevronRight}
        />
      </div>
      <HeavyImage
        src={
          data.components && data.components["26"]
            ? data.components["26"].value
            : bike
        }
      />
    </section>
  );
};
