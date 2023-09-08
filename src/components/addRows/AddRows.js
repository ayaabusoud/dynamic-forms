import React from 'react'

export default function AddRows({formQuestions,setFormQuestions,questionId}) {

    function updateRowsNumber(formQuestions,setFormQuestions,newValue) {
        const updatedArrayOfQuestions = formQuestions.map((question) => {
            if (question.id === questionId) {
    
                if (!question.rowsNumber) {
                    question.rowsNumber = 1;
                }
    
                return { ...question, rowsNumber: newValue };
            }
            return question;
        });
    
        setFormQuestions(updatedArrayOfQuestions);
    }

    return (
        <div className='d-flex mb-2'>
            <label className='me-2'>Rows: </label>
            <input type='number' min='1' placeholder='Enter rows number'
                onChange={(e) => updateRowsNumber(formQuestions,setFormQuestions,e.target.value)} />
        </div>
    )
}
