import React from "react";
import { EmailInput } from "@entities/EmailInput";

import styles from "./styles.module.scss";

interface IEmailForm {
  data: any;
}

export const EmailForm: React.FC<IEmailForm> = ({ data }) => {
  return (
    <div className={styles.email_form}>
      <span className={styles.email_form__heading}>
        {data.components && data.components["66"]
          ? data.components["66"].value
          : "Contact With Us."}
      </span>
      <p className={styles.email_form__paragraph}>
        {data.components && data.components["67"]
          ? data.components["67"].value
          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit.."}
      </p>
      <EmailInput />
    </div>
  );
};
