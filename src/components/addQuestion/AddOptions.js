import React, { useState } from 'react';
import { useForms } from '../../context/FormsContext';
import AddButton from '../buttons/addButton/AddButton';
import DeleteButton from '../buttons/deleteButton/DeleteButton';
import { resetProperties } from '../../utlis/FormUtlis';

/**
 * Component for adding and managing options for a question.
 *
 * @param {number} questionId - The ID of the associated question.
 * @returns {JSX.Element} - The rendered options component.
 */
export default function AddOptions({ questionId }) {
  const [options, setOptions] = useState(["option 1"]);
  const { formQuestions, setFormQuestions } = useForms();
   let propertiesToDelete = ['rows', 'columns'];

  /**
   * Adds a new option to the options array.
   *
   * @param {Event} e - The event object.
   */
  function addOption(e) {
    setOptions([...options, `option ${options.length + 1}`]);
    e.preventDefault();
  }

  /**
   * Updates question options when an option's value changes.
   *
   * @param {number} index - The index of the option to update.
   * @param {string} newValue - The new value of the new option.
   */
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


  function deleteOption(index) {
    //delete option of this index where question id === questionId in formQuestions
    //when there is only one option hide delete
  }

  return (
    <>
      {options.map((option, index) => (
        <div key={index}>
          <div className='row'>
            <div className='col-11'>
              <input
                placeholder={option}
                className='form-control my-2 ms-3'
                onChange={(e) => updateQuestionOptions(index, e.target.value)}
              />
            </div>

            <div className='col-1'>
              <DeleteButton deleteFunction={() => deleteOption(index)} />
            </div>
          </div>
        </div>
      ))}

      <AddButton addFunction={addOption} text={"Add Option"} />
    </>
  );
}