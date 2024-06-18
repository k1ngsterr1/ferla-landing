import React from "react";
import { SubmitFormMobile } from "@widgets/HomePage/Mobile/SubmitFormMobile";
import { SubmitFormTablet } from "@widgets/HomePage/Tablet/SubmitFormTablet";

import styles from "./styles.module.scss";

interface IForm {
  data: any;
}

export const FormMobile: React.FC<IForm> = ({ data }) => {
  return (
    <section className={styles.form_mob} id="form-mob">
      <h6>
        {data?.components && data?.components["61"]
          ? data?.components["61"].value
          : "Contact us"}
      </h6>
      <p className={styles.form_mob__paragraph}>
        {data?.components && data?.components["58"]
          ? data?.components["58"].value
          : "We have got more options Hop on a call with us today!"}
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
