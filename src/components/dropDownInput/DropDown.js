import React, { useEffect } from 'react';
import { useForms } from '../../context/FormsContext';
import { updateAnswers } from '../../utlis/FormUtlis';

export default function DropDown({ options, question }) {
  const { setFormAnswers, formAnswers } = useForms();

  useEffect(() => {
    const storedAnswer = formAnswers.find(answer => answer.questionId === question.id);
    if (storedAnswer) {
      const selectedOption = storedAnswer.answers;
      if (options.includes(selectedOption)) {
        updateAnswers(setFormAnswers, question.id, selectedOption);
      }
    }
  }, []);

  const listItems = options.map((option, index) => (
    <option key={index} value={option}>
      {option}
    </option>
  ));

  return (
    <select
      value={formAnswers.find(answer => answer.questionId === question.id)?.answers || ''}
      onChange={(e) => updateAnswers(setFormAnswers, question.id, e.target.value)}>
      {listItems}
    </select>
  );
}
