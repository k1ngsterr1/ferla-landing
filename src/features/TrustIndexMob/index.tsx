"use client";
import React, { useEffect } from "react";
import useScript from "@shared/lib/hooks/useScript";

const TrustIndexMob = () => {
  const scriptUrl =
    "https://cdn.trustindex.io/loader.js?9fa959e30e81566f4c668f3ff30";
  useScript(scriptUrl);

  useEffect(() => {
    const handleWidgetPlacement = () => {
      const widget = document.querySelector(".ti-widget");
      const targetContainer = document.getElementById(
        "trustindex-widget-container-mobile"
      ); // Unique ID for mobile

      if (widget && targetContainer) {
        if (!targetContainer.contains(widget)) {
          console.log("Moving widget to the mobile container.");
          targetContainer.appendChild(widget);
        }
      } else {
        console.log("Widget or mobile target container not found:", {
          widget,
          targetContainer,
        });
      }
    };

    const interval = setInterval(handleWidgetPlacement, 500);
    handleWidgetPlacement();

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="trustindex-widget-container-mobile"
      style={{ minHeight: "50px" }}
    ></div> // Unique ID for mobile
  );
};

export default TrustIndexMob;
