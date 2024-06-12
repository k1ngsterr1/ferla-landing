"use client";
import React from "react";
import Image from "next/image";
import { VideoButton } from "@shared/ui/VideoButton";
import dynamic from "next/dynamic";

import styles from "./styles.module.scss";

interface IVideoProps {
  video_link: string;
  data: any;
}

const HeavyImage = dynamic(
  () => import("../../widgets/HomePage/PC/LazyImage/marketLeader"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

export const Video: React.FC<IVideoProps> = ({ video_link, data }) => {
  return (
    <div className={styles.video}>
      <VideoButton
        onClick={() =>
          window.open(
            "https://www.youtube.com/channel/UCZa63PA8Ls17M4v3NebRqLQ"
          )
        }
      />
      <HeavyImage src={data} />
    </div>
  );
};
