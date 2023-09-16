import React, { createContext, useContext, useEffect, useState } from 'react';

export let CreateFormsContext = createContext();

export const CreateFormsProvider = ({ children }) => {
  let [formQuestions, setFormQuestions] = useState([]);


  return (
    <CreateFormsContext.Provider value={{ formQuestions, setFormQuestions }}>{children}</CreateFormsContext.Provider>
  );
};


export function useCreateForms() {
  let context = useContext(CreateFormsContext);
  if (!context) {
    throw new Error('useCreateForms must be used within a CreateFormsProvider');
  }
  return context;
}
