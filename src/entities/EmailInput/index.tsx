import React from "react";

import styles from "./styles.module.scss";

export const EmailInput = () => {
  return (
    <div className={styles.email_input}>
      <input
        className={styles.email_input__input}
        placeholder="Request A Quote"
      />
      <button className={styles.email_input__button}>Send</button>
    </div>
  );
};
