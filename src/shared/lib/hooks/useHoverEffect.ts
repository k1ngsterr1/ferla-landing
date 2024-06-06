import { useState } from "react";

const useHoverEffect = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  const bind = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };

  return [hovered, bind];
};

export default useHoverEffect;
