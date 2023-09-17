import React from 'react';
import './DeleteButton.css'; // Import your CSS file for styling

export default function DeleteButton({ deleteFunction }) {
  return (
    <button className='delete-button ms-2' onClick={deleteFunction}>
      x
    </button>
  );
}
