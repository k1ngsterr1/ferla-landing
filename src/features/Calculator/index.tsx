"use client";
import React, { useState } from "react";
import { Counter } from "@shared/ui/Counter";
import { CalculatorInput } from "@shared/ui/CalculatorInput";
import { options } from "@shared/lib/content/options";
import { CalculatorRange } from "@shared/ui/CalculatorRange";
import { DayCounter } from "@shared/ui/DayCounter";

import Selector from "@shared/ui/CalculatorSelector";

import styles from "./styles.module.scss";

export const Calculator = () => {
  const [averageOrderPrice, setAverageOrderPrice] = useState<number>(0);
  const [ordersPerDay, setOrdersPerDay] = useState<number>(0);
  const [daysPerWeek, setDaysPerWeek] = useState<number>(0);
  const [bikePrice, setBikePrice] = useState<number>(0);

  return (
    <div className={styles.calculator}>
      <div className="flex items-start justify-between">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <span className={styles.calculator__counter_text}>
              Average order price
            </span>
            <Counter />
          </div>
          <div className="flex flex-col items-center mt-4">
            <span className={styles.calculator__counter_text}>
              Approximate orders per day
            </span>
            <CalculatorRange />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <span className={styles.calculator__counter_text}>
              How many days per week
            </span>
            <DayCounter />
          </div>
          <div className="flex flex-col items-center mt-4">
            <span className={styles.calculator__counter_text}>Bike price</span>
            <CalculatorInput />
          </div>
        </div>
      </div>
      <span className={styles.separator} />
      <div className="flex items-center justify-center">
        <Selector margin="mt-4" placeholder="Ferla X" options={options} />
      </div>
    </div>
  );
};
