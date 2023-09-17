import React from 'react';
export default function AddButton({addFunction, text}) {
    return (
        <button className='add-button mx-2' onClick={addFunction}>{text}</button>
    );
}
