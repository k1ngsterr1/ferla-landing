"use client";
import React, { useState } from "react";
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
        <img
          src={thumbnail}
          alt="Video thumbnail"
          style={{ width: "100%", cursor: "pointer" }}
        />
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
