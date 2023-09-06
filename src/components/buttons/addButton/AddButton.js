import React from 'react';

export default function AddButton({addFunction, text}) {
    return (
        <button className='my-2 ms-2' onClick={addFunction}>{text}</button>
    );
}
