import React, { useState } from 'react'

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
    };

  return (
    <form key="form" action='.' method='GET' onSubmit={handleSubmit}>
        <div className='from-row'>
            <label htmlFor="title">Exam name:</label>
                <input
                    type="text"
                    value={title}
                    onChange={handleChangeTitle}
                    required/>
        </div>
        <div className='from-row'>
            <label htmlFor='exam-date'>Exam date: </label>
            <input 
                type="date"
                value={examDate}
                onChange={handleChangeDate}
                required/>

        </div>
        <button type="submit">ok</button>
    </form>
  )
}
