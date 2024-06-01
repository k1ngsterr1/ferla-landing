import React, { useEffect, RefObject } from "react";
import gsap from "gsap";

export function useArrowRightAnimation(arrowRef: RefObject<SVGPathElement>) {
  useEffect(() => {
    if (arrowRef.current) {
      gsap.fromTo(
        arrowRef.current,
        { strokeDashoffset: 400 },
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: "none",
        }
      );
    }
  }, [arrowRef]);
}
