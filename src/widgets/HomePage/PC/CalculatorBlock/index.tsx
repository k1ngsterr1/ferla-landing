import React from "react";
import { Calculator } from "@features/Calculator";

import styles from "./styles.module.scss";

export const CalculatorBlock = () => {
  return (
    <section className={styles.calculator}>
      <h6 className={styles.calculator__heading}>Calculator</h6>
      <p className={styles.calculator__paragraph}>Lorem Ipsum</p>
      <Calculator />
    </section>
  );
};
