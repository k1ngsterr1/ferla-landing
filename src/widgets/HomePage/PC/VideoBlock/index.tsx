import React from "react";
import { Suspense } from "react";
import Image from "next/image";
import red_logo from "@assets/vectors/logo.svg";

import styles from "./styles.module.scss";
import { VideoFacade } from "@features/VideoFacade";

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
      <Suspense fallback={<p>Loading Video...</p>}>
        <VideoFacade provider="youtube" />
      </Suspense>
    </section>
  );
};
