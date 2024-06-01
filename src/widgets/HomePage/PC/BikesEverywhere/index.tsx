import React from "react";
import Button from "@shared/ui/Button";
import Image from "next/image";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import bike01 from "@assets/webp/pc/bike_01_pc.webp";
import bike02 from "@assets/webp/pc/bike_02_pc.webp";
import bike03 from "@assets/webp/pc/bike_03_pc.webp";
import bike04 from "@assets/webp/pc/bike_04_pc.webp";

import styles from "./styles.module.scss";

export const BikesEverywhere = () => {
  return (
    <section className={styles.everywhere_block}>
      <div className={styles.everywhere_block__upper}>
        <h4 className={styles.everywhere_block__heading}>
          Ferla Bikes <strong className="text-red">Everywhere</strong>
        </h4>
        <div className="flex flex-col items-end">
          <p className={styles.everywhere_block__upper__paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Button
            text="Start Selling"
            buttonType="transparent"
            margin="mt-4"
            icon={faChevronRight}
          />
        </div>
      </div>
      <div className={styles.everywhere_block__photos}>
        <Image
          src={bike01}
          className={styles.everywhere_block__photo}
          alt="Ferla Bike"
        />
        <Image
          src={bike02}
          className={styles.everywhere_block__photo}
          alt="Ferla Bike"
        />
        <Image
          src={bike03}
          className={styles.everywhere_block__photo}
          alt="Ferla Bike"
        />
        <Image
          src={bike04}
          className={styles.everywhere_block__photo}
          alt="Ferla Bike"
        />
      </div>
    </section>
  );
};