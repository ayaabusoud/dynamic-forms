import React, { createContext, useContext, useState } from 'react';

export let FormsContext = createContext();

export const FormsProvider = ({ children }) => {
  let [formAnswers, setFormAnswers] = useState([]);


  return (
    <FormsContext.Provider value={{ formAnswers, setFormAnswers }}>{children}</FormsContext.Provider>
  );
};


export function useForms() {
  let context = useContext(FormsContext);
  if (!context) {
    throw new Error('useForms must be used within a FormsProvider');
  }
  return context;
}
