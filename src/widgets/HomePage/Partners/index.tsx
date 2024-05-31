import React from "react";
import Image from "next/image";
import illustration from "@assets/vectors/illustrations.svg";

import styles from "./styles.module.scss";

export const PartnersScreen = () => {
  return (
    <section className={styles.partners}>
      <div className={styles.partners__upper}>
        <Image
          src={Illustration}
          className={styles.partners__upper}
          alt="Illustration"
        />
      </div>
    </section>
  );
};
