"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type NavContextType = {
  showNav: boolean;
  setShowNav: (value: boolean) => void;
};

const NavContext = createContext<NavContextType | undefined>(undefined);

export function NavProvider({ children }: { children: ReactNode }) {
  const [showNav, setShowNav] = useState(true);

  return (
    <NavContext.Provider value={{ showNav, setShowNav }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNav must be used within NavProvider");
  }
  return context;
}
