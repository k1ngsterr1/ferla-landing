import React from "react";

import styles from "./styles.module.scss";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { IconDot } from "@shared/ui/IconDot";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";

interface IBlock {
  icon: IconDefinition;
  paragraph: string;
  margin?: string;
  border?: string;
}

export const Block: React.FC<IBlock> = ({
  icon,
  paragraph,
  margin,
  border,
}) => {
  return (
    <div className={`${styles.block} ${margin} ${border}`}>
      <IconDot icon={icon} />
      <p className={styles.block__paragraph}>{paragraph}</p>
    </div>
  );
};
