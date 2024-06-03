"use client";
import React from "react";
import useScript from "@shared/lib/hooks/useScript";

const TrustIndexWidget = () => {
  const scriptUrl =
    "https://cdn.trustindex.io/loader.js?eba5607293f1059b7c7618079df";

  useScript(scriptUrl);

  return <div id="trustindex-widget-container"></div>;
};

export default TrustIndexWidget;
