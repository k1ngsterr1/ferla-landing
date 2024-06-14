"use client";
import React from "react";
import Image from "next/image";

import spark_logo from "@assets/vectors/spark_logo.svg";

import styles from "./styles.module.scss";

export const SparkLogo = () => {
  return (
    <Image
      className={`hoverable ${styles.logo}`}
      src={spark_logo}
      onClick={() => window.open("https://sparkstudio.kz/home", "_blank")}
      alt="Spark Studio Logotype"
    />
  );
};
