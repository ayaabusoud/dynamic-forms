import React from 'react'

export default function CheckBox({ options }) {
  return (
    options.map((option, index) => (
      <div key={index}>
        <input type="checkbox" className='me-2' />
        <label>{option}</label>
      </div>
    ))
  )
}
