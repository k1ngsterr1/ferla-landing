import React from "react";
import { Reviews as ReviewsSwiper } from "@widgets/HomePage/Reviews/index";
import { Header } from "@features/Header";
import { Footer } from "@features/Footer";
import { Cursor } from "@shared/ui/Cursor";

import styles from "../styles.module.scss";
import { Form } from "@widgets/HomePage/PC/Form";

const Reviews = () => {
  return (
    <>
      <Header />
      <Cursor />
      <div className={`${styles.pc} mt-8`}>
        <ReviewsSwiper />
      </div>
      <Form />
      <Footer />
    </>
  );
};

export default Reviews;
