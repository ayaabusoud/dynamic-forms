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
      <table>
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
                  <div
                    style={{
                      display:'flex',
                      justifyContent: 'center',
                      alignItems:'center',
                      width: '20px',
                      height: '20px',
                      backgroundColor: 'white' ,
                      border: '1px solid gray',
                      textAlign: 'center',
                      cursor: 'pointer',
                      borderRadius: '25px',
                    }}
                  >
                    <div style={
                      {
                        whiteSpace: 'nowrap',
                        backgroundColor: selected ? '#0d6efd' : 'white',
                        width: '14px',
                        height:'14px',
                        borderRadius:'25px',
                        textAlign: 'center',

                      }
                    }>
                      
                    </div>
                  </div>
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
