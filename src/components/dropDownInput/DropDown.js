import React from 'react';
import { useForms } from '../../context/FormsContext';
import { updateAnswers } from '../../utlis/FormUtlis';

export default function DropDown({ options, question }) {
  const { setFormAnswers } = useForms();

  const listItems = options.map((option, index) => (
    <option key={index} value={option}>
      {option}
    </option>
  ));

  return (
    <select onChange={(e)=> updateAnswers(setFormAnswers, question, e.target.value)}> 
      {listItems}
    </select>
  );
}
