import React from "react";
import TrustIndexWidget from "@features/TrustIndexWidget";

import styles from "./styles.module.scss";

// async function getData() {
//   const res = await fetch(
//     "https://spark-admin-production.up.railway.app/api/site/content/:url"
//   );
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// export default async function Page() {
//   const data = await getData();

//   return <main></main>;
// }

export const ReviewsMobile = () => {
  return (
    <section className={styles.reviews_mob} id="reviews-mob">
      <h6>
        <strong>Reviews</strong>
      </h6>
      <p className={styles.reviews_mob__paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor. Duis aute irure dolor in reprehenderit in...
      </p>
      <TrustIndexWidget />
    </section>
  );
};
