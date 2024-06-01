"use client";

import React from "react";
import Image from "next/image";
import { VideoButton } from "@shared/ui/VideoButton";

import market_image from "@assets/webp/pc/market_leader_pc.webp";

import styles from "./styles.module.scss";

interface IVideoProps {
  video_link: string;
}

export const Video: React.FC<IVideoProps> = ({ video_link }) => {
  return (
    <div className={styles.video}>
      <VideoButton onClick={() => console.log("LOL")} />
      <Image
        src={market_image}
        className={styles.video__market}
        alt="Video Market"
      />
    </div>
  );
};