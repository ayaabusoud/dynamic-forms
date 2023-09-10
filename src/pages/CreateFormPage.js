import React, { useState } from 'react';
import { useCreateForms } from '../context/CreateFormsContext';
import AddButton from '../components/buttons/addButton/AddButton';
import AddQuestion from '../components/addQuestion/AddQuestion';
import SubmitButton from '../components/buttons/submitButton/SubmitButton';
import DeleteButton from '../components/buttons/deleteButton/DeleteButton';

/**
 * Component for creating a dynamic form page.
 * 
 * @returns {JSX.Element} - The rendered create form page.
 */
export default function CreateFormPage() {
    const { formQuestions, setFormQuestions } = useCreateForms();
    const [formName, setFormName] = useState('');

    /**
     * Handles the submission of the form.
     */
    function submitForm() {
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
            question: '',
            answerType: 'Text',
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
                <AddQuestion
                    key={index}
                    question={question}
                    index={index}
                />
            ))}

            <AddButton addFunction={addQuestion} text={"Add New Question"} />
            <SubmitButton submitFunction={submitForm} href="/form"/> 
            <button onClick={()=> console.log(formQuestions)}>click</button>
        </div>
    );
}
