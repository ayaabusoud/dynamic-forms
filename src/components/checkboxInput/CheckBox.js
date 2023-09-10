import React from 'react';
import { useForms } from '../../context/FormsContext';
import { updateAnswers } from '../../utlis/FormUtlis';

export default function CheckBox({ options, question }) {
  const { setFormAnswers } = useForms();

  const handleCheckboxChange = (e) => {
    const selectedOptions = Array.from(
      e.target.parentNode.parentNode.querySelectorAll('input[type="checkbox"]:checked')
    ).map((el) => el.value);


    updateAnswers(setFormAnswers, question, selectedOptions);
  };

  return (
    options.map((option, index) => (
      <div key={index}>
        <input
          type="checkbox"
          className='me-2'
          value={option}
          onChange={handleCheckboxChange}
        />
        <label>{option}</label>
      </div>
    ))
  );
}
