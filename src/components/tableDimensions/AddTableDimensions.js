import React, { useState } from 'react';
import TableDimensions from './TableDimensions';

/**
 * Component for adding and managing rows and columns for a specific question.
 *
 * @param {number} questionId - The ID of the associated question.
 * @returns {JSX.Element} - The rendered component for adding rows and columns.
 */
export default function AddTableDimensions({ index,question }) {
    const [rows, setRows] = useState(question?.rows || ['']);
    const [columns, setColumns] = useState(question?.columns || ['']);

    return (
        <div className='row'>
            {/* Rows */}
            <TableDimensions
                questionId={question.id}
                items={rows}
                setItems={setRows}
                itemsType="Row"
                index={index}
            />

            {/* Columns */}
            <TableDimensions
                questionId={question.id}
                items={columns}
                setItems={setColumns}
                itemsType="Column"
                index={index}
            />
        </div>
    );
}
