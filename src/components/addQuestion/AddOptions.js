import React, { useState } from "react";
import { useForms } from "../../context/FormsContext";
import AddButton from "../buttons/addButton/AddButton";
import DeleteButton from "../buttons/deleteButton/DeleteButton";
import { resetProperties } from "../../utlis/FormUtlis";
import "./AddOptions.css";
/**
 * Component for adding and managing options for a question.
 *
 * @param {number} questionId - The ID of the associated question.
 * @returns {JSX.Element} - The rendered options component.
 */
export default function AddOptions({ questionId }) {
  const [options, setOptions] = useState(["option 1"]);
  const { formQuestions, setFormQuestions } = useForms();
  let propertiesToDelete = ["rows", "columns"];

  function addOption(e) {
    setOptions([...options, `option ${options.length + 1}`]);
    e.preventDefault();
  }

  function updateQuestionOptions(index, newValue) {
    const updatedArrayOfQuestions = formQuestions.map((question) => {
      if (question.id === questionId) {
        question = resetProperties(question, propertiesToDelete);

        if (!question.options || !Array.isArray(question.options)) {
          question.options = [];
        }
        const updatedOptions = [...question.options];
        updatedOptions[index] = newValue;
        return { ...question, options: updatedOptions };
      }
      return question;
    });

    setFormQuestions(updatedArrayOfQuestions);
  }

  function deleteOption(indexToDelete) {
    if (options.length === 1) {
      return;
    }

    const updatedOptions = options.filter(
      (_, index) => index !== indexToDelete
    );
    setOptions(updatedOptions);

    const updatedArrayOfQuestions = formQuestions.map((question) => {
      if (question.id === questionId) {
        question = resetProperties(question, propertiesToDelete);
        return { ...question, options: updatedOptions };
      }
      return question;
    });

    setFormQuestions(updatedArrayOfQuestions);
  }

  return (
    <>
      {options.map((option, index) => (
        <div key={index} className="input-row">
          <input
            placeholder={option}
            className="form-control my-2 ms-3 input-field"
            onChange={(e) => updateQuestionOptions(index, e.target.value)}
          />
          {options.length <= 1 ? null : (
            <div className="delete-button-container me-4">
              <DeleteButton deleteFunction={() => deleteOption(index)} />
            </div>
          )}
        </div>
      ))}

      <AddButton addFunction={addOption} text="Add Option" />
    </>
  );
}
