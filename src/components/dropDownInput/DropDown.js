import React from 'react'

export default function DropDown({ options }) {

    const listItems = options.map((option, index) => (
        <option key={index} value={option} >{option}</option>
    ))
    return (
        <select>
            {listItems}
        </select>
    )
}
