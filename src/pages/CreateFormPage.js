import React, { useState } from 'react';
import { useForms } from '../context/FormsContext';
import AddButton from '../components/buttons/addButton/AddButton';
import AddQuestion from '../components/addQuestion/AddQuestion';
import SubmitButton from '../components/buttons/submitButton/SubmitButton';

/**
 * Component for creating a dynamic form page.
 * 
 * @returns {JSX.Element} - The rendered create form page.
 */
export default function CreateFormPage() {
    const { formQuestions, setFormQuestions } = useForms();
    const [formName, setFormName] = useState(''); 

    /**
     * Handles the submission of the form.
     */
    function submitForm(){
        let form = {
            name: formName,
            questions: formQuestions
        }
        console.log(form);
    }

    /**
     * Adds a new question to the form.
     */
    function addQuestion() {
        const newQuestion = {
            id: formQuestions.length + 1,
            question: `Question`,
            answerType: '',
        };

        setFormQuestions([...formQuestions, newQuestion]);
    }

    return (
        <div className='p-5'>
            <input
                type="text"
                className="form-control mb-3"
                aria-label="Text input with dropdown button"
                placeholder="Form Name"
                value={formName}
                onChange={(e) => setFormName(e.target.value)} />

            {formQuestions.map((question, index) => (
                <AddQuestion key={index} id={index + 1} question={question} />
            ))}

            <AddButton addFunction={addQuestion} text={"Add New Question"} />

            <SubmitButton submitFunction={submitForm} href="/form"/> 
        </div>
    );
}
