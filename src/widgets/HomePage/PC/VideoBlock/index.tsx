import React from "react";
import Image from "next/image";
import red_logo from "@assets/vectors/logo.svg";

import styles from "./styles.module.scss";

export const VideoBlock = () => {
  return (
    <section className={styles.video_block}>
      <Image
        src={red_logo}
        className={styles.video_block__logo}
        alt="Ferla Bikes Logo"
      />
    </section>
  );
};
