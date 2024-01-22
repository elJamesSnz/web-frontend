"use client";

import React, { createContext, useContext, useState } from "react";

const ReloadContext = createContext();

export const ReloadProvider = ({ children }) => {
  const [reload, setReload] = useState(true);

  const triggerReload = () => {
    setReload((prev) => !prev);
  };

  return (
    <ReloadContext.Provider value={{ reload, triggerReload }}>
      {children}
    </ReloadContext.Provider>
  );
};

export const useReload = () => {
  const context = useContext(ReloadContext);
  if (context === undefined) {
    throw new Error("useReload must be used within a ReloadProvider");
  }
  return context;
};
