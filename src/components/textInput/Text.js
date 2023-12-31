import React, { useEffect, useState } from "react";
import { useForms } from "../../context/FormsContext";
import { updateAnswers } from "../../utlis/FormUtlis";

export default function Text({ question, required }) {
  const { setFormAnswers, formAnswers } = useForms();
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    const storedAnswer = formAnswers.find(
      (answer) => answer.questionId === question.id
    );
    if (storedAnswer) {
      setTextValue(storedAnswer.answers);
    }
  }, [formAnswers, setFormAnswers]);

  function handleUpdate(e) {
    updateAnswers(setFormAnswers, question.id, e.target.value);
  }

  return (
    <>
      <input
        type="text"
        aria-label="Text input with dropdown button"
        placeholder="Enter Your Answer"
        value={textValue}
        onChange={(e) => handleUpdate(e)}
      />
      {required && (textValue === null || textValue === "") && (
        <div className="required">This field is required.</div>
      )}
    </>
  );
}
