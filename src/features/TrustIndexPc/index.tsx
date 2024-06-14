// "use client";

// import React, { useEffect } from "react";
// import useScript from "@shared/lib/hooks/useScript";

// const TrustIndexPc = () => {
//   const scriptUrl =
//     "https://cdn.trustindex.io/loader.js?9fa959e30e81566f4c668f3ff30";
//   useScript(scriptUrl);

//   console.log("Trust Index is here!");

//   // Effect to relocate the TrustIndex widget after it loads
//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     const widget = document.querySelector(".ti-widget"); // TrustIndex should provide the correct class or ID
//   //     const targetContainer = document.getElementById(
//   //       "trustindex-widget-container"
//   //     );

//   //     if (widget && targetContainer) {
//   //       console.log("widget:", widget, "target container:", targetContainer);
//   //       targetContainer.appendChild(widget); // Move the widget to the specified container
//   //       console.log("children:", targetContainer.children);
//   //       clearInterval(interval);
//   //     }
//   //   }, 1000);

//   //   return () => clearInterval(interval);
//   // }, []);

//   useEffect(() => {
//     const handleWidgetPlacement = () => {
//       const widget = document.querySelector(".ti-widget");
//       const targetContainer = document.getElementById(
//         "trustindex-widget-container"
//       );

//       if (widget && targetContainer) {
//         console.log("Checking widget placement...");

//         // Check if the widget is already a child of the target container
//         if (targetContainer.contains(widget)) {
//           console.log("Widget is already in the correct container.");
//           return;
//         }

//         console.log("Moving widget to the target container.");
//         // Move the widget only if it's not already there
//         targetContainer.appendChild(widget);
//       } else {
//         console.log("Widget or target container not found:", {
//           widget,
//           targetContainer,
//         });
//       }
//     };

//     const interval = setInterval(handleWidgetPlacement, 500);
//     handleWidgetPlacement(); // Also execute immediately

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div id="trustindex-widget-container"></div> // Container where you want the widget to appear
//   );
// };

// export default TrustIndexPc;
