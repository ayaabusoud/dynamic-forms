import React, { useEffect, useState } from "react";
import { useForms } from "../../context/FormsContext";
import { updateAnswers } from "../../utlis/FormUtlis";

export default function CheckBox({ options, question, required }) {
  const { setFormAnswers, formAnswers } = useForms();
  const [checkedOptions, setCheckedOptions] = useState([]);

  useEffect(() => {
    const storedAnswer = formAnswers.find(
      (answer) => answer.questionId === question.id
    );
    if (storedAnswer) {
      setCheckedOptions(storedAnswer.answers || []);
    }
  }, [formAnswers, setFormAnswers]);

  const handleCheckboxChange = (e) => {
    const optionValue = e.target.value;
    const updatedCheckedOptions = [...checkedOptions];

    if (e.target.checked) {
      updatedCheckedOptions.push(optionValue);
    } else {
      const index = updatedCheckedOptions.indexOf(optionValue);
      if (index !== -1) {
        updatedCheckedOptions.splice(index, 1);
      }
    }

    setCheckedOptions(updatedCheckedOptions);
    updateAnswers(setFormAnswers, question.id, updatedCheckedOptions);
  };

  return (
    <>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="checkbox"
            className="me-2"
            value={option}
            checked={checkedOptions.includes(option)}
            onChange={handleCheckboxChange}
          />
          <label>{option}</label>
        </div>
      ))}
      {required && (checkedOptions === null || checkedOptions.length === 0) && (
        <div className="required">This field is required.</div>
      )}
    </>
  );
}
