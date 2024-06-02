"use client";
import React from "react";
import Image from "next/image";

import spark_logo from "@assets/vectors/spark_logo.svg";

export const SparkLogo = () => {
  return (
    <Image
      className="hoverable"
      src={spark_logo}
      onClick={() => (window.location.href = "https://sparkstudio.kz/home")}
      alt="Spark Studio Logotype"
    />
  );
};
