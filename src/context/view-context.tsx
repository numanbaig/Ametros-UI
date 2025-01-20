"use client";

// ViewContext.tsx
import React, { createContext, useContext, useState } from "react";

type ViewContextType = {
  isGridView: boolean;
  setIsGridView: (value: boolean) => void;
};

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export const ViewProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isGridView, setIsGridView] = useState(true);

  // const toggleView = () => setIsGridView((prev) => !prev);

  return (
    <ViewContext.Provider value={{ isGridView, setIsGridView }}>
      {children}
    </ViewContext.Provider>
  );
};

export const useViewContext = () => {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error("useViewContext must be used within a ViewProvider");
  }
  return context;
};
