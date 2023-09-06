import React from 'react';
import CheckBox from '../components/checkboxInput/CheckBox';
import DropDown from '../components/dropDownInput/DropDown';
import Text from '../components/textInput/Text';
import MultipleChoice from '../components/multipleChoiceInput/MultipleChoice';
import MultipleChoiceGrid from '../components/multipleChoiceGridInput/MultipleChoiceGrid';
import form from '../dataUtlis/formData.json';
import CheckboxesGrid from '../components/checkboxesGrid/CheckboxesGrid';
import Table from '../components/table/Table';

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
        const { answerType, options, rows, columns } = question;

        switch (answerType) {
            case "Checkboxes":
                return <CheckBox options={options} />;
            case "Dropdown":
                return <DropDown options={options} />;
            case "Text":
                return <Text />;
            case "Multiple Choice":
                return <MultipleChoice options={options} questionNumber={question.id} />;
            case "Multiple Choice Grid":
                return <MultipleChoiceGrid options={options} questionNumber={question.id} />;
            case "Checkboxes Grid":
                return <CheckboxesGrid rows={rows} columns={columns} />;
            case "Table":
                return <Table rows={rows} columns={columns} />;
            default:
                return null;
        }
    }
}
