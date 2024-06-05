"use client";
import React from "react";
import Image from "next/image";
import { useCartPopup } from "@shared/lib/context/PopupContext";

import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export const Popup = () => {
  const { isCartPopupVisible, toggleCartPopup, cartData } = useCartPopup();

  if (!isCartPopupVisible) return null;

  return (
    <>
      {cartData ? (
        <div className={styles.layout} onClick={() => toggleCartPopup()}>
          <div className={styles.popup}>
            <Image
              src={cartData?.image}
              alt={cartData?.title}
              className={styles.popup__image}
            />
            <div className="flex flex-col items-start ml-12">
              <div className="w-full flex items-center justify-between">
                <span className={styles.popup__title}>{cartData.title}</span>
                <FontAwesomeIcon
                  icon={faClose}
                  className="text-red text-4xl hoverable"
                />
              </div>
              <p className={styles.popup__paragraph}>{cartData?.paragraph}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
