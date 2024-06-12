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

interface IBusinessBlock {
  data: any;
}

export const BusinessBlockMobile: React.FC<IBusinessBlock> = ({ data }) => {
  return (
    <section className={styles.business_block_mob} id="perfect-mob">
      <HeavyImage
        src={
          data.components && data.components["4"]
            ? data.components["4"].value
            : main_pc
        }
      />
      <div className={styles.business_block_mob__content}>
        <div className={styles.business_block_mob__content__text}>
          <MiniText
            text={
              data.components && data.components["6"]
                ? data.components["6"].value
                : "Aesthetic Vending Solutions"
            }
          />
          <h2 className={styles.business_block_mob__content__text__heading}>
            {/* Perfect <strong className="text-red">for Any Business</strong> */}
            {data.components && data.components["5"]
              ? data.components["5"].value
              : "Perfect for any Business"}
          </h2>
          <p className={styles.business_block_mob__content__text__paragraph}>
            {data.components && data.components["7"]
              ? data.components["7"].value
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
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
