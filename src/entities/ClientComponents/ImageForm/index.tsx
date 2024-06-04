"use form";
import React from "react";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

export const ImageForm = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.image_container}>
        <span className={styles.image_container__heading}>
          Change Your Image
        </span>
        <FontAwesomeIcon
          icon={faImage}
          className={styles.image_container__icon}
        />
      </div>
    </div>
  );
};
