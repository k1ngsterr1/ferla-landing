"use client";

export const useHandleScroll = () => {
  const handleScroll = (targetId: string) => {
    if (targetId) {
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return { handleScroll };
};
