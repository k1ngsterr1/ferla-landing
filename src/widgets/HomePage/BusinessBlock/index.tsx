import React from "react";
import arrow from "@assets/vectors/arrow.svg";
import Image from "next/image";
import Button from "@shared/ui/Button";
import { MiniText } from "@shared/ui/MiniText";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { SolutionTab } from "@entities/SolutionTab";

import styles from "./styles.module.scss";

export const BusinessBlock = () => {
  return (
    <section className={styles.business_block}>
      <div className="flex flex-col items-start w-full">
        <div className={styles.business_block__upper}>
          <h2 className={styles.business_block__heading}>
            Perfect <strong className="text-red">for Any Business</strong>
          </h2>
          <MiniText text="Aesthetic Vending Solutions" />
        </div>
        <div className={styles.business_block__perfect}>
          <div className="flex flex-col items-start">
            <div className="flex items-start gap-12">
              <Image
                src={arrow}
                className={styles.business_block__arrow}
                alt="arrow"
              />
              <div className="flex flex-col items-start">
                <p className={styles.business_block__perfect__paragraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <Button
                  text="Get Started"
                  buttonType="transparent"
                  margin="mt-4"
                  icon={faChevronRight}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-center items-center gap-4">
              <SolutionTab name="Cafe-On-Wheels" href="AAA" />
              <SolutionTab name="Stand-Out Trade Shows" href="AAA" />
            </div>
            <div className="flex justify-center items-center gap-4 mt-4">
              <SolutionTab name="Stand-Out Trade Shows" href="AAA" />
              <SolutionTab name="Promo Activation Cart " href="AAA" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
