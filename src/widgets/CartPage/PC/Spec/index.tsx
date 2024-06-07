import React from "react";
import { StaticImageData } from "next/image";

import styles from "./styles.module.scss";
import { ISpecTab } from "@entities/SpecTab";

interface ISpecScreen {
  miniText: string;
  title: string;
  paragraph: string;
  image: StaticImageData;
  specs: ISpecTab[];
}

export const SpecsScreen: React.FC<ISpecScreen> = ({
  miniText,
  title,
  paragraph,
  image,
  specs,
}) => {
  return (
    <section className={styles.specs_screen}>
      <div className="flex flex-col items-start">
        <span className={styles.specs_screen__mini_text}>{miniText}</span>
        <h6 className={styles.specs_screen__heading}>{title}</h6>
        <div className={styles.specs_screen__specs}></div>
      </div>
    </section>
  );
};
