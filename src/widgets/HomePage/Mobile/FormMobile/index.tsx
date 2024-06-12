import React from "react";
import { SubmitFormMobile } from "@widgets/HomePage/Mobile/SubmitFormMobile";
import { SubmitFormTablet } from "@widgets/HomePage/Tablet/SubmitFormTablet";

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

export const FormMobile = () => {
  return (
    <section className={styles.form_mob} id="form-mob">
      <h6>
        <strong>Contact Us</strong>
      </h6>
      <p className={styles.form_mob__paragraph}>
        We have got more options Hop on a call with us today!
      </p>
      <div className={styles.form_mob__mobile}>
        <SubmitFormMobile />
      </div>
      <div className={styles.form_mob__tablet}>
        <SubmitFormTablet />
      </div>
    </section>
  );
};
