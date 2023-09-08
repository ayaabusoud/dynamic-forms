import React, { useState } from 'react';
import { useForms } from '../../context/FormsContext';
import TableDimensions from './TableDimensions';
import AddRows from '../addRows/AddRows';

export default function TextTableDimensions({ index, questionId }) {
    const [columns, setColumns] = useState([""]);
    const { formQuestions, setFormQuestions } = useForms();

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
