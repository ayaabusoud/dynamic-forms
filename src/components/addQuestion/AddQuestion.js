import React from 'react';
import { useForms } from '../../context/FormsContext';
import { CHECKBOXES, CHECKBOXES_GRID, DROPDOWN, MULTIPLE_CHOICE, MULTIPLE_CHOICE_GRID, TABLE, TEXT, resetProperties } from '../../utlis/FormUtlis';

/**
 * Component for rendering the dropdown menu of answer types.
 *
 * @param {string} selectedAnswerType - The currently selected answer type.
 * @param {number} questionId - The ID of the associated question.
 * @param {function} setAnswerType - A function to set the selected answer type.
 * @returns {JSX.Element} - The rendered answer type dropdown component.
 */
export default function AnswerTypesDropdown({ selectedAnswerType, questionId, setAnswerType }) {
    const { formQuestions, setFormQuestions } = useForms();

    let AnswersOptions = [TEXT, CHECKBOXES, DROPDOWN, MULTIPLE_CHOICE, TABLE, MULTIPLE_CHOICE_GRID, CHECKBOXES_GRID]

    /**
     * Handles the selection of an answer type and performs actions accordingly.
     *
     * @param {string} option - The selected answer type.
     */
    const handleSelectType = (option) => {
        setAnswerType(option);

        if (option === TEXT) {
            resetTextQuestion();
        }
    };

    function resetTextQuestion() {
        let propertiesToDelete = ['options', 'rows', 'columns'];

        const updatedArrayOfQuestions = formQuestions.map((question) => {
            if (question.id === questionId) {
                return resetProperties(question, propertiesToDelete);
            }
            return question;
        });

        setFormQuestions(updatedArrayOfQuestions);
    }

    let listItems = AnswersOptions.map((option, index) =>
        <li key={index} className="dropdown-item" href="#" onClick={() => handleSelectType(option, questionId)}>{option}</li>);

    return (
        <div>
            <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                {selectedAnswerType}
            </button>
            <ul className="dropdown-menu dropdown-menu-end">{listItems}</ul>
        </div>
    )
}
