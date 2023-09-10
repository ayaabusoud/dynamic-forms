import React, { useEffect } from "react";
import AddButton from "../buttons/addButton/AddButton";
import DeleteButton from "../buttons/deleteButton/DeleteButton";
import { useCreateForms } from "../../context/CreateFormsContext";
import { updateProperty } from "../../utlis/CreateFormUtlis";
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
export default function TableDimensions({items,setItems,itemsType,questionId}) {
  const { formQuestions, setFormQuestions } = useCreateForms();

  useEffect(() => {
    updateProperty(`${itemsType}s` , items,formQuestions, setFormQuestions,questionId)
  }, [items, setItems]);

  function addItem(e) {
    const index = items.length + 1;
    setItems([...items, '']);
    e.preventDefault();
  }

  const handleUpdate = (e, itemIndex) => {
    const updatedItems = [...items];
    updatedItems[itemIndex] = e.target.value;
    setItems(updatedItems);
  };
  
  function deleteInput(indexToDelete) {
    if (items.length <= 1) {
      return;
    }
    const updatedItems = [...items];
    updatedItems.splice(indexToDelete, 1);
    setItems(updatedItems);
  }

  return (
    <div className="col-6">
      <p>{`${itemsType}s`}: </p>
      {items.map((item, index) => (
        <div key={index} className="row">
          <div className="col-10">
            <input
              placeholder={`${itemsType} ${index+1}`}
              className="form-control my-2 ms-3"
              value={item}
              onChange={(e) =>handleUpdate(e,index)}
            />
          </div>
          {items.length <= 1 ? null : (
            <div className="col-2 my-2">
            <DeleteButton deleteFunction={() => deleteInput(index)} />
          </div>
          )}
        </div>
      ))}
      <AddButton addFunction={(e) => addItem(e)} text={`Add ${itemsType}`} />
    </div>
  );
}
