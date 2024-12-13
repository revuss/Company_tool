/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, ReactNode } from "react";

interface NavContextType {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <NavContext.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = (): NavContextType => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNavContext must be used within a NavProvider");
  }
  return context;
};
