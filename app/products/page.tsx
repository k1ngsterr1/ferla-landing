import React from "react";
import { Header } from "@features/Header";
import { Cursor } from "@shared/ui/Cursor";

import styles from "../styles.module.scss";
import { Form } from "@widgets/HomePage/PC/Form";
import { Footer } from "@features/Footer";
import { OurBikes } from "@widgets/HomePage/PC/OurBikes";

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

const Products = async () => {
  const data = await getData();

  return (
    <>
      <Header />
      <Cursor />
      <div className={`${styles.pc} mt-8`}>
        <OurBikes allBikes={false} data={data} />
      </div>
      <Form data={data} />
      <Footer />
    </>
  );
};

export default Products;
