import React, { useState } from 'react';
import { useCreateForms } from '../../context/CreateFormsContext';
import TableDimensions from './TableDimensions';
import AddRows from '../addRows/AddRows';

export default function TextTableDimensions({ index, questionId }) {
    const [columns, setColumns] = useState([""]);
    const { formQuestions, setFormQuestions } = useCreateForms();

    return (
        <div className='row'>

            <AddRows formQuestions={formQuestions} setFormQuestions={setFormQuestions} questionId={questionId} />

            {/* Columns */}
            <TableDimensions
                questionId={questionId}
                items={columns}
                setItems={setColumns}
                itemsType="Column"
                index={index} />

        </div>
    );
}
