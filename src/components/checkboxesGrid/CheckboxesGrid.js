import React, { useState, useEffect } from 'react';
import { useForms } from '../../context/FormsContext';
import { updateAnswers } from '../../utlis/FormUtlis';

export default function CheckboxesGrid({ rows, columns, question }) {
  const numRows = rows.length;
  const numCols = columns.length;
  const { setFormAnswers } = useForms();

  const initialGrid = Array(numRows)
    .fill(false)
    .map(() => Array(numCols).fill(false));

  const [grid, setGrid] = useState(initialGrid);

  useEffect(() => {
    const answers = grid.map((row) => row.map((isChecked) => isChecked));
    updateAnswers(setFormAnswers, question.id, answers);
  }, [grid, setFormAnswers, question]);

  const handleCheckboxClick = (row, col) => {
    const updatedGrid = [...grid];
    updatedGrid[row][col] = !updatedGrid[row][col];
    setGrid(updatedGrid);
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
              {grid[rowIndex].map((isChecked, colIndex) => (
                <td key={colIndex}>
                  <input
                    style={{ cursor: 'pointer' }}
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleCheckboxClick(rowIndex, colIndex)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
