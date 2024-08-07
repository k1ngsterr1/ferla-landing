import React from "react";
import Image from "next/image";
import { SubmitForm } from "../SubmitForm";

import styles from "./styles.module.scss";

import ferla_logo from "@assets/vectors/logo_dark.svg";
import form_image from "@assets/webp/pc/form_image_pc.webp";

export const Form = () => {
  return (
    <section className={styles.form_section} id="form-pc">
      <div className={styles.form_section__upper}>
        <div className="flex flex-col items-start">
          <h6 className={styles.form_section__upper__heading}>
            Book a meeting
          </h6>
          <p className={styles.form_section__upper__paragraph}>
            Lorem ipsum dolor sit amet, conse ctetur adi piscing elit, sed do
            eiusmod tempor incid idunt ut enem os``
          </p>
        </div>
        {/* <Image
          src={ferla_logo}
          alt="Ferla logotype"
          className={styles.form_section__upper__logo}
        /> */}
      </div>
      <SubmitForm />
      <Image
        width={"920"}
        height={"920"}
        src={form_image}
        alt="Ferla Bikes Form Image Alternative"
        className={styles.form_section__image}
      />
    </section>
  );
};
