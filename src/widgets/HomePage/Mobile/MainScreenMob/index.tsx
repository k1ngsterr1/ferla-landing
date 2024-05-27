import React from "react";
import Button from "@shared/ui/Button";
import Link from "next/link";
import Image from "next/image";

import mob_bg from "@assets/webp/mob/phone_bg.webp";

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

export const MainScreenMobile = () => {
  return (
    <main className={styles.main_screen_mob} id="home-mob">
      <Image
        src={mob_bg}
        alt="background image"
        priority
        className={styles.main_screen_mob__image}
      />
      <div className={styles.main_screen_mob__content}>
        <h1 className={styles.main_screen_mob__content__heading}>
          <strong>Business on Wheels for Everyone</strong>
        </h1>
        <p className={styles.main_screen_mob__content__paragraph}>
          From Coffee Bikes and Ice Cream Bikes to Marketing & Promo Bikes,
          Hospitality Bikes, Vending Carts and more, we provide the perfect
          solution for your mobile retail pop-up.
        </p>
        <Button
          text="Get A Free Consultation"
          buttonType="filled"
          margin="mt-8"
          targetId="form-mob"
        />
        <Link
          className={styles.main_screen_mob__content__link}
          href="#video-mob"
        >
          Watch the true story
        </Link>
      </div>
    </main>
  );
};
