import React from "react";
import { Header } from "@features/Header";
import { Footer } from "@features/Footer";
import { Form } from "@widgets/HomePage/PC/Form";

import styles from "../styles.module.scss";

async function getData() {
  const res = await fetch(
    "https://ferla-backend-production.up.railway.app/api/components/get-components",
    { cache: "force-cache", next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const GetAQuotePage = async () => {
  const data = await getData();

  return (
    <>
      <div className={styles.pc}>
        <Header />
        <Form data={data} />
        <Footer />
      </div>
    </>
  );
};
