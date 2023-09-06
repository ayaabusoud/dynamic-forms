import React from 'react'
import { Link } from 'react-router-dom'

export default function SubmitButton({submitFunction,href}) {
  return (
    <button className='mx-3' onClick={submitFunction}><Link className='text-decoration-none text-black' to={href}>Submit</Link></button>
    )
}
