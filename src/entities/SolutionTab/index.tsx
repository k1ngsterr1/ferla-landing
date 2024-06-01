import React from "react";

import styles from "./styles.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

interface ISolutionTab {
  name: string;
  href: string;
}

export const SolutionTab: React.FC<ISolutionTab> = ({ name, href }) => {
  return (
    <div className={styles.solution_tab}>
      <FontAwesomeIcon icon={faStar} className={styles.solution_tab__star} />
      <div className={styles.solution_tab__text}>
        <span className={styles.solution_tab__name}>{name}</span>
        <span className="flex items-center gap-2">
          <Link href={href} className={styles.solution_tab__link}>
            Learn More
          </Link>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.solution_tab__icon}
          />
        </span>
      </div>
    </div>
  );
};
