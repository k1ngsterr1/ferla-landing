"use client";
import React from "react";
import { Counter } from "@shared/ui/Counter";
import { CalculatorInput } from "@shared/ui/CalculatorInput";

import styles from "./styles.module.scss";
import Selector from "@shared/ui/CalculatorSelector";
import { options } from "@shared/lib/content/options";
import { CalculatorRange } from "@shared/ui/CalculatorRange";

export const Calculator = () => {
  return (
    <div className={styles.calculator}>
      <div className="flex items-start justify-between">
        <div className="flex flex-col items-start">
          <span className={styles.calculator__counter_text}>
            1)Average order evice
          </span>
          <Counter />
        </div>
        <div className="flex flex-col items-start">
          <span className={styles.calculator__counter_text}>
            1)Average order evice
          </span>
          {/* <Range min={50} max={350} step={1} /> */}
        </div>
      </div>
      <div className="flex items-start justify-between">
        <div className="flex flex-col items-start">
          <span className={styles.calculator__counter_text}>
            3)How many days per week
          </span>
          <CalculatorRange step={1} min={1} max={350} />
          <Counter />
        </div>
        <div className="flex flex-col items-start">
          <span className={styles.calculator__counter_text}>4)Bike evice</span>
          <CalculatorInput />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Selector placeholder="Ferla X" options={options} />
      </div>
    </div>
  );
};
