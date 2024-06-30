"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import styles from "@widgets/HomePage/PC/VideoBlock/styles.module.scss";

interface IVideoFrame {
  src: string;
  thumbnail: string;
}

const VideoFrame: React.FC<IVideoFrame> = ({ src, thumbnail }) => {
  const [loaded, setLoaded] = useState(false);

  const loadVideo = () => {
    setLoaded(true);
  };

  return (
    <div className={styles.video_block__cover} onClick={loadVideo}>
      {!loaded ? (
        <div className="relative">
          <FontAwesomeIcon
            className={styles.video_block__cover__icon}
            icon={faPlay}
          />
          <img
            src={thumbnail}
            className={styles.video_block__cover__image}
            alt="Video thumbnail"
            style={{ width: "100%", cursor: "pointer" }}
          />
        </div>
      ) : (
        <iframe
          src={src}
          title="Video player"
          frameBorder="0"
          className={styles.video_block__cover}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default VideoFrame;
