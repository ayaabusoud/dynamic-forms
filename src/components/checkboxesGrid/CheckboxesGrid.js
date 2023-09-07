import React, { useState } from 'react';

function CheckboxesGrid({ rows, columns }) {
  const numRows = rows.length;
  const numCols = columns.length;

  const initialGrid = Array(numRows)
    .fill(false)
    .map(() => Array(numCols).fill(false));

  const [grid, setGrid] = useState(initialGrid);

  const handleCheckboxClick = (row, col) => {
    const updatedGrid = [...grid];
    updatedGrid[row][col] = !updatedGrid[row][col];
    setGrid(updatedGrid);
  };

  
  return (
    <div>
       <table className='table table-bordered w-auto'> 
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
                    style={{cursor: 'pointer'}}
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

export default CheckboxesGrid;
