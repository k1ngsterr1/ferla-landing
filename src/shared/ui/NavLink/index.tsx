import React from "react";
import Link from "next/link";
import { INavLink } from "@shared/lib/content/navLinks";

import styles from "./styles.module.scss";

export const NavLink: React.FC<INavLink> = ({ label, href }) => {
  return (
    <Link href={href} className={`${styles.nav_link} hoverable`} passHref>
      {label}
    </Link>
  );
};
