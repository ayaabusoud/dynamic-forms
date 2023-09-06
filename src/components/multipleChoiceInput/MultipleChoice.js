import React from 'react'

export default function MultipleChoice({ options, questionNumber }) {
  return (
      options.map((option, index) => (
        <div key={index}>
          <input type="radio" name={questionNumber} className='me-2' />
          <label>{option}</label>
        </div>
      ))
  )
}
