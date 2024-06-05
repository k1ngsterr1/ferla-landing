"use client";
import React, { useState } from "react";
import Button from "@shared/ui/Button";
import { MiniText } from "@shared/ui/MiniText";
import { faChevronRight, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { Block } from "@entities/Block";
import { Video } from "@entities/Video";

import styles from "./styles.module.scss";
import { ImageForm } from "@entities/ClientComponents/ImageForm";

export const ManageScreen = () => {
  const [imageFormVisible, setImageFormVisible] = useState<boolean>(false);

  const handleImageFormVisible = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    setImageFormVisible(!imageFormVisible);
  };

  return (
    <>
      {imageFormVisible && (
        <ImageForm
          onClick={(e: React.SyntheticEvent) => handleImageFormVisible(e)}
        />
      )}
      <section className={styles.manage_block} id="markets">
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start w-full">
            <MiniText text="From Initial Concept to Market Leader" />
            <div className="w-full flex items-start justify-between">
              <h6 className={styles.manage_block__heading}>
                Redefining Mobile Business Solutions With {""}
                <strong className="text-red">Ferla Bikes</strong>
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
                paragraph="Unlock the potential of mobile commerce with Ferla Bikes' premier range of innovative and eco-friendly commercial bikes and carts. Our specialty lies in enhancing the dynamic event industry with unparalleled solutions."
              />
              <hr className={styles.manage_block__list__separator} />
              <Block
                icon={faMoneyBill}
                margin="mt-8"
                paragraph="Unlock the potential of mobile commerce with Ferla Bikes' premier range of innovative and eco-friendly commercial bikes and carts. Our specialty lies in enhancing the dynamic event industry with unparalleled solutions."
              />
              <hr className={styles.manage_block__list__separator} />
              <Block
                icon={faMoneyBill}
                margin="mt-8"
                paragraph="Unlock the potential of mobile commerce with Ferla Bikes' premier range of innovative and eco-friendly commercial bikes and carts. Our specialty lies in enhancing the dynamic event industry with unparalleled solutions."
              />
            </div>
            <Video
              video_link="https://www.youtube.com/channel/UCZa63PA8Ls17M4v3NebRqLQ"
              onClick={handleImageFormVisible}
            />
          </div>
        </div>
      </section>
    </>
  );
};
