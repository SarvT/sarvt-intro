import React, { createContext, useState, ReactNode, FC } from "react";

interface MouseContextType {
  cursorType: string;
  cursorChangeHandler: (cursorType: string) => void;
}

export const MouseContext = createContext<MouseContextType>({
  cursorType: "",
  cursorChangeHandler: () => {},
});

interface MouseContextProviderProps {
  children: ReactNode;
}

const MouseContextProvider: FC<MouseContextProviderProps> = ({ children }) => {
  const [cursorType, setCursorType] = useState<string>("");

  const cursorChangeHandler = (cursorType: string) => {
    setCursorType(cursorType);
  };

  return (
    <MouseContext.Provider
      value={{
        cursorType,
        cursorChangeHandler,
      }}
    >
      {children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;
