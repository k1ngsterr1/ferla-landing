import React from "react";
import Image from "next/image";
import Button from "@shared/ui/Button";

import { bikes } from "@shared/lib/content/bikesImagesContent";

import styles from "./styles.module.scss";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

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

export const BikesEverywhereMobile = () => {
  return (
    <section className={styles.bikes_everywhere_mob} id="bikes-mob">
      <div className={styles.bikes_everywhere_mob__text}>
        <h4 className={styles.bikes_everywhere_mob__text__heading}>
          Ferla Bikes<strong className="text-red">everywhere</strong>
        </h4>
        <p className={styles.bikes_everywhere_mob__text__paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className={styles.bikes_everywhere_mob__gallery}>
        {bikes.map((bike, index) => (
          <Image
            key={index}
            src={bike.image}
            className={styles.bikes_everywhere_mob__gallery_image}
            alt="bike"
          />
        ))}
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
