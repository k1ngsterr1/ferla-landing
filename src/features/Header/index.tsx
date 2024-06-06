"use client";
import React, { RefObject, useRef } from "react";
import logo from "@assets/vectors/logo_dark.svg";
import LinkButton from "@shared/ui/LinkButton";
import Image from "next/image";
import useHeaderScroll from "@shared/lib/animations/headerAnimation";
import { useHoverMenu } from "@shared/lib/hooks/useHoverEffect";

import { NavLink } from "@shared/ui/NavLink";
import { navLinks } from "@shared/lib/content/navLinks";

import styles from "./styles.module.scss";
import { BikesMenu } from "@features/BikesMenu";

export const Header = () => {
  const headerRef = useRef<null>(null);
  const { isVisible, openMenu, closeMenu } = useHoverMenu();

  useHeaderScroll(headerRef);

  const baseNavLinks = navLinks.map((link) => {
    if (link.label === "Bikes") {
      return {
        ...link,
        onMouseEnter: openMenu,
      };
    }
    return link;
  });

  return (
    <header className={styles.header} ref={headerRef}>
      <div
        className={`${styles.header__container}  m-auto w-full  !flex !flex-row items-center justify-between`}
      >
        {isVisible && <BikesMenu onMouseLeave={closeMenu} />}
        <Image
          priority
          src={logo}
          alt="Ferla Bikes Logo"
          className={styles.header__logo}
        />
        <nav className={styles.header__nav}>
          {baseNavLinks.map((link, index) => (
            <NavLink
              label={link.label}
              href={link.href}
              key={index}
              onMouseEnter={link.onMouseEnter}
            />
          ))}
        </nav>
        <LinkButton
          text="Contact Us"
          buttonType="outline"
          zIndex="!z-[100000000]"
          href="#form"
        />
      </div>
    </header>
  );
};
