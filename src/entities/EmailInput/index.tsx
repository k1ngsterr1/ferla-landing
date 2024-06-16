"use client";
import React, { useState } from "react";
import { useSendQuoteEmail } from "@shared/lib/hooks/useSendEmailQuote";

import styles from "./styles.module.scss";

export const EmailInput = () => {
  const [email, setEmail] = useState<string>("");
  const { onSubmit } = useSendQuoteEmail();

  return (
    <form className={`${styles.email_input} hoverable`} onSubmit={onSubmit}>
      <input
        className={styles.email_input__input}
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Request A Quote"
      />
      <button
        type="submit"
        className={`${styles.email_input__button} hoverable !cursor-none`}
      >
        Send
      </button>
    </form>
  );
};
