import React from "react";
import Button from "@shared/ui/Button";
import Image from "next/image";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import bike01 from "@assets/webp/pc/bike_01_pc.webp";
import bike02 from "@assets/webp/pc/bike_02_pc.webp";
import bike03 from "@assets/webp/pc/bike_03_pc.webp";
import bike04 from "@assets/webp/pc/bike_04_pc.webp";

import styles from "./styles.module.scss";

interface IBikesEverywhere {
  data: any;
}

export const BikesEverywhere: React.FC<IBikesEverywhere> = ({ data }) => {
  return (
    <section className={styles.everywhere_block}>
      <div className={styles.everywhere_block__upper}>
        <h4 className={styles.everywhere_block__upper__heading}>
          {data.components && data.components["27"]
            ? data.components["27"].value
            : "Ferla Bikes Everywhere"}
        </h4>
        <div className="flex flex-col items-end">
          <p className={styles.everywhere_block__upper__paragraph}>
            {data.components && data.components["28"]
              ? data.components["28"].value
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          </p>
          <Button
            text={
              data.components && data.components["29"]
                ? data.components["29"].value
                : "Content Not Found"
            }
            buttonType="transparent"
            margin="mt-4"
            icon={faChevronRight}
          />
        </div>
      </div>
      <div className={styles.everywhere_block__photos}>
        <Image
          width={"950"}
          height={"950"}
          src={
            data.components && data.components["30"]
              ? data.components["30"].value
              : bike01
          }
          className={styles.everywhere_block__photos__photo}
          alt="Ferla Bike"
        />
        <Image
          width={"950"}
          height={"950"}
          src={
            data.components && data.components["31"]
              ? data.components["31"].value
              : bike02
          }
          className={styles.everywhere_block__photos__photo}
          alt="Ferla Bike"
        />
        <Image
          width={"950"}
          height={"950"}
          src={
            data.components && data.components["32"]
              ? data.components["32"].value
              : bike03
          }
          className={styles.everywhere_block__photos__photo}
          alt="Ferla Bike"
        />
        <Image
          width={"950"}
          height={"950"}
          src={
            data.components && data.components["33"]
              ? data.components["33"].value
              : bike04
          }
          className={styles.everywhere_block__photos__photo}
          alt="Ferla Bike"
        />
      </div>
    </section>
  );
};
