import React from "react";
import arrow from "@assets/vectors/arrow.svg";
import Image from "next/image";
import Button from "@shared/ui/Button";
import { MiniText } from "@shared/ui/MiniText";
import { SolutionTab } from "@entities/SolutionTab";
import { tabs } from "@shared/lib/content/solutionTabContent";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


import main_pc from "@assets/webp/pc/mainImage_pc.png";

import styles from "./styles.module.scss";

export const BusinessBlockMobile = () => {
  return (
    <section className={styles.business_block_mob}>
        <Image
        src={main_pc}
        alt="Ferla Bikes Main Image"
        className={styles.business_block_mob__image}
        />
    <div className={styles.business_block_mob__text}>
      <MiniText text="Aesthetic Vending Solutions" />
        <h2 className='mt-4'>
            Perfect <strong className="text-red">for Any Business</strong>
        </h2>
        <p className={styles.business_block_mob__text_paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet.
        </p>
    </div>
    <div className={styles.business_block_mob__tabs}>
      {tabs.map((tab) => 
        <SolutionTab key={tab.name} name={tab.name} href={tab.href}/>
      )}
    </div>
    <Button
      text="Get Started"
      buttonType="transparent"
      margin="mt-4"
      icon={faChevronRight}
    />
    </section>
  )
}