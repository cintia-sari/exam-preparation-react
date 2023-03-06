import React, { useState } from 'react';
import "./Form.css"

export default function Form(props) {
    const [title,setTitle]= useState("");
    const [examDate, setexamDate]= useState ("");

    function handleChangeTitle(e){
        setTitle(e.target.value)
    };

    function handleChangeDate(e){
        setexamDate(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        props.addGroup(title, examDate);
        setTitle("");
        setexamDate("");
    }

    

  return (
    <form className='main-form' key="form" action='.' method='GET' onSubmit={handleSubmit}>
        <div className='from-row'>
            <label htmlFor="form-exam-title">Exam name: </label>
                <input
                    className='form-title-input'
                    type="text"
                    value={title}
                    onChange={handleChangeTitle}
                    required/>
        </div>
        <div className='from-row'>
            <label htmlFor='exam-date'>Exam date: </label>
            <input 
                className='form-date'
                type="date"
                value={examDate}
                onChange={handleChangeDate}
                required/>

        </div>
        <button className='form-button' type="submit">Add group</button>
    </form>
  )
}
