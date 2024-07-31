import React from "react";
import { EmailInput } from "@entities/EmailInput";

import styles from "../../../../features/EmailForm/styles.module.scss";

export const EmailFormMobile = () => {
  return (
    <div className={styles.email_form} id="email-mob">
      <span className={styles.email_form__heading}>Contact With Us.</span>
      <p className={styles.email_form__paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit..
      </p>
      <EmailInput />
    </div>
  );
};
