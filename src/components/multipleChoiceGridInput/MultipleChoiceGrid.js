import React, { useState, useEffect } from 'react';
import { useForms } from '../../context/FormsContext';
import { updateAnswers } from '../../utlis/FormUtlis';

export default function MultipleChoiceGrid({ rows, columns, question ,required}) {
  const numRows = rows.length;
  const numCols = columns.length;
  const { setFormAnswers, formAnswers } = useForms();

  const initialGrid = Array(numRows)
    .fill(null)
    .map(() => Array(numCols).fill(false));

  const [grid, setGrid] = useState(initialGrid);

  useEffect(() => {
    const storedAnswer = formAnswers.find((answer) => answer.questionId === question.id);
    if (storedAnswer) {
      const updatedGrid = storedAnswer.answers.map((row) => row.map((selected) => selected === true));
      setGrid(updatedGrid);
    }
  }, [formAnswers, setFormAnswers]);


  const handleCellClick = (row, col) => {
    const updatedGrid = [...grid];

    updatedGrid[row] = Array(numCols).fill(false);

    updatedGrid[row][col] = true;

    setGrid(updatedGrid);
    const answers = updatedGrid.map((row, rowIndex) =>
      row.map((selected, colIndex) => (selected ? true : false))
    );
    updateAnswers(setFormAnswers, question.id, answers);
  };


  return (
    <div>
      <table className='table table-bordered w-auto text-center'>
        <thead>
          <tr>
            <th></th>
            {columns.map((colLabel, colIndex) => (
              <th key={colIndex}>{colLabel}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((rowLabel, rowIndex) => (
            <tr key={rowIndex}>
              <td>{rowLabel}</td>
              {grid[rowIndex].map((selected, colIndex) => (
                <td key={colIndex} onClick={() => handleCellClick(rowIndex, colIndex)}>
                  <input
                    style={{ cursor: 'pointer' }}
                    type="radio"
                    name={rowIndex}
                    checked={selected}
                    onChange={() => handleCellClick(rowIndex, colIndex)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {required && !grid.some(row => row.includes(true)) && (
        <div className="required">This field is required.</div>
      )}
    </div>
  );
}
