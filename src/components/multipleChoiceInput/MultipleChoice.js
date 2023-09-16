import React from 'react';
import { useForms } from '../../context/FormsContext';
import { updateAnswers } from '../../utlis/FormUtlis';

export default function MultipleChoice({ options, question }) {
  const { setFormAnswers } = useForms();

  return (
    options.map((option, index) => (
      <div key={index}>
        <input
          type="radio"
          name={question.id}
          className='me-2'
          value={option}
          onChange={() => updateAnswers(setFormAnswers, question.id, option)}
        />
        <label>{option}</label>
      </div>
    ))
  );
}
