import React,{useState} from 'react';


export default function GroupListItem(props ) {


    function settingDayleft(){
      const day1 = new Date(props.item.examDate);
      const day2 = new Date();
      const dayleft = Math.round((day1-day2)/1000/60/60/24);
      const szöveg=String(dayleft);

     if(dayleft > 1){
        return (szöveg+" "+ "days left");
      } else if(dayleft === 1){
        return (szöveg+" "+ "day left");
      }else if (dayleft === 0 ){
        return("exam day");
      }else {
        return("exam is over" );
      }
    }
  

    function handleDelet(){
        props.deleteGroup(props.item.groupId)
    }

    function handleSetting(){
        props.settingGroup(props.item.groupId)
    }

    function handleChangeTitle(e){
      props.changeTitle(props.item.groupId,e.target.value)
    }

    function handleChangeDate(e){
      props.changeExamDate(props.item.groupId, e.target.value)
    }
  
    function handleAddTopic(e){
      props.addTopic(props.item.groupId)
    }

   
  return (
    <li key={props.item.groupId}>{props.item.groupSetting ?
      <form key="form" action='#' method='GET'>
        <div className='from-row'>
            <label htmlFor="title">Exam name:</label>
            <input
              type="text"
              value={props.item.title}
              onChange={handleChangeTitle}
              required/>
        </div>
        <div className='from-row'>
            <label htmlFor='exam-date'>Exam date: </label>
            <input 
              type="date"
              value={props.item.examDate}
              onChange={handleChangeDate}
              required/>

        </div>
        <button type="submit" onClick={handleSetting}>OK</button>
      </form>
        :
      <div>
        <div>
          <button onClick={handleDelet}>Delete</button>
          <button onClick={handleSetting}>Setting</button>
        </div>
        <div>
          {props.item.title}
        </div>
        <div>
        {settingDayleft()}
        </div>
       <button onClick={handleAddTopic}>Add Item</button>
      </div> 
    }
    </li>
  )
}
