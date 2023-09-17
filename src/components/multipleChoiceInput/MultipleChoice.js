import React, { useEffect, useState } from 'react';
import { useForms } from '../../context/FormsContext';
import { updateAnswers } from '../../utlis/FormUtlis';

export default function MultipleChoice({ options, question }) {
  const { setFormAnswers,formAnswers } = useForms();
  const [checkedOption, setCheckedOption] = useState([]);

  useEffect(() => {
    const storedAnswer = formAnswers.find(answer => answer.questionId === question.id);
    if (storedAnswer) {
      setCheckedOption(storedAnswer.answers || []);
    } 
  }, [formAnswers,setFormAnswers]);

  return (
    options.map((option, index) => (
      <div key={index}>
        <input
          checked={checkedOption.includes(option)} 
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
