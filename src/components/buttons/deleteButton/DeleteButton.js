import React from 'react'

export default function DeleteButton({deleteFunction}) {
  return (
    <button className='ms-2' onClick={deleteFunction}>Delete</button>
    )
}
