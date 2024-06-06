import { useState } from "react";

export const useHoverMenu = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const openMenu = () => {
    setIsVisible(true);
  };

  const closeMenu = () => {
    setIsVisible(false);
  };

  return { isVisible, openMenu, closeMenu };
};
