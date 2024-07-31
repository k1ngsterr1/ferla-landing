import React from "react";
import Button from "@shared/ui/Button";
import { MiniText } from "@shared/ui/MiniText";
import { faChevronRight, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { Block } from "@entities/Block";
import { Video } from "@entities/Video";

import market_image from "@assets/webp/pc/market_leader_pc.webp";

import styles from "./styles.module.scss";

export const ManageScreenMobile = () => {
  return (
    <section className={styles.manage_screen_mob} id="markets-mob">
      <MiniText text={"From Initial Concept To Market Leader"} />
      {/* <MiniText text="Market Leader" /> */}
      <h6 className={styles.manage_screen_mob__heading}>
        Redefining Mobile Business Solutions With
        <span className="text-red">Ferla Bikes</span>
      </h6>
      <div className="flex flex-col justify-center items-center mt-8">
        <Block
          icon={faMoneyBill}
          paragraph={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
        />
        <hr className={styles.manage_screen_mob__separator} />
        <Block
          icon={faMoneyBill}
          margin="mt-8"
          paragraph={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
        />
        <hr className={styles.manage_screen_mob__separator} />
        <Block
          icon={faMoneyBill}
          margin="mt-8"
          paragraph={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
        />
      </div>
      <div className=" mt-16">
        <Video data={market_image} />
      </div>
      <Button
        text={"Manage Your Business"}
        buttonType="transparent"
        icon={faChevronRight}
        margin="mt-8"
      />
    </section>
  );
};
