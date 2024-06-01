import React from "react";
import Button from "@shared/ui/Button";
import Image from "next/image";
import arrowLeft from "@assets/vectors/arrow_left.svg";

import { MiniText } from "@shared/ui/MiniText";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

export const BestSellers = () => {
  return (
    <section className={styles.best_sellers}>
      <MiniText text="Best Sellers" />
      <h3 className={styles.best_sellers__heading}>Your Bike, Your Way</h3>
      <div className="flex items-center gap-8 mt-4">
        <p className={styles.best_sellers__paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
        <Image
          src={arrowLeft}
          alt="Arrow Left"
          className={styles.best_sellers__arrow}
        />
      </div>
      <Button
        text="Manage Your Business"
        buttonType="transparent"
        margin="mt-8"
        icon={faChevronRight}
      />
      <div className="flex flex-col"></div>
    </section>
  );
};
