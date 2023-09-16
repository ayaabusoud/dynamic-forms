import React from 'react';
import AddOptions from '../addQuestion/AddOptions';
import { useCreateForms } from '../../context/CreateFormsContext';
import AnswerTypesDropdown from '../answerTypesDropdown/AnswerTypesDropdown';
import DeleteButton from '../buttons/deleteButton/DeleteButton';
import AddTableDimensions from '../tableDimensions/AddTableDimensions';
import { CHECKBOXES_GRID, DATE, MULTIPLE_CHOICE_GRID, TABLE, TEXT } from '../../utlis/CreateFormUtlis';
import './AddOptions.css';
import TextTableDimensions from '../tableDimensions/TextTableDimensions';
import MinMaxDate from '../Date/MinMaxDate';
import { EMPTY_QUESTION } from '../../utlis/FormUtlis';

export default function AddQuestion({ question, index }) {
    let { id } = question;
    const { formQuestions, setFormQuestions } = useCreateForms();

    const deleteQuestion = () => {
        const updatedQuestions = formQuestions.filter((q, i) => i !== index);

        if (updatedQuestions.length === 0) { 
            updatedQuestions.push(EMPTY_QUESTION);
          }

        setFormQuestions(updatedQuestions);
    }

    const handleUpdate = (e) => {
        const updatedQuestion = { ...question, question: e.target.value };
        const updatedQuestions = [...formQuestions];
        updatedQuestions[index] = updatedQuestion;
        setFormQuestions(updatedQuestions);
    }

    const toggleRequired = () => {
        const updatedQuestion = { ...question, required: !question.required };
        const updatedQuestions = [...formQuestions];
        updatedQuestions[index] = updatedQuestion;
        setFormQuestions(updatedQuestions);
    }

    return (
        <>
            <div className="input-group mt-3 input-row">
                <input
                    type="text"
                    className="form-control input-field"
                    aria-label="Text input with dropdown button"
                    placeholder={`Question ${index + 1}`}
                    value={question.question}
                    onChange={(e) => handleUpdate(e)}
                />
                
                    <div className='delete-button-container me-4'>
                        <DeleteButton deleteFunction={deleteQuestion} />
                    </div>

                <AnswerTypesDropdown index={index} question={question} />
                </div>

                <div className="form-check form-switch ms-2 mb-2">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id={`requiredSwitch-${index}`}
                        checked={question.required}
                        onChange={toggleRequired}
                    />
                    <label className="form-check-label" htmlFor={`requiredSwitch-${index}`}>
                        Required
                    </label>
                </div>

            {question.answerType === TEXT ? null :
                question.answerType === MULTIPLE_CHOICE_GRID || question.answerType === CHECKBOXES_GRID ? (
                    <AddTableDimensions index={index} question={question} />
                ) : question.answerType === TABLE ? (
                    <TextTableDimensions index={index} question={question} />
                ) : question.answerType === DATE ? (
                    <MinMaxDate index={index} />
                ) : (
                    <AddOptions index={index} />
                )}
        </>
    );
}
