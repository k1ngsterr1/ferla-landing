"use client";
import React, { useState } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

export const CalculatorRange = () => {
  const [value, setValue] = useState<number>(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  return (
    <div className={`${styles.calculator_range} hoverable gap-4 text-red`}>
      <FontAwesomeIcon
        icon={faMinus}
        onClick={handleDecrement}
        className={`${styles.calculator_range__button__icon} hoverable`}
      />
      <RangeSlider
        value={value}
        color="#E33A3A"
        size="lg"
        min={0}
        max={350}
        step={1}
        variant="danger"
        style={{
          width: "100%",
        }}
        className={`${styles.calculator_range__input} hoverable`}
        tooltip="on"
        tooltipPlacement="top"
        onChange={(changeEvent) => setValue(changeEvent.target.value)}
      />
      <FontAwesomeIcon
        icon={faPlus}
        onClick={handleIncrement}
        className={`${styles.calculator_range__button__icon} hoverable`}
      />
    </div>
  );
};
