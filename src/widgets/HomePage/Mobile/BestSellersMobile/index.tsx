import React from "react";
import Button from "@shared/ui/Button";
import { MiniText } from "@shared/ui/MiniText";
import Image from "next/image";
import { AboutCardSwiper } from "@features/AboutCardSwiper";
import dynamic from "next/dynamic";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

const HeavyImage = dynamic(() => import("../LazyImageMobile/bestsellers"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

async function getData() {
  const res = await fetch(
    "https://spark-admin-production.up.railway.app/api/site/content/:url"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return <main></main>;
}

export const BestSellersMobile = () => {
  return (
    <section className={styles.best_sellers_mob} id="business-mob">
      <div className={styles.best_sellers_mob__content}>
        <div className={styles.best_sellers_mob__content__text}>
          <MiniText text="Best Sellers" />
          <h3 className={styles.best_sellers_mob__content__text__heading}>
            <strong>Your Business, Your Cart, Your Way</strong>
          </h3>
          <p className={styles.best_sellers_mob__content__text__paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <AboutCardSwiper />
        <Button
          text="Manage Your Business"
          buttonType="transparent"
          margin="mt-8"
          icon={faChevronRight}
        />
      </div>
      <HeavyImage />
    </section>
  );
};
