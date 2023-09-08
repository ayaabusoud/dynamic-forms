import React, { useState } from 'react';
import './Table.css';

export default function Table({ rowsNumber, columns }) {
  const [tableData, setTableData] = useState(
    [...Array(rowsNumber)].map(() => Array(columns.length).fill(''))
  );

  const handleCellChange = (rowIndex, columnIndex, newValue) => {
    const updatedTableData = [...tableData];
    updatedTableData[rowIndex][columnIndex] = newValue;
    setTableData(updatedTableData);
  };

  return (
    <div>
    <table className='table table-bordered w-auto'> 
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, columnIndex) => (
                <td key={columnIndex}>
                  <input
                    style={{
                      border:'none',
                    }}
                    className='cell-input'
                    type="text"
                    value={cell}
                    onChange={(e) =>
                      handleCellChange(rowIndex, columnIndex, e.target.value)
                    }
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
