"use client";

import React, { useRef } from "react";
import { useCustomLabel } from "@shared/lib/animations/customLabelAnimationMobile";
import { useCustomLabelTablet } from "@shared/lib/animations/customLabelAnimationMobile";

import styles from "./styles.module.scss";

interface Input extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  margin?: string;
  type: string;
  isMobile: boolean;
}

export const InputMobile: React.FC<Input> = ({
  labelText,
  margin,
  type,
  isMobile,
  ...rest
}) => {
  const { onLabelFocus, onLabelBlur, labelRef } = useCustomLabel();
  const { onLabelTabletFocus, onLabelTabletBlur, tabletLabelRef } =
    useCustomLabelTablet();

  const onFocusHandler = isMobile ? onLabelFocus : onLabelTabletFocus;
  const onBlurHandler = isMobile ? onLabelBlur : onLabelTabletBlur;
  const labelRefHandler = isMobile ? labelRef : tabletLabelRef;

  return (
    <div
      className={`${styles.input_container} hoverable ${margin} hoverable`}
      {...rest}
    >
      <label
        className={`${styles.input_container__label} hoverable`}
        ref={labelRefHandler}
      >
        {labelText}
      </label>
      <input
        type={type}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        className={`${styles.input_container__input} hoverable`}
      />
    </div>
  );
};
