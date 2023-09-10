import React from 'react'
import { useCreateForms } from '../../context/CreateFormsContext';
import { CHECKBOXES, CHECKBOXES_GRID, DROPDOWN, MULTIPLE_CHOICE, MULTIPLE_CHOICE_GRID, TABLE, TEXT, resetQuestionFormat } from '../../utlis/CreateFormUtlis';

export default function AnswerTypesDropdown({ index, question }) {
    const { formQuestions, setFormQuestions } = useCreateForms();

    let AnswersOptions = [TEXT, CHECKBOXES, DROPDOWN, MULTIPLE_CHOICE, TABLE, MULTIPLE_CHOICE_GRID, CHECKBOXES_GRID]

    const handleSelectType = (option) => {
        const updatedFormQuestions = [...formQuestions];
        updatedFormQuestions[index].answerType = option;
        setFormQuestions(updatedFormQuestions);

        resetQuestionFormat(question.id, option, formQuestions, setFormQuestions);
    };


    let listItems = AnswersOptions.map((option, index) =>
        <li key={index} className="dropdown-item" href="#" onClick={() => handleSelectType(option)}>{option}</li>);

    return (
        <div>
            <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                {question.answerType}
            </button>
            <ul className="dropdown-menu dropdown-menu-end">{listItems}</ul>
        </div>
    )
}
