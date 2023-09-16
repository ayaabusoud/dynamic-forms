import React, { useState } from 'react';
import { useForms } from '../../context/FormsContext';
import { updateAnswers } from '../../utlis/FormUtlis';

export default function DateInput({ question }) {
  const { setFormAnswers } = useForms();
  const [dateValue, setDateValue] = useState('');

  const handleDateChange = (event) => {
    const newDateValue = event.target.value;
    setDateValue(newDateValue);
    updateAnswers(setFormAnswers, question.id, newDateValue);
  };


  return (
    <input
      type="date"
      name="date"
      min={question.min}
      max={question.max}
      value={dateValue}
      onChange={handleDateChange}
    />
  );
}
