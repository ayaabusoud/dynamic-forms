import React from 'react';
import CheckBox from '../components/checkboxInput/CheckBox';
import DropDown from '../components/dropDownInput/DropDown';
import Text from '../components/textInput/Text';
import MultipleChoice from '../components/multipleChoiceInput/MultipleChoice';
import MultipleChoiceGrid from '../components/multipleChoiceGridInput/MultipleChoiceGrid';
import form from '../dataUtlis/formData.json';
import CheckboxesGrid from '../components/checkboxesGrid/CheckboxesGrid';
import Table from '../components/table/Table';
import { CHECKBOXES, CHECKBOXES_GRID, DROPDOWN, MULTIPLE_CHOICE, MULTIPLE_CHOICE_GRID, TABLE, TEXT } from '../utlis/CreateFormUtlis';

/**
 * Component for rendering a form page with dynamic question components.
 *
 * @returns {JSX.Element} - The rendered form page.
 */
export default function FormPage() {
    const { questions, name } = form;

    return (
        <div className='p-5'>
            <h1 className='mt-3 me-3'>{name}</h1>

            {questions.map((question, index) => (
                <div key={index}>
                    <label className='mt-3 me-3'>{`Q${question.id}: ${question.question}`}</label>
                    {renderQuestionComponent(question)}
                </div>
            ))}
        </div>
    );

    /**
     * Renders the appropriate question component based on the answerType.
     *
     * @param {Object} question - The question object containing answerType.
     * @returns {JSX.Element|null} - The rendered question component or null if answerType is unsupported.
     */
    function renderQuestionComponent(question) {
        const { answerType, options, rows, columns ,rowsNumber} = question;

        switch (answerType) {
            case CHECKBOXES:
                return <CheckBox options={options} />;
            case DROPDOWN:
                return <DropDown options={options} />;
            case TEXT:
                return <Text />;
            case MULTIPLE_CHOICE:
                return <MultipleChoice options={options} questionNumber={question.id} />;
            case MULTIPLE_CHOICE_GRID:
                return <MultipleChoiceGrid rows={rows} columns={columns} />;
            case CHECKBOXES_GRID:
                return <CheckboxesGrid rows={rows} columns={columns} />;
            case TABLE:
                return <Table rowsNumber={rowsNumber} columns={columns} />;
            default:
                return null;
        }
    }
}
