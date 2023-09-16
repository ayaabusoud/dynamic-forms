import React, { useState, useEffect } from 'react';
import { useForms } from '../../context/FormsContext';
import { updateAnswers } from '../../utlis/FormUtlis';

export default function Table({ rowsNumber, columns, question }) {
  const [tableData, setTableData] = useState(
    [...Array(rowsNumber)].map(() => Array(columns.length).fill(''))
  );
  const { setFormAnswers } = useForms();

  useEffect(() => {
    const answers = tableData.map((row) => [...row]);
    updateAnswers(setFormAnswers, question.id, answers);
  }, [tableData, setFormAnswers, question]);

  const handleCellChange = (rowIndex, columnIndex, newValue) => {
    const updatedTableData = [...tableData];
    updatedTableData[rowIndex][columnIndex] = newValue;
    setTableData(updatedTableData);
  };

  return (
    <div>
      <table className='table table-bordered w-auto text-center'>
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
                      border: 'none',
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
