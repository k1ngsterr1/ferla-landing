import React from "react";
import Image from "next/image";
import red_logo from "@assets/vectors/logo.svg";
import video_cover from "@assets/webp/pc/video_cover_pc.webp";

import styles from "./styles.module.scss";

export const VideoBlock = () => {
  return (
    <section className={styles.video_block}>
      <Image
        src={red_logo}
        className={styles.video_block__logo}
        alt="Ferla Bikes Logo"
      />
      <div className={styles.video_block__cover}>
        <iframe
          src="https://www.youtube.com/embed/N-yJypPvBN0?si=vSnMUT_Gcdu3Nmuo"
          title="YouTube video player"
          frameborder="0"
          className={styles.video_block__cover}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};
