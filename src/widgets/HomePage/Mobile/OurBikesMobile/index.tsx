import React from "react";
import { CartCardSwiper } from "@features/CartCardSwiper";

import styles from "./styles.module.scss";

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

export const OurBikesMobile = () => {
  return (
    <section className={styles.our_bikes_mob}>
      <h6>
        <strong>Our Bikes</strong>
      </h6>
      <CartCardSwiper allBikes={true} />
    </section>
  );
};
