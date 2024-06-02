import React from "react";
import dark_logo from "@assets/vectors/logo_dark.svg";

import styles from "./styles.module.scss";
import Image from "next/image";
import Button from "@shared/ui/Button";
import { navLinks } from "@shared/lib/content/navLinks";
import { NavLink } from "@shared/ui/NavLink";
import LinkButton from "@shared/ui/LinkButton";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="flex items-center justify-between w-full">
        <Image
          className={styles.footer__logo}
          src={dark_logo}
          alt="Ferlabikes Logo"
        />
        <nav className={styles.footer__nav}>
          {navLinks.map((link, index) => (
            <NavLink label={link.label} href={link.href} key={index} />
          ))}
        </nav>
        <LinkButton buttonType="outline" text="Contact Us" href="#form" />
      </div>
      <div className="flex items-center w-full"></div>
    </footer>
  );
};
