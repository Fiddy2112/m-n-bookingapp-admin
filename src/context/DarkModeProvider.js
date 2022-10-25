import React, { createContext, useContext, useReducer } from "react";
import DarkModeReducer from "./DarkModeReducer";

const initialState = {
  darkMode: false,
};

export const DarkModeContext = createContext(initialState);

export const DarkModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, initialState);
  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkModeProvider = () => useContext(DarkModeContext);
