"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className={styles.counter}>
      <span className={styles.counter__dollar}>$</span>
      <span className={styles.counter__count}>{count}</span>
      <div className="flex flex-col items-center ">
        <FontAwesomeIcon
          icon={faCaretUp}
          className={styles.counter__increment}
          onClick={handleIncrement}
        />
        <FontAwesomeIcon
          icon={faCaretDown}
          className={styles.counter__decrement}
          onClick={handleDecrement}
        />
      </div>
    </div>
  );
};
