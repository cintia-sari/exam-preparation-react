import React from 'react';
import TopicGroup from "../TopicGroup/TopicGroup";
import "./GroupListItem.css";
import Delete from "../Icons/Delete.svg";
import Settings from "../Icons/Settings.svg"


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
  

    function handleDelet(e){
      e.preventDefault();
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
  
    const topicGroupjsx = props.topicList.map(topic=>(
      <TopicGroup
          topic={topic}
          ChangeTopic={props.ChangeTopic}
          setValue={props.setValue}
          chageHasTopic={props.chageHasTopic}
          deleteTopic={props.deleteTopic}
          changeTopicName={props.changeTopicName}/>
    ))

   function calcAverKnowledge(){
    const knowledge = props.topicList.map(item=> item.knowledge );

    if(knowledge.length ===0){
      return "-";
    }else{
      const knowledgeBlock=[];
      knowledgeBlock.push(knowledge);
      const addedKnowledgeBlock = Math.round((knowledgeBlock[0].reduce((a,b)=> a+b))/knowledgeBlock[0].length);
      
      return addedKnowledgeBlock};
  }
   

   
  return (
    <div className='GroupList-div' key={props.item.groupId}>{props.item.groupSetting ?
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
          <a  className='delete-button' onClick={handleDelet} href="#"><img className='delete-button' src={Delete} alt="delete"></img></a>
          <a onClick={handleSetting}><img className='Settings-button' src={Settings} alt="Settings"></img></a>
        </div>
        <div>
          {props.item.title}
        </div>
        <div>{calcAverKnowledge()} %</div>
        <div>
        {settingDayleft()}
        </div>
       <button onClick={handleAddTopic}>Add Item</button>
       <div>{topicGroupjsx}</div>
      </div> 

    }
    </div>
  )
}
