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

export const ManageScreenMobile: React.FC<IManageScreen> = ({ data }) => {
  return (
    <section className={styles.manage_screen_mob} id="markets-mob">
      <MiniText text="From Initial Concept to" />
      <MiniText text="Market Leader" />
      <h6 className={styles.manage_screen_mob__heading}>
        {data.components &&
        data.components["38"] &&
        data.components["38"].value.split("Ferla Bikes").length > 0 ? (
          <>
            {data.components["38"].value.split("Ferla Bikes")[0]}
            <strong className="text-red"> Ferla Bikes</strong>
            {data.components["38"].value.split("Ferla Bikes")[1]}
          </>
        ) : (
          `Redefining Mobile Business Solutions With Ferla Bikes`
        )}
      </h6>
      <div className="flex flex-col justify-center items-center mt-8">
        <Block
          icon={faMoneyBill}
          paragraph={
            data.components && data.components["40"]
              ? data.components["40"].value
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
        />
        <hr className={styles.manage_screen_mob__separator} />
        <Block
          icon={faMoneyBill}
          margin="mt-8"
          paragraph={
            data.components && data.components["41"]
              ? data.components["41"].value
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
        />
        <hr className={styles.manage_screen_mob__separator} />
        <Block
          icon={faMoneyBill}
          margin="mt-8"
          paragraph={
            data.components && data.components["42"]
              ? data.components["42"].value
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
        />
      </div>
      <div className=" mt-16">
        <Video
          video_link="https"
          data={
            data.components && data.components["44"]
              ? data.components["44"].value
              : market_image
          }
        />
      </div>
      <Button
        text="Manage Your Business"
        buttonType="transparent"
        icon={faChevronRight}
        margin="mt-8"
      />
    </section>
  );
};
