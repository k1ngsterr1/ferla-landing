"use client";
import React from "react";
import Image from "next/image";
import { useCartPopup } from "@shared/lib/context/PopupContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

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
              width={100}
              height={100}
              className={styles.popup__image}
            />
            <div className="w-full flex flex-col items-start ml-12">
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
