"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

interface AppContextType {
  // Popup for cart
  isCartPopupVisible: boolean;
  toggleCartPopup: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useCartPopup = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("usePopup must be used within a AppProvider");
  }
  return context;
};

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isCartPopupVisible, setIsCartPopupVisible] = useState<boolean>(false);

  const toggleCartPopup = useCallback(() => {
    setIsCartPopupVisible((prev) => !prev);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isCartPopupVisible,
        toggleCartPopup,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
