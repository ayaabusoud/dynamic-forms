import React, { createContext, useContext, useState } from 'react';

export let FormsContext = createContext();

export const FormsProvider = ({ children }) => {
  let [formQuestions, setFormQuestions] = useState([]);


  return (
    <FormsContext.Provider value={{ formQuestions, setFormQuestions }}>{children}</FormsContext.Provider>
  );
};


export function useForms() {
  let context = useContext(FormsContext);
  if (!context) {
    throw new Error('useForms must be used within a FormsProvider');
  }
  return context;
}
