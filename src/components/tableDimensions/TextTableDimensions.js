import React, { useState } from 'react';
import { useCreateForms } from '../../context/CreateFormsContext';
import TableDimensions from './TableDimensions';

export default function TextTableDimensions({ index, question }) {
    const [columns, setColumns] = useState(question?.columns || ['']);
    const [rowsNumber, setRowsNumber] = useState(question?.rowsNumber || 1);
    const { formQuestions, setFormQuestions } = useCreateForms();

    function updateRowsNumber(newValue) {
        setRowsNumber(newValue);
        setFormQuestions((prevQuestions) =>
            prevQuestions.map((q) =>
                q.id === question.id ? { ...q, rowsNumber: newValue || 1 }: q
            )
        );
    }

    return (
        <div className='row'>

            <div className='d-flex mb-2 ms-3'>
                <label className='me-3 mt-1'>Rows: </label>
                <input className="form-control w-25 p-1" type='number' min='1' placeholder='Enter rows number' value={rowsNumber}
                    onChange={(e) => updateRowsNumber( e.target.value)} />
            </div>

            {/* Columns */}
            <TableDimensions
                questionId={question.id}
                items={columns}
                setItems={setColumns}
                itemsType="Column"
                index={index} />

        </div>
    );
}
