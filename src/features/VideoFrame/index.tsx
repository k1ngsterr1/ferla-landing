import React from "react";
import styles from "@widgets/HomePage/PC/VideoBlock/styles.module.scss";

export default function VideoFrame() {
  return (
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
  );
}
