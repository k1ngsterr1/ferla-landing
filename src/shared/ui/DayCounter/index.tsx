"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "../Counter/styles.module.scss";

export const DayCounter = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className={styles.counter}>
      <FontAwesomeIcon
        icon={faMinus}
        className={styles.counter__decrement}
        onClick={handleDecrement}
      />
      <span className={styles.counter__count}>{count}</span>
      <div className="flex flex-col items-center ">
        <FontAwesomeIcon
          icon={faPlus}
          className={styles.counter__increment}
          onClick={handleIncrement}
        />
      </div>
    </div>
  );
};
