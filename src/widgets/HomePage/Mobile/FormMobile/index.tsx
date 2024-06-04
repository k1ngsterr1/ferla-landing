import React from "react";
import { SubmitForm } from "@widgets/HomePage/PC/SubmitForm";

import styles from "./styles.module.scss";

export const FormMobile = () => {
  return (
    <section className={styles.form_mob}>
      <h6>
        <strong>Contact Us</strong>
      </h6>
      <p className={styles.form_mob__paragraph}>
        We've got more options Hop on a call with us today!
      </p>
      <SubmitForm />
    </section>
  );
};
