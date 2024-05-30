import React from "react";
import Logo from "@assets/vectors/logo_dark.svg";

import { NavLink } from "@shared/ui/NavLink";
import { navLinks } from "@shared/lib/content/navLinks";

import styles from "./styles.module.scss";
import LinkButton from "@shared/ui/LinkButton";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.header__nav}>
        {navLinks.map((link, index) => (
          <NavLink label={link.label} href={link.href} />
        ))}
      </nav>
      <LinkButton text="Contact Us" buttonType="outline" href="#form" />
    </header>
  );
};
