"use client";

import { useRef } from "react";
import gsap from "gsap";

export const useCustomLabel = () => {
  const labelRef = useRef<HTMLLabelElement>(null);

  const onLabelFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    if (labelRef.current) {
      gsap.to(labelRef.current, {
        bottom: "clamp(15px,7.0092vw,60px)",
        fontSize: "clamp(7px,3.2709599999999996vw,28px)",
        color: "#E33A3A",
        duration: 0.1,
        ease: "power3.out",
      });
    }
  };

  const onLabelBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    if (labelRef.current && e.target.value === "") {
      gsap.to(labelRef.current, {
        bottom: "4px",
        fontSize: "clamp(9px,4.20552vw,36px)",
        color: "#232121",
        duration: 0.1,
        ease: "power3.out",
      });
    }
  };

  return { onLabelFocus, onLabelBlur, labelRef };
};
