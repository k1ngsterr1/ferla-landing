import React from "react";
import { EmailInput } from "@entities/EmailInput";

import styles from "./styles.module.scss";

export const EmailForm = () => {
  return (
    <div className={styles.email_form}>
      <span className={styles.email_form__heading}>Contact With Us</span>
      <p className={styles.email_form__paragraph}>
        Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae.
        Quisque sit amet nisi erat.
      </p>
      <EmailInput />
    </div>
  );
};
