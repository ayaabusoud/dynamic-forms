import React, { useEffect, useState } from 'react';
import { useForms } from '../../context/FormsContext';
import { updateAnswers } from '../../utlis/FormUtlis';

export default function Text({question}) {
  const { setFormAnswers,formAnswers } = useForms();
  const [textValue,setTextValue] = useState('');

  function handleUpdate(e){
    updateAnswers(setFormAnswers, question.id, e.target.value);
    setTextValue(e.target.value);
  }
  return (
    <input
      type="text"
      aria-label="Text input with dropdown button"
      placeholder="Enter Your Answer"
      value={textValue}
      onChange={(e)=>handleUpdate(e)} 
    />
  );
}
