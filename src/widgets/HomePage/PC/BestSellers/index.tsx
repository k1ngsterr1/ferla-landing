import React from "react";
import Button from "@shared/ui/Button";
import Image from "next/image";
import dynamic from "next/dynamic";
import best_sellers_pc from "@assets/webp/pc/best_sellers_pc.webp";
import ArrowAnimation from "@shared/ui/ArrowRight";

import { MiniText } from "@shared/ui/MiniText";
import { faChevronRight, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { AboutCard } from "@entities/AboutCard";

import styles from "./styles.module.scss";

const HeavyImage = dynamic(() => import("../LazyImage/bestSellers"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

interface IBestSellers {
  data: any;
}

export const BestSellers: React.FC<IBestSellers> = ({ data }) => {
  return (
    <section className={styles.best_sellers} id="business">
      <div className="flex flex-col items-start">
        <MiniText
          text={
            data.components && data.components["12"]
              ? data.components["12"].value
              : "Best Sellers"
          }
        />
        <h3 className={styles.best_sellers__heading}>
          {data.components && data.components["13"]
            ? data.components["13"].value
            : "Your Bike, Your Way"}
        </h3>
        <div className="flex items-center gap-10 mt-4">
          <p className={styles.best_sellers__paragraph}>
            {data.components && data.components["14"]
              ? data.components["14"].value
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          </p>
          <ArrowAnimation />
        </div>
        <Button
          targetId="form-pc"
          text="Manage Your Business"
          buttonType="transparent"
          margin="mt-8"
          icon={faChevronRight}
        />
        <div className="flex flex-col gap-4 mt-8">
          <div className="flex items-center gap-4">
            <AboutCard
              icon={faMoneyBill}
              name={
                data.components && data.components["15"]
                  ? data.components["15"].value
                  : "Coffee Bikes"
              }
              text={
                data.components && data.components["16"]
                  ? data.components["16"].value
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              }
            />
            <AboutCard
              icon={faMoneyBill}
              name={
                data.components && data.components["17"]
                  ? data.components["17"].value
                  : "Ice Cream Bikes"
              }
              text={
                data.components && data.components["18"]
                  ? data.components["18"].value
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              }
            />
          </div>
          <div className="flex items-center gap-4 ">
            <AboutCard
              icon={faMoneyBill}
              name={
                data.components && data.components["19"]
                  ? data.components["19"].value
                  : "Modern Bikes"
              }
              text={
                data.components & data.components["20"]
                  ? data.components["20"].value
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              }
            />
            <AboutCard
              icon={faMoneyBill}
              name={
                data.components && data.components["21"]
                  ? data.components["21"].value
                  : "Hot Dog Bikes"
              }
              text={
                data.components & data.components["22"]
                  ? data.components["22"].value
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              }
            />
          </div>
        </div>
      </div>
      <HeavyImage
        src={
          data.components && data.components["23"]
            ? data.components["23"].value
            : best_sellers_pc
        }
      />
    </section>
  );
};
