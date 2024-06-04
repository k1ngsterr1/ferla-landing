"use client";
import React from "react";
import styles from "./styles.module.scss";
import { Calculator } from "@features/Calculator";

export const CalculatorBlock = () => {
  return (
    <section className={styles.calculator}>
      <h6 className={styles.calculator__heading}>Calculator</h6>
      <p className={styles.calculator__paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </p>
      <Calculator />
    </section>
  );
};
