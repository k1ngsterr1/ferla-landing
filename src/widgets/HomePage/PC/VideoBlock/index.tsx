import React from "react";
import Image from "next/image";
import red_logo from "@assets/vectors/logo.svg";

import styles from "./styles.module.scss";

interface IVideoID {
  id: string;
}

export const VideoBlock: React.FC<IVideoID> = ({ id }) => {
  return (
    <section className={styles.video_block} id={id}>
      <Image
        src={red_logo}
        className={styles.video_block__logo}
        alt="Ferla Bikes Logo"
      />
      <div className={styles.video_block__cover}>
        <iframe
          src="https://www.youtube.com/embed/N-yJypPvBN0?si=vSnMUT_Gcdu3Nmuo"
          title="YouTube video player"
          frameBorder="0"
          className={styles.video_block__cover}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
};
