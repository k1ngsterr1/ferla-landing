import React from "react";
import styles from "./styles.module.scss";

import { ISocialMediaProps } from "@shared/lib/content/socialMediaContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const SocialMediaIcon: React.FC<ISocialMediaProps> = ({
  icon,
  href,
  aria_label,
}) => {
  return (
    <Link
      className={`${styles.link} hoverable`}
      href={href}
      aria-label={aria_label}
      title="Follow us on social media"
    >
      <FontAwesomeIcon icon={icon} className={styles.link__icon} />
    </Link>
  );
};
