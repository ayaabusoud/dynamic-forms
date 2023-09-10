import React from 'react';
import { useForms } from '../../context/FormsContext';
import { updateAnswers } from '../../utlis/FormUtlis';

export default function Text({question}) {
  const { setFormAnswers } = useForms();

  return (
    <input
      type="text"
      aria-label="Text input with dropdown button"
      placeholder="Enter Your Answer"
      onChange={(e)=>updateAnswers(setFormAnswers, question, e.target.value)} 
    />
  );
}
