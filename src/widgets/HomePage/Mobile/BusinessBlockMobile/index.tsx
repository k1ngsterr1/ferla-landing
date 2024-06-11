import React from "react";
import Image from "next/image";
import Button from "@shared/ui/Button";
import { MiniText } from "@shared/ui/MiniText";
import { SolutionTab } from "@entities/SolutionTab";
import { tabs } from "@shared/lib/content/solutionTabContent";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import main_pc from "@assets/webp/pc/mainImage_pc.webp";

import styles from "./styles.module.scss";

async function getData() {
  const res = await fetch(
    "https://spark-admin-production.up.railway.app/api/site/content/:url"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return <main></main>;
}

export const BusinessBlockMobile = () => {
  return (
    <section className={styles.business_block_mob} id="perfect-mob">
      <Image
        src={main_pc}
        alt="Ferla Bikes Main Image"
        className={styles.business_block_mob__image}
      />
      <div className={styles.business_block_mob__content}>
        <div className={styles.business_block_mob__content__text}>
          <MiniText text="Aesthetic Vending Solutions" />
          <h2 className={styles.business_block_mob__content__text__heading}>
            Perfect <strong className="text-red">for Any Business</strong>
          </h2>
          <p className={styles.business_block_mob__content__text__paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem
            ipsum dolor sit amet.
          </p>
        </div>
        <div className={styles.business_block_mob__content__tabs}>
          {tabs.map((tab) => (
            <SolutionTab key={tab.name} name={tab.name} href={tab.href} />
          ))}
        </div>
        <Button
          text="Get Started"
          buttonType="transparent"
          margin="mt-4"
          icon={faChevronRight}
        />
      </div>
    </section>
  );
};
