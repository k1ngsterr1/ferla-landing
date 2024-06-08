import React from "react";
import { Header } from "@features/Header";
import { Footer } from "@features/Footer";
import { Form } from "@widgets/HomePage/PC/Form";

import styles from "../styles.module.scss";

export const GetAQuotePage = () => {
  return (
    <>
      <div className={styles.pc}>
        <Header />
        <Form />
        <Footer />
      </div>
    </>
  );
};
