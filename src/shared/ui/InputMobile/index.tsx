"use client";

import React, { useRef, useState } from "react";
import { useCustomLabelMobile } from "@shared/lib/animations/customLabelAnimation";

import styles from "./styles.module.scss";

interface Input extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  margin?: string;
  type: string;
}

export const Input: React.FC<Input> = ({
  labelText,
  margin,
  type,
  ...rest
}) => {
  const labelRef = useRef<HTMLLabelElement>(null);
  const { onLabelFocusMobile, onLabelBlurMobile } =
    useCustomLabelMobile(labelRef);

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
        onFocus={onLabelFocusMobile}
        onBlur={onLabelBlurMobile}
        className={`${styles.input_container__input} hoverable`}
      />
    </div>
  );
};
