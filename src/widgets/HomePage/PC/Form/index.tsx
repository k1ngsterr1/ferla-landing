import React from "react";
import Image from "next/image";
import { SubmitForm } from "../SubmitForm";

import styles from "./styles.module.scss";

import ferla_logo from "@assets/vectors/logo_dark.svg";
import form_image from "@assets/webp/pc/form_image_pc.webp";

interface IForm {
  data: any;
}

export const Form: React.FC<IForm> = ({ data }) => {
  return (
    <section className={styles.form_section} id="form-pc">
      <div className={styles.form_section__upper}>
        <div className="flex flex-col items-start">
          <h6 className={styles.form_section__upper__heading}>
            {data?.components && data?.components["61"]
              ? data?.components["61"].value
              : "Book a meeting"}
          </h6>
          <p className={styles.form_section__upper__paragraph}>
            {data?.components && data?.components["58"]
              ? data?.components["58"].value
              : "Lorem ipsum dolor sit amet, conse ctetur adi piscing elit, sed do eiusmod tempor incid idunt ut enem os"}
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
        src={
          data?.components && data?.components["60"]
            ? data?.components["60"].value
            : form_image
        }
        alt="Ferla Bikes Form Image Alternative"
        className={styles.form_section__image}
      />
    </section>
  );
};
