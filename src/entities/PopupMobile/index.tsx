"use client";
import React from "react";
import Image from "next/image";
import { useCartPopup } from "@shared/lib/context/PopupContext";

import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export const PopupMobile = () => {
  const { isCartPopupVisible, toggleCartPopup, cartData } = useCartPopup();

  if (!isCartPopupVisible) return null;

  return (
    <>
      {cartData ? (
        <div className={styles.layout} onClick={() => toggleCartPopup()}>
          <div className={styles.popup}>
            <div className="flex flex-col items-center justify-center w-[100%]">
              <div className={`${styles.popup__x} flex items-end justify-end`}>
                <FontAwesomeIcon
                  icon={faClose}
                  className="text-red text-4xl hoverable"
                />
              </div>
              <span className={styles.popup__title}>{cartData.name}</span>
              <Image
                src={cartData?.img_url}
                alt={cartData?.name}
                className={styles.popup__image}
                width={300}
                height={300}
              />
              <p className={styles.popup__paragraph}>{cartData?.description}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
