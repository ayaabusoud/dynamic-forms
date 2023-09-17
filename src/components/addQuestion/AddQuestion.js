import React, { useState } from 'react';
import AddOptions from '../addQuestion/AddOptions';
import AnswerTypesDropdown from '../answerTypesDropdown/AnswerTypesDropdown';
import DeleteButton from '../buttons/deleteButton/DeleteButton';
import AddTableDimensions from '../tableDimensions/AddTableDimensions';
import TextTableDimensions from '../tableDimensions/TextTableDimensions';
import MinMaxDate from '../Date/MinMaxDate';
import AddButton from '../buttons/addButton/AddButton';
import { useCreateForms } from '../../context/CreateFormsContext';
import { EMPTY_QUESTION } from '../../utlis/FormUtlis';
import { CHECKBOXES_GRID, DATE, MULTIPLE_CHOICE_GRID, TABLE, TEXT } from '../../utlis/CreateFormUtlis';

export default function AddQuestion({ question, index }) {
    const { formQuestions, setFormQuestions } = useCreateForms();

    const deleteQuestion = () => {
        const updatedQuestions = formQuestions.filter((q, i) => i !== index);

        if (updatedQuestions.length === 0) {
            const empty = { ...EMPTY_QUESTION, answerType: 'Text' };
            setFormQuestions([empty]);
        }else{
            setFormQuestions(updatedQuestions);
        }
    }

    const handleUpdate = (e) => {
        const updatedQuestion = { ...question, question: e.target.value };
        const updatedQuestions = [...formQuestions];
        updatedQuestions[index] = updatedQuestion;

        setFormQuestions(updatedQuestions);
    }

    function addQuestion() {
        const newQuestion = {
            id: formQuestions.length + 1,
            question: '',
            answerType: 'Text',
            required: false
        };

        setFormQuestions([...formQuestions, newQuestion]);
    }

    const toggleRequired = () => {
        const updatedQuestion = { ...question, required: !question.required };
        const updatedQuestions = [...formQuestions];
        updatedQuestions[index] = updatedQuestion;
        setFormQuestions(updatedQuestions);
    }

    return (
        <div className={`mt-4`}>
            <div className="input-group input-row">
                <input
                    type="text"
                    className={`form-control input-field `}
                    aria-label="Text input with dropdown button"
                    placeholder={`Question ${index + 1}`}
                    value={question.question}
                    onChange={(e) => handleUpdate(e)}
                />

                <AnswerTypesDropdown index={index} question={question} />

                <DeleteButton deleteFunction={deleteQuestion} />

                {index === formQuestions.length - 1 ? (
                    <AddButton addFunction={addQuestion} text={"+"} />
                ) : null}

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

            <div className={`form-check form-switch ms-3 my-2`}>
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
        </div>
    );
}
