import React, { useState } from 'react';
import { useForms } from '../../context/FormsContext';
import TableDimensions from './TableDimensions';
import { resetProperties } from '../../utlis/FormUtlis';

/**
 * Component for adding and managing rows and columns for a specific question.
 *
 * @param {number} questionId - The ID of the associated question.
 * @returns {JSX.Element} - The rendered component for adding rows and columns.
 */
export default function AddTableDimensions({ questionId }) {
    const [rows, setRows] = useState(["row 1"]);
    const [columns, setColumns] = useState(["column 1"]);
    const { formQuestions, setFormQuestions } = useForms();

    /**
     * Updates a property (rows or columns) for the associated question.
     *
     * @param {number} index - The index of the item to update.
     * @param {string} newValue - The new value to set.
     * @param {string} itemName - The name of the item to update (rows or columns).
     */
    function updateProperty(index, newValue, itemName) {
        const updatedArrayOfQuestions = formQuestions.map((question) => {
            if (question.id === questionId) {
                question = resetProperties(question, ["options"]);
                
                if (!question[itemName] || !Array.isArray(question[itemName])) {
                    question[itemName] = [];
                }

                const updatedValue = [...question[itemName]];
                updatedValue[index] = newValue;
                return { ...question, [itemName]: updatedValue };
            }
            return question;
        });

        setFormQuestions(updatedArrayOfQuestions);
    }

    return (
        <div className='row'>
            {/* Rows */}
            <TableDimensions
                questionId={questionId}
                items={rows}
                setItems={setRows}
                itemsType="Row"
                updateItems={(index, newValue) => updateProperty(index, newValue, 'rows')}
            />

            {/* Columns */}
            <TableDimensions
                questionId={questionId}
                items={columns}
                setItems={setColumns}
                itemsType="Column"
                updateItems={(index, newValue) => updateProperty(index, newValue, 'columns')}
            />
        </div>
    );
}
