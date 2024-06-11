import React from "react";
import { EmailInput } from "@entities/EmailInput";

import styles from "../../../../features/EmailForm/styles.module.scss";

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

export const EmailFormMobile = () => {
  return (
    <div className={styles.email_form} id="email-mob">
      <span className={styles.email_form__heading}>Contact With Us</span>
      <p className={styles.email_form__paragraph}>
        Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae.
        Quisque sit amet nisi erat.
      </p>
      <EmailInput />
    </div>
  );
};
