import React, { useContext, useState, useEffect } from "react";

const ScreenWidthContext = React.createContext();

export function useWidth() {
  return useContext(ScreenWidthContext);
}

export function WidthProvider({ children }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);
  return (
    <ScreenWidthContext.Provider value={screenWidth}>
      {children}
    </ScreenWidthContext.Provider>
  );
}
