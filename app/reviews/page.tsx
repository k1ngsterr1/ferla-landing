import React from "react";
// import { Reviews as ReviewsSwiper } from "@widgets/HomePage/PC/Reviews/index";
import { Header } from "@features/Header";
import { Footer } from "@features/Footer";
import { Cursor } from "@shared/ui/Cursor";
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

const Reviews = async () => {
  const data = await getData();

  return (
    <>
      <Header />
      <Cursor />
      <div className={`${styles.pc} mt-8`}>
        {/* <ReviewsSwiper data={data} /> */}
      </div>
      <Form data={data} />
      <Footer />
    </>
  );
};

export default Reviews;
