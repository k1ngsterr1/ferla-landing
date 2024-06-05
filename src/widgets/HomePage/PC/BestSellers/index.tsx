"use client";
import React, { useState } from "react";
import { MiniText } from "@shared/ui/MiniText";
import { faChevronRight, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { AboutCard } from "@entities/AboutCard";
import Button from "@shared/ui/Button";
import Image from "next/image";
import best_sellers_pc from "@assets/webp/pc/best_sellers_pc.png";
import ArrowAnimation from "@shared/ui/ArrowRight";

import styles from "./styles.module.scss";
import { ImageForm } from "@entities/ClientComponents/ImageForm";

export const BestSellers = () => {
  const [imageFormVisible, setImageFormVisible] = useState<boolean>(false);

  const handleImageFormVisible = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    setImageFormVisible(!imageFormVisible);
  };

  return (
    <>
      {imageFormVisible && (
        <ImageForm
          onClick={(e: React.SyntheticEvent) => handleImageFormVisible(e)}
        />
      )}
      <section className={styles.best_sellers} id="business">
        <div className="flex flex-col items-start">
          <MiniText text="Best Sellers" />
          <h3 className={styles.best_sellers__heading}>Your Bike, Your Way</h3>
          <div className="flex items-center gap-10 mt-4">
            <p className={styles.best_sellers__paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <ArrowAnimation />
          </div>
          <Button
            id="form"
            text="Manage Your Business"
            buttonType="transparent"
            margin="mt-8"
            icon={faChevronRight}
          />
          <div className="flex flex-col gap-4 mt-8">
            <div className="flex items-center gap-4">
              <AboutCard
                icon={faMoneyBill}
                name="Coffee Bikes"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <AboutCard
                icon={faMoneyBill}
                name="Ice Cream Bikes"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </div>
            <div className="flex items-center gap-4 ">
              <AboutCard
                icon={faMoneyBill}
                name="Modern Bikes"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <AboutCard
                icon={faMoneyBill}
                name="Hot Dog Bikes"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </div>
          </div>
        </div>
        <Image
          src={best_sellers_pc}
          alt="Best Sellers"
          onClick={handleImageFormVisible}
          className={styles.best_sellers__image}
        />
      </section>
    </>
  );
};
