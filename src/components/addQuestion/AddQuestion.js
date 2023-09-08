import React, { useState, useEffect } from 'react';
import AddOptions from './AddOptions';
import { useForms } from '../../context/FormsContext';
import AnswerTypesDropdown from '../answerTypesDropdown/AnswerTypesDropdown';
import DeleteButton from '../buttons/deleteButton/DeleteButton';
import AddTableDimensions from '../tableDimensions/AddTableDimensions';
import { CHECKBOXES_GRID, MULTIPLE_CHOICE_GRID, TABLE, TEXT } from '../../utlis/FormUtlis';
import './AddOptions.css'

/**
 * Component for adding and managing a question.
 *
 * @param {Object} question - The question object containing question details.
 * @param {number} id - The unique ID of the question.
 * @returns {JSX.Element} - The rendered question component.
 */
export default function AddQuestion({ question }) {
    let { id } = question;
    const [selectedAnswerType, setAnswerType] = useState('Text');
    const [questionValue, setQuestionValue] = useState('');
    const { formQuestions, setFormQuestions } = useForms();

    // Updates the question details when selectedAnswerType or questionValue changes.
    useEffect(() => {
        updateQuestion();
    }, [selectedAnswerType, questionValue]);

    // Updates the question details in formQuestions.
    function updateQuestion() {
        const updatedArrayOfQuestions = formQuestions.map((q) => {
            if (q.id === id) {
                return { ...q, answerType: selectedAnswerType, question: questionValue };
            }
            return q;
        });

        setFormQuestions(updatedArrayOfQuestions);
    }

    function deleteQuestion(idToDelete) {
        const updatedArrayOfQuestions = formQuestions.filter((q) => q.id !== idToDelete);
        setFormQuestions(updatedArrayOfQuestions);
        console.log(formQuestions)  
    }

    return (
        <>
            <div className="input-group my-3 input-row">
                <input
                    type="text"
                    className="form-control input-field"
                    aria-label="Text input with dropdown button"
                    placeholder={`Question ${id}`}
                    value={questionValue}
                    onChange={(e) => setQuestionValue(e.target.value)}
                />
                {formQuestions.length <=1?null :(
                <div className='delete-button-container me-4'>
                    <DeleteButton deleteFunction={() => deleteQuestion(id)} />
                </div>
                )}

                <AnswerTypesDropdown selectedAnswerType={selectedAnswerType} questionId={id} setAnswerType={setAnswerType} />
            </div>

            {selectedAnswerType === TEXT ? null :
                selectedAnswerType === MULTIPLE_CHOICE_GRID || selectedAnswerType === CHECKBOXES_GRID || selectedAnswerType === TABLE ? (
                    <AddTableDimensions questionId={id} />
                ) : (
                    <AddOptions questionId={id} />
                )}
        </>
    );
}
