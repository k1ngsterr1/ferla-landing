"use client";
import React, { useRef } from "react";
import { useHoverMenu } from "@shared/lib/hooks/useHoverEffect";
import { BikesMenu } from "@features/BikesMenu";
import { NavLink } from "@shared/ui/NavLink";
import { navLinks } from "@shared/lib/content/navLinks";

import logo from "@assets/vectors/logo_dark.svg";
import LinkButton from "@shared/ui/LinkButton";
import Link from "next/link";
import Image from "next/image";
import useHeaderScroll from "@shared/lib/animations/headerAnimation";

import styles from "./styles.module.scss";

export const Header = () => {
  const headerRef = useRef<null>(null);

  const { openMenu, closeMenu, setRef } = useHoverMenu();

  useHeaderScroll(headerRef);

  const baseNavLinks = navLinks.map((link) => {
    if (link.label === "Bikes") {
      return {
        ...link,
        onClick: closeMenu,
        onMouseEnter: openMenu,
      };
    } else {
      return {
        ...link,
        onMouseLeave: closeMenu,
        onClick: closeMenu,
      };
    }
    return link;
  });

  return (
    <header className={styles.header} ref={headerRef}>
      <div
        className={`${styles.header__container}  m-auto w-full  !flex !flex-row items-center justify-between`}
      >
        <BikesMenu onMouseLeave={closeMenu} setMenuRef={setRef} />
        <Link href="/">
          <Image
            priority
            src={logo}
            alt="Ferla Bikes Logo"
            className={`${styles.header__logo} hoverable`}
          />
        </Link>
        <nav className={styles.header__nav}>
          {baseNavLinks.map((link, index) => (
            <NavLink
              label={link.label}
              href={link.href}
              key={index}
              onMouseEnter={link.onMouseEnter}
              onMouseLeave={link.onMouseLeave}
              onClick={link.onClick}
            />
          ))}
        </nav>
        <LinkButton
          text="Contact Us"
          buttonType="outline"
          zIndex="!z-[100000000]"
          href="#form-pc"
        />
      </div>
    </header>
  );
};
