import React from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export interface ICartFeatureTabProps {
  name: string;
}

export const CartFeatureTab: React.FC<ICartFeatureTabProps> = ({ name }) => {
  return (
    <div className={`${styles.feature_tab} hoverable`}>
      <FontAwesomeIcon
        icon={faStar}
        className={`${styles.feature_tab__icon} hoverable`}
      />
      <span className={`${styles.feature_tab__name} hoverable`}>{name}</span>
    </div>
  );
};
