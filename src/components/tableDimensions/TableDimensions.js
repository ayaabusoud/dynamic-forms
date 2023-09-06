import React from 'react';
import AddButton from '../buttons/addButton/AddButton';
import DeleteButton from '../buttons/deleteButton/DeleteButton';
import { useForms } from '../../context/FormsContext';

/**
 * Component for rendering input fields for rows and columns.
 *
 * @param {Array} items - The array of items to render input fields for.
 * @param {function} setItems - A function to set the items array.
 * @param {string} itemsType - The type of items (e.g., "Row" or "Column").
 * @param {function} updateItems - A function to update items based on user input.
 * @param {number} questionId - The ID of the associated question.
 * @returns {JSX.Element} - The rendered rows and columns input fields.
 */
export default function TableDimensions({ items, setItems, itemsType, updateItems, questionId }) {
    const { formQuestions, setFormQuestions } = useForms();

    /**
     * Adds a new item to the items array.
     *
     * @param {Event} e - The event object.
     */
    function addItem(e) {
        const index = items.length + 1;
        setItems([...items, `${itemsType} ${index}`]);
        e.preventDefault();
    }

    function deleteInput(index) {
        //delete option of this index for the question in formQuestions
        //when there is only one input hide delete
    }

    return (
        <div className='col-6'>
            <p>{`${itemsType}s`}: </p>
            {items.map((item, index) => (
                <div key={index} className='row'>
                    <div className='col-10'>
                        <input
                            placeholder={item}
                            className='form-control my-2 ms-3'
                            onChange={(e) => updateItems(index, e.target.value, `${itemsType}s`)}
                        />
                    </div>
                    <div className='col-2'>
                        <DeleteButton deleteFunction={() => deleteInput(index)} />
                    </div>
                </div>
            ))}
            <AddButton addFunction={(e) => addItem(e)} text={`Add ${itemsType}`} />
        </div>
    );
}

