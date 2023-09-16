import React, { useState, useEffect } from 'react';
import { useCreateForms } from '../context/CreateFormsContext';
import AddButton from '../components/buttons/addButton/AddButton';
import AddQuestion from '../components/addQuestion/AddQuestion';
import SubmitButton from '../components/buttons/submitButton/SubmitButton';
import { getForm, storeForm } from '../dataUtlis/storageUtlis';
import { EMPTY_FORM } from '../utlis/FormUtlis';

/**
 * Component for creating a dynamic form page.
 * 
 * @returns {JSX.Element} - The rendered create form page.
 */
export default function CreateFormPage() {
    const { formQuestions, setFormQuestions } = useCreateForms();
    const [formName, setFormName] = useState('');

    useEffect(() => {
        let storedFormQuestions = getForm();
        setFormQuestions(storedFormQuestions?.questions);
        setFormName(storedFormQuestions?.name);
    }, []);

    useEffect(() => {
        let form = {
            name: formName,
            questions: formQuestions
        }
        storeForm(form);
    }, [formQuestions,formName]);

    function submitForm() {
        let form = {
            name: formName,
            questions: formQuestions
        }
        storeForm(EMPTY_FORM);
        console.log(form);
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
            <SubmitButton submitFunction={submitForm} href="/form" />
        </div>
    );
}
