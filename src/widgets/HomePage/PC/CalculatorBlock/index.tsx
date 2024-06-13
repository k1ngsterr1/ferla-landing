import React from "react";
import { Calculator } from "@features/Calculator";

import styles from "./styles.module.scss";

interface ICalculatorBlock {
  data: any;
}

export const CalculatorBlock: React.FC<ICalculatorBlock> = ({ data }) => {
  return (
    <section className={styles.calculator}>
      <h6 className={styles.calculator__heading}>
        {data?.components && data?.components["50"]
          ? data?.components["50"].value
          : "Calculator"}
      </h6>
      <p className={styles.calculator__paragraph}>
        {data?.components && data?.components["51"]
          ? data?.components["51"].value
          : "Lorem Ipsum"}
      </p>
      <Calculator />
    </section>
  );
};
