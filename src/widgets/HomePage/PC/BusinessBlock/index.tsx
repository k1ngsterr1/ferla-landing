import React from "react";
import Button from "@shared/ui/Button";
import { MiniText } from "@shared/ui/MiniText";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { SolutionTab } from "@entities/SolutionTab";
import { ArrowLeft } from "@shared/ui/ArrowLeft";

import styles from "./styles.module.scss";

interface IBusinessBlock {
  data: any;
}

export const BusinessBlock: React.FC<IBusinessBlock> = ({ data }) => {
  return (
    <section className={styles.business_block} id="perfect">
      <div className="flex flex-col items-start w-full">
        <div className={styles.business_block__upper}>
          <h2 className={styles.business_block__upper__heading}>
            {/* Perfect <strong className="text-red">for Any Business</strong> */}
            {data.components && data.components["5"]
              ? data.components["5"].value
              : "Perfect for any Business"}
          </h2>
          <MiniText
            text={
              data.components && data.components["6"]
                ? data.components["6"].value
                : "Aesthetic Vending Solutions"
            }
          />
        </div>
        <div className={styles.business_block__perfect}>
          <div
            className={`flex flex-col items-start ${styles.business_block__perfect__content}`}
          >
            <div className="flex items-start gap-12">
              <ArrowLeft />
              <div className="flex flex-col items-start">
                <p className={styles.business_block__perfect__paragraph}>
                  {data.components && data.components["7"]
                    ? data.components["7"].value
                    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                </p>
                <Button
                  id="form"
                  text="Get Started"
                  buttonType="transparent"
                  margin="mt-4"
                  icon={faChevronRight}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div
              className={`flex justify-center items-center gap-4 ${styles.business_block__perfect__upper_tab}`}
            >
              <SolutionTab
                name={
                  data.components && data.components["8"]
                    ? data.components["8"].value
                    : "Cafe-On-Wheels"
                }
                href="/products"
              />
              <SolutionTab
                name={
                  data.components && data.components["9"]
                    ? data.components["9"].value
                    : "Stand-Out Trade Shows"
                }
                href="/products"
              />
            </div>
            <div
              className={`flex justify-center items-center gap-4 mt-4 ${styles.business_block__perfect__lower_tab}`}
            >
              <SolutionTab
                name={
                  data.components && data.components["10"]
                    ? data.components["10"].value
                    : "Stand-Out Trade Shows"
                }
                href="/products"
              />
              <SolutionTab
                name={
                  data.components && data.components["11"]
                    ? data.components["11"].value
                    : "Promo Activation Cart"
                }
                href="/products"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
