"use client";
import React from "react";

import styles from "./styles.module.scss";

interface TextArea extends React.TextareaHTMLAttributes<HTMLInputElement> {
  margin?: string;
  type: string;
}

export const TextArea: React.FC<Input> = ({
  labelText,
  margin,
  type,
  ...rest
}) => {
  return (
    <textarea
      className={`${styles.input_container} hoverable ${margin} hoverable`}
    ></textarea>
  );
};
