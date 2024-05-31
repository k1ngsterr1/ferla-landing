import React from "react";
import Link from "next/link";
import logo from "@assets/vectors/logo.svg";
import Image from "next/image";


import styles from "./styles.module.scss";

export const HeaderMobile = () => {
  return (
    <header className={styles.header_mob}>
      <Image
        priority
        src={logo}
        alt="Ferla Bikes Logo"
        className={styles.header_mob__logo}
      />
     <Link className={styles.header_mob__link} href="#">
        Get a quote
      </Link>
    </header>
  );
};
