import React from 'react';
import AddOptions from './AddOptions';
import { useForms } from '../../context/FormsContext';
import AnswerTypesDropdown from '../answerTypesDropdown/AnswerTypesDropdown';
import DeleteButton from '../buttons/deleteButton/DeleteButton';
import AddTableDimensions from '../tableDimensions/AddTableDimensions';
import { CHECKBOXES_GRID, MULTIPLE_CHOICE_GRID, TABLE, TEXT } from '../../utlis/CreateFormUtlis';
import './AddOptions.css'
import TextTableDimensions from '../tableDimensions/TextTableDimensions';

export default function AddQuestion({ question, index }) {
    let { id } = question;
    const { formQuestions, setFormQuestions } = useForms();


    const deleteQuestion = (index) => {
    }

    const handleUpdate = (e, index) => {
        const list = [...formQuestions]
        list[index].question = e.target.value
        setFormQuestions(list)

    }

    return (
        <>
            <div className="input-group my-3 input-row">
                <input
                    type="text"
                    className="form-control input-field"
                    aria-label="Text input with dropdown button"
                    placeholder={`Question ${index+1}`}
                    value={question.question}
                    onChange={(e) => handleUpdate(e, index)}
                />
                {formQuestions.length <= 1 ? null : (
                    <div className='delete-button-container me-4'>
                        <DeleteButton deleteFunction={() => deleteQuestion(index)} />
                    </div>
                )}

                <AnswerTypesDropdown index={index} question={question} />


            </div>
            {question.answerType === TEXT ? null :
                question.answerType === MULTIPLE_CHOICE_GRID || question.answerType === CHECKBOXES_GRID  ? (
                    <AddTableDimensions index={index} questionId={id} />
                ) : question.answerType === TABLE ?(
                    <TextTableDimensions index={index} questionId={id} />
                ) : (
                    <AddOptions index={index} />
                )}

        </>
    );
}
