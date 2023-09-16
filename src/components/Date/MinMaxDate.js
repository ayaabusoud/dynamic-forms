import React, { useState } from 'react';
import { useCreateForms } from '../../context/CreateFormsContext';

export default function MinMaxDate({ index }) {
    const { formQuestions, setFormQuestions } = useCreateForms();
    const [minDate, setMinDate] = useState(formQuestions[index].min || '');
    const [maxDate, setMaxDate] = useState(formQuestions[index].max || '');

    const handleMinDateChange = (event) => {
        const newMinDate = event.target.value;
        setMinDate(newMinDate);
        const updatedFormQuestions = [...formQuestions];
        updatedFormQuestions[index].min = newMinDate;
        setFormQuestions(updatedFormQuestions);
    };

    const handleMaxDateChange = (event) => {
        const newMaxDate = event.target.value;
        setMaxDate(newMaxDate);
        const updatedFormQuestions = [...formQuestions];
        updatedFormQuestions[index].max = newMaxDate;
        setFormQuestions(updatedFormQuestions);
    };

    return (
        <div className='row'>
            <div className='col-6'>
                <label>Min: </label>
                <input type='date' value={minDate} onChange={handleMinDateChange} />
            </div>
            <div className='col-6'>
                <label>Max: </label>
                <input type='date' value={maxDate} onChange={handleMaxDateChange} />
            </div>
        </div>
    );
}
