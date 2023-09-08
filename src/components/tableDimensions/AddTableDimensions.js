import React, { useState } from 'react';
import TableDimensions from './TableDimensions';

/**
 * Component for adding and managing rows and columns for a specific question.
 *
 * @param {number} questionId - The ID of the associated question.
 * @returns {JSX.Element} - The rendered component for adding rows and columns.
 */
export default function AddTableDimensions({ index,questionId }) {
    const [rows, setRows] = useState(['']);
    const [columns, setColumns] = useState(['']);

    return (
        <div className='row'>
            {/* Rows */}
            <TableDimensions
                questionId={questionId}
                items={rows}
                setItems={setRows}
                itemsType="Row"
                index={index}
            />

            {/* Columns */}
            <TableDimensions
                questionId={questionId}
                items={columns}
                setItems={setColumns}
                itemsType="Column"
                index={index}
            />
        </div>
    );
}
