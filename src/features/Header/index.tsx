"use client";
import React, { useRef } from "react";
import logo from "@assets/vectors/logo_dark.svg";
import LinkButton from "@shared/ui/LinkButton";
import Image from "next/image";
import useHeaderScroll from "@shared/lib/animations/headerAnimation";

import { NavLink } from "@shared/ui/NavLink";
import { navLinks } from "@shared/lib/content/navLinks";

import styles from "./styles.module.scss";

export const Header = () => {
  const headerRef = useRef(null);

  useHeaderScroll(headerRef);

  return (
    <header className={styles.header} ref={headerRef}>
      <div
        className={`${styles.header__container}  m-auto w-full  !flex !flex-row items-center justify-between`}
      >
        <Image
          priority
          src={logo}
          alt="Ferla Bikes Logo"
          className={styles.header__logo}
        />
        <nav className={styles.header__nav}>
          {navLinks.map((link, index) => (
            <NavLink label={link.label} href={link.href} key={index} />
          ))}
        </nav>
        <LinkButton text="Contact Us" buttonType="outline" href="#form" />
      </div>
    </header>
  );
};
