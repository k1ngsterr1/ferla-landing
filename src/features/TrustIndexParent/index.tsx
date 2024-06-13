"use client";
import React from "react";
import TrustIndexWidget from "@features/TrustIndexWidget";
import TrustIndexMob from "@features/TrustIndexMob";

import useIsMobile from "@shared/lib/hooks/useIsMobile";

const TrustIndexParent = () => {
  const isMobile = useIsMobile();

  return <div>{isMobile ? <TrustIndexMob /> : <TrustIndexWidget />}</div>;
};

export default TrustIndexParent;
