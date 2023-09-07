import React, { useState } from 'react';

function MultipleChoiceGrid({ rows, columns }) {
  const numRows = rows.length;
  const numCols = columns.length;

  const initialGrid = Array(numRows)
    .fill(null)
    .map(() => Array(numCols).fill(false));

  const [grid, setGrid] = useState(initialGrid);

  const handleCellClick = (row, col) => {
    const updatedGrid = [...grid];

    updatedGrid[row] = Array(numCols).fill(false);

    updatedGrid[row][col] = true;

    setGrid(updatedGrid);
  };

  return (
    <div>
       <table className='table table-bordered w-auto' > 
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
                    name={rowIndex} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MultipleChoiceGrid;
