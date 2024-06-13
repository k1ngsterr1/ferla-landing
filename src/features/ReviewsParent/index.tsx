// "use client";
// import React, { useEffect } from "react";

// interface IReviews {
//   data: any;
// }

// export const ReviewsContainer: React.FC<IReviews> = ({ data }) => {
//   useEffect(() => {
//     const isMobile = window.innerWidth <= 768;

//     // Define the container element based on the device type
//     const containerId = isMobile
//       ? "reviews-mobile-container"
//       : "reviews-container";
//     const otherContainerId = isMobile
//       ? "reviews-container"
//       : "reviews-mobile-container";

//     // Create or fetch the elements
//     let container = document.getElementById(containerId);
//     let otherContainer = document.getElementById(otherContainerId);

//     // Remove content from the other container if it exists
//     while (otherContainer && otherContainer.firstChild) {
//       otherContainer.removeChild(otherContainer.firstChild);
//     }

//     // If the desired container is empty, create and append the elements
//     if (container && !container.firstChild) {
//       const reviewsElement = document.createElement("div");
//       reviewsElement.textContent = isMobile
//         ? "Mobile Reviews"
//         : "Desktop Reviews"; // Customize as needed
//       container.appendChild(reviewsElement);
//     }

//     // Add a resize listener to handle resizing
//     const handleResize = () => {
//       const isNowMobile = window.innerWidth <= 768;
//       if (isNowMobile !== isMobile) {
//         window.location.reload(); // Reload the page to reset the state on resize
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//       <div id="reviews-container"></div>
//       <div id="reviews-mobile-container"></div>
//     </>
//   );
// };

// export default ReviewsContainer;
