import React from "react";
import Button from "@shared/ui/Button";
import { MiniText } from "@shared/ui/MiniText";
import { faChevronRight, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { Block } from "@entities/Block";
import { Video } from "@entities/Video";

import market_image from "@assets/webp/pc/market_leader_pc.webp";

import styles from "./styles.module.scss";

export const ManageScreen = () => {
  return (
    <section className={styles.manage_block} id="markets">
      <div className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start w-full">
          <MiniText text="From Initial Concept To Market Leader" />
          <div className="w-full flex items-start justify-between">
            <h6 className={styles.manage_block__heading}>
              Redefining Mobile Business Solutions With Ferla Bikes
            </h6>
            <Button
              text="Manage Your Business"
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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              }
            />
            <hr className={styles.manage_block__list__separator} />
            <Block
              icon={faMoneyBill}
              margin="mt-8"
              paragraph={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              }
            />
            <hr className={styles.manage_block__list__separator} />
            <Block
              icon={faMoneyBill}
              margin="mt-8"
              paragraph={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              }
            />
          </div>
          <Video data={market_image} />
        </div>
      </div>
    </section>
  );
};
