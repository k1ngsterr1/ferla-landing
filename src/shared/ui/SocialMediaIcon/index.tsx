import React from "react";
import styles from "./styles.module.scss";

import { ISocialMediaProps } from "@shared/lib/content/socialMediaContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SocialMediaIcon: React.FC<ISocialMediaProps> = ({
  icon,
  href,
}) => {
  return (
    <a className={`${styles.link} hoverable`} href={href}>
      <FontAwesomeIcon icon={icon} className={styles.link__icon} />
    </a>
  );
};
