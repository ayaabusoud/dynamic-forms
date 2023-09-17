import React from 'react'
import { Link } from 'react-router-dom'

export default function SubmitButton({submitFunction,href}) {
  return (
    <Link type="submit" className='text-decoration-none me-3  submit-button text-white'  onClick={submitFunction} to={href}>Submit</Link>
    )
}
