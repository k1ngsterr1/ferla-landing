"use client";

import React, { useRef } from "react";
import useHeaderScroll from "@shared/lib/animations/headerAnimation";

import Link from "next/link";

import logo from "@assets/vectors/logo.svg";
import Image from "next/image";

import styles from "./styles.module.scss";

export const HeaderMobile = () => {
  const headerRef = useRef(null);

  useHeaderScroll(headerRef);

  return (
    <header className={styles.header_mob} ref={headerRef}>
      <div
        className={`${styles.header_mob__container}  m-auto w-full  !flex !flex-row items-center`}
      >
        <Image
          priority
          src={logo}
          alt="Ferla Bikes Logo"
          className={styles.header_mob__container__logo}
        />
        <Link
          className={styles.header_mob__container__link}
          href="#email-mobile"
        >
          Get a quote
        </Link>
      </div>
    </header>
  );
};
