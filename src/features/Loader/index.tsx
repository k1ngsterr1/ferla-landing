import React from "react";
import logo from "@assets/vectors/logo_dark.svg";
import Image from "next/image";

import styles from "./styles.module.scss";

export const Loading = () => {
  return (
    <div className={styles.loader}>
      <Image
        priority
        src={logo}
        className={styles.loader__logo}
        alt="Ferla Bikes Logo"
      />
    </div>
  );
};
