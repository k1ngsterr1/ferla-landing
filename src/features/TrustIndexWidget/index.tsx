"use client";
import React, { useEffect } from "react";
import useScript from "@shared/lib/hooks/useScript";

const TrustIndexWidget = () => {
  const scriptUrl =
    "https://cdn.trustindex.io/loader.js?9fa959e30e81566f4c668f3ff30";
  useScript(scriptUrl);

  useEffect(() => {
    const handleWidgetPlacement = () => {
      const widget = document.querySelector(".ti-widget");
      const targetContainer = document.getElementById(
        "trustindex-widget-container"
      );

      if (widget && targetContainer && !targetContainer.contains(widget)) {
        console.log("Moving widget to the target container.");
        targetContainer.appendChild(widget);
      } else {
        console.log(
          "Widget or target container not found or widget already placed correctly:",
          { widget, targetContainer }
        );
      }
    };

    // Add a slight delay to allow for script and widget initialization
    const timeout = setTimeout(handleWidgetPlacement, 500);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures this effect runs only once after mounting

  return <div id="trustindex-widget-container"></div>; // Container where you want the widget to appear
};

export default TrustIndexWidget;
