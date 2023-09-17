import React, { useState, useEffect } from "react";
import { useCreateForms } from "../../context/CreateFormsContext";
import AddButton from "../buttons/addButton/AddButton";
import DeleteButton from "../buttons/deleteButton/DeleteButton";
import "./AddOptions.css";

export default function AddOptions({ index }) {
  const { formQuestions, setFormQuestions } = useCreateForms();

  const initialOptions = formQuestions[index]?.options || [''];
  const [options, setOptions] = useState(initialOptions);

  useEffect(() => {
    const updatedFormQuestions = [...formQuestions];
    updatedFormQuestions[index].options = options;
    setFormQuestions(updatedFormQuestions);
  }, [options, index, setFormQuestions]);

  function addOption(e) {
    setOptions([...options, '']);
    e.preventDefault();
  }

  const handleUpdate = (e, optionIndex) => {
    const updatedOptions = [...options];
    updatedOptions[optionIndex] = e.target.value;
    setOptions(updatedOptions);
  };

  function deleteOption(indexToDelete) {
    const updatedOptions = [...options];
    updatedOptions.splice(indexToDelete, 1);

    if (updatedOptions.length === 0) {
      updatedOptions.push('');
    }

    setOptions(updatedOptions);
  }

  return (
    <>
      {options.map((option, index) => (
        <div className="row " key={index}>
          <div className="col-6 col-lg-4">
            <input
              type="text"
              placeholder={`Option ${index + 1}`}
              className="form-control my-1 ms-3 input-field m-0" 
              value={option}
              onChange={(e) => handleUpdate(e, index)}
            />
          </div>
          <div className=" col my-1">
            <DeleteButton deleteFunction={() => deleteOption(index)} />
            {index === options.length - 1 ? (
              <AddButton addFunction={addOption} text={"+"} />
            ) : null}   
                 </div>
        </div>
      ))}
    </>

  );
}
