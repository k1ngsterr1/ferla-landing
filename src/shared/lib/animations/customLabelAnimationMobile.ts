"use client";

import { useRef } from "react";
import gsap from "gsap";

export const useCustomLabel = () => {
  const labelRef = useRef<HTMLLabelElement>(null);

  const onLabelFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    if (labelRef.current) {
      // Move the label up
      gsap.to(labelRef.current, {
        bottom: "32px", // Move up when focused
        fontSize: "clamp(7px,3.2709599999999996vw,28px)", // Increase font size
        color: "#E33A3A", // Change color to red
        duration: 0.3,
        ease: "power3.out",
      });
    }
  };

  const onLabelBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    if (labelRef.current && e.target.value === "") {
      console.log("aaaa");
      // Move the label down
      gsap.to(labelRef.current, {
        bottom: "4px",
        fontSize: "clamp(9px,4.20552vw,36px)",
        color: "#232121",
        duration: 0.3,
        ease: "power3.out",
      });
    }
  };

  return { onLabelFocus, onLabelBlur, labelRef };
};
