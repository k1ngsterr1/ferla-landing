import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

interface IVideoButton {
  onClick: () => void;
}

export const VideoButton: React.FC<IVideoButton> = ({ onClick }) => {
  return (
    <button
      className={`${styles.button} hoverable`}
      onClick={onClick}
      name="Video Button"
    >
      <FontAwesomeIcon icon={faPlay} className={styles.button__icon} />
    </button>
  );
};
