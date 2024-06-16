import React from "react";
import Button from "@shared/ui/Button";
import { MiniText } from "@shared/ui/MiniText";
import { faChevronRight, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { Block } from "@entities/Block";
import { Video } from "@entities/Video";

import market_image from "@assets/webp/pc/market_leader_pc.webp";

import styles from "./styles.module.scss";

interface IManageScreen {
  data: any;
}

export const ManageScreen: React.FC<IManageScreen> = ({ data }) => {
  return (
    <section className={styles.manage_block} id="markets">
      <div className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start w-full">
          <MiniText
            text={
              data.components && data.components["42"]
                ? data.components["42"].value
                : "From Initial Concept To Market Leader"
            }
          />
          <div className="w-full flex items-start justify-between">
            <h6 className={styles.manage_block__heading}>
              {data.components &&
              data.components["43"] &&
              data.components["43"].value.split("Ferla Bikes").length > 0 ? (
                <>
                  {data.components["43"].value.split("Ferla Bikes")[0]}
                  <strong className="text-red"> Ferla Bikes</strong>
                  {data.components["43"].value.split("Ferla Bikes")[1]}
                </>
              ) : (
                `Redefining Mobile Business Solutions With Ferla Bikes`
              )}
            </h6>
            <Button
              text={
                data.components && data.components["44"]
                  ? data.components["44"].value
                  : "Manage Your Business"
              }
              buttonType="transparent"
              icon={faChevronRight}
            />
          </div>
        </div>
        <div className="flex">
          <div className={styles.manage_block__list}>
            <Block
              icon={faMoneyBill}
              paragraph={
                data.components && data.components["45"]
                  ? data.components["45"].value
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              }
            />
            <hr className={styles.manage_block__list__separator} />
            <Block
              icon={faMoneyBill}
              margin="mt-8"
              paragraph={
                data.components && data.components["46"]
                  ? data.components["46"].value
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              }
            />
            <hr className={styles.manage_block__list__separator} />
            <Block
              icon={faMoneyBill}
              margin="mt-8"
              paragraph={
                data.components && data.components["47"]
                  ? data.components["47"].value
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              }
            />
          </div>
          <Video
            data={
              data.components && data.components["48"]
                ? data.components["48"].value
                : market_image
            }
          />
        </div>
      </div>
    </section>
  );
};
