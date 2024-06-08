import React from "react";
import { SubmitFormMobile } from "@widgets/HomePage/Mobile/SubmitFormMobile";
import { SubmitFormTablet } from "@widgets/HomePage/Tablet/SubmitFormTablet";

import styles from "./styles.module.scss";

export const FormMobile = () => {
  return (
    <section className={styles.form_mob}>
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
