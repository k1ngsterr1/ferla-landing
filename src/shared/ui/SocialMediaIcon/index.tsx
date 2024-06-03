import React from "react";
import Link from "next/link";

import { ISocialMediaProps } from "@shared/lib/content/socialMediaContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.scss";

export const SocialMediaIcon: React.FC<ISocialMediaProps> = ({
  icon,
  href,
  aria_label,
}) => {
  return (
    <Link
      className={`${styles.link} hoverable`}
      target="_blank"
      rel="noopener noreferrer" // Important for security reasons
      href={href}
      aria-label={aria_label}
      title="Follow us on social media"
    >
      <FontAwesomeIcon
        icon={icon}
        className={`${styles.link__icon} hoverable`}
      />
    </Link>
  );
};
