import React from 'react';
import Delete from "../Icons/Delete.svg";
import Settings from "../Icons/Settings.svg";
import "./TopicGroup.css";
import Check from "../Icons/Check.svg";
import Xmark from "../Icons/Xmark.svg";

export default function TopicGroup(props) {
    const [value,setValue]=React.useState("")

    function handleChangeTopic(e){
        e.preventDefault();
        props.ChangeTopic(props.topic.topicId)
    }

    function handleSetValue(e){
        const valueInt=parseInt(e.target.value)
        props.setValue(props.topic.topicId,valueInt)
        setValue(valueInt)
    }
   
    function handleChangeHasTopic(){
        props.chageHasTopic(props.topic.topicId)
    }

    function handleDeleteTopic(e){
        e.preventDefault();
        props.deleteTopic(props.topic.topicId)
    }

    function handleChangeTopicName(e){
        props.changeTopicName(props.topic.topicId, e.target.value)
    }

   //change color according to level:
   function changeClassName(){ 
    
    if( 0 < value && value <= 40){
      return "orange"
    }else if( 40 < value && value <= 80){
      return "yellow"
    }else if( value > 80){
      return "green"
    }
  }
console.log("ezt",changeClassName())

  return (
    <div className='topicList-div'> {props.topic.topicSetting ?
        <div>
            <label> Topic name: </label>
            <input 
                type="text"
                value={props.topic.name}
                onChange={handleChangeTopicName}/>
            <button onClick={handleChangeTopic}> OK</button>
        </div>
        :
        <div>
            <div className='button-div'>
                <a onClick={handleChangeTopic} href="#"><img className='Settings-button' src={Settings} alt="Settings"></img></a>
                <a onClick={handleDeleteTopic} href="#"><img className='delete-button' src={Delete} alt="delete"></img></a>
            </div>
            <div className={changeClassName()}><h3 className='topic-title' title={props.topic.name}>{props.topic.name}</h3></div>
            <div>
                <label className={changeClassName()}>
                    <h4 className='topic-level'>level: {props.topic.knowledge}%</h4>
                    <input
                        className='istyle' 
                        value={props.topic.knowledge}
                        onChange={handleSetValue}
                        type="range"
                        min="0"
                        max="100"
                        step="5" />
                </label>
            </div>
            <div onClick={handleChangeHasTopic}>{props.topic.hasTopic ? 
                    <img className='Check' src={Check} alt="haveTopic"></img>
                    :
                    <img className='Xmark' src={Xmark} alt="haveNotTopic"></img>
                    }
            </div>  

        </div>
    }</div>
  )
}