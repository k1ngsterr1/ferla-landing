import { useState, useEffect } from "react";

const useIsMobile = (maxWidth = 768) => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia(`(max-width: ${maxWidth}px)`).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);
    const handleResize = () => setIsMobile(mediaQuery.matches);

    mediaQuery.addListener(handleResize);
    return () => mediaQuery.removeListener(handleResize);
  }, [maxWidth]);

  return isMobile;
};

export default useIsMobile;
