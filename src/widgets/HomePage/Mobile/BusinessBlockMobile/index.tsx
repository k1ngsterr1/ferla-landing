import React from "react";
import Image from "next/image";
import Button from "@shared/ui/Button";
import { MiniText } from "@shared/ui/MiniText";
import { SolutionTab } from "@entities/SolutionTab";
import { tabs } from "@shared/lib/content/solutionTabContent";
import dynamic from "next/dynamic";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import main_pc from "@assets/webp/pc/mainImage_pc.webp";

import styles from "./styles.module.scss";

const HeavyImage = dynamic(() => import("../LazyImageMobile/business"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export const BusinessBlockMobile = () => {
  return (
    <section className={styles.business_block_mob} id="perfect-mob">
      <HeavyImage src={main_pc} />
      <div className={styles.business_block_mob__content}>
        <div className={styles.business_block_mob__content__text}>
          <MiniText text="Aesthetic Vending Solutions" />
          <h2 className={styles.business_block_mob__content__text__heading}>
            Perfect <strong className="text-red">for Any Business</strong>
          </h2>
          <p className={styles.business_block_mob__content__text__paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className={styles.business_block_mob__content__tabs}>
          {tabs.map((tab, index) => (
            <SolutionTab name={tab.name} href={"test"} key={tab.name} />
          ))}
        </div>
        <Button
          text="Contact Us"
          buttonType="transparent"
          margin="mt-4"
          icon={faChevronRight}
        />
      </div>
    </section>
  );
};
