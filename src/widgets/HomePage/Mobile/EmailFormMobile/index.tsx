import React from "react";
import { EmailInput } from "@entities/EmailInput";

import styles from "../../../../features/EmailForm/styles.module.scss";

interface IEmailForm {
  data: any;
}

export const EmailFormMobile: React.FC<IEmailForm> = ({ data }) => {
  return (
    <div className={styles.email_form} id="email-mob">
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
