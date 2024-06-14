import React from "react";

interface IVideoFacade {
  provider: string;
}

const LazyVideo = React.lazy(() => import("@features/VideoFrame/index"));

export const VideoFacade: React.FC<IVideoFacade> = ({ provider }) => {
  let srcUrl = "";
  let thumbnailUrl = "";

  switch (provider) {
    case "youtube":
      srcUrl = `https://www.youtube.com/embed/N-yJypPvBN0?si=IaMCuN7Z0G30GqG3`;
      thumbnailUrl = `https://i3.ytimg.com/vi/N-yJypPvBN0/maxresdefault.jpg`;
      break;

    default:
      console.warn("Unsupported video provider");
  }

  return <LazyVideo src={srcUrl} thumbnail={thumbnailUrl} />;
};
