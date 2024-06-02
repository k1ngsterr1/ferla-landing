import React from "react";
import Image from "next/image";

import ferla_logo from "@assets/vectors/logo_dark.svg";

import styles from "./styles.module.scss";
import { Input } from "@shared/ui/Input";
import { DatePickerInput } from "@shared/ui/DatePicker";
import Button from "@shared/ui/Button";

export const Form = () => {
  return (
    <section className={styles.form_section}>
      <div className={styles.form_section__upper}>
        <div className="flex flex-col items-start">
          <h6 className={styles.form_section__upper__heading}>
            Book A Meeting
          </h6>
          <p className={styles.form_section__upper__paragraph}>
            Lorem ipsum dolor sit amet, conse ctetur adi piscing elit, sed do
            eiusmod tempor incid idunt ut enem os..
          </p>
        </div>
        <Image
          src={ferla_logo}
          alt="Ferla logotype"
          className={styles.form_section__upper__logo}
        />
      </div>
      <form className={styles.form_section__form}>
        <Input labelText="Your Name" type="text" margin="mt-4" required />
        <Input labelText="Phone Number" type="phone" margin="mt-14" required />
        <Input labelText="Email" type="email" margin="mt-14" required />
        <DatePickerInput placeholder="Pick a Date" margin="mt-14" />
        <Button
          text="Send Form"
          type="submit"
          buttonType="filled"
          margin="mt-8"
        />
      </form>
    </section>
  );
};
