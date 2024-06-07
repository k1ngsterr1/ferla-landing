import React from "react";
import { Header } from "@features/Header";
import { Cursor } from "@shared/ui/Cursor";

import styles from "../styles.module.scss";
import { Form } from "@widgets/HomePage/PC/Form";
import { Footer } from "@features/Footer";
import { OurBikes } from "@widgets/HomePage/PC/OurBikes";

const Products = () => {
  return (
    <>
      <Header />
      <Cursor />
      <div className={`${styles.pc} mt-8`}>
        <OurBikes allBikes={false} />
      </div>
      <Form />
      <Footer />
    </>
  );
};

export default Products;
