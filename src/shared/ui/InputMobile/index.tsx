"use client";

import React, { useRef } from "react";
import { useCustomLabel } from "@shared/lib/animations/customLabelAnimationMobile";

import styles from "./styles.module.scss";

interface Input extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  margin?: string;
  type: string;
}

export const InputMobile: React.FC<Input> = ({
  labelText,
  margin,
  type,
  ...rest
}) => {
  const { onLabelFocus, onLabelBlur, labelRef } = useCustomLabel();

  return (
    <div
      className={`${styles.input_container} hoverable ${margin} hoverable`}
      {...rest}
    >
      <label
        className={`${styles.input_container__label} hoverable`}
        ref={labelRef}
      >
        {labelText}
      </label>
      <input
        type={type}
        onFocus={onLabelFocus}
        onBlur={onLabelBlur}
        className={`${styles.input_container__input} hoverable`}
      />
    </div>
  );
};
