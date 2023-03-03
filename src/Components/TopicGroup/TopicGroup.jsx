import React from 'react';
import Delete from "../Icons/Delete.svg";
import Settings from "../Icons/Settings.svg";

export default function TopicGroup(props) {

    function handleChangeTopic(e){
        e.preventDefault();
        props.ChangeTopic(props.topic.topicId)
    }

    function handleSetValue(e){
        const valueInt=parseInt(e.target.value)
        props.setValue(props.topic.topicId,valueInt)
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

  return (
    <div> {props.topic.topicSetting ?
        <div>
            <label> Topic name: </label>
            <input 
                type="text"
                value={props.topic.name}
                onChange={handleChangeTopicName}/>
            <button onClick={handleChangeTopic}> OK</button>
        </div>
        :
        <li>
             <div className='button-div'>
          <a onClick={handleChangeTopic} href="#"><img className='Settings-button' src={Settings} alt="Settings"></img></a>
          <a onClick={handleDeleteTopic} href="#"><img className='delete-button' src={Delete} alt="delete"></img></a>
        </div>
            <div>
                <button onClick={handleChangeTopic}>Change</button>
                <button onClick={handleDeleteTopic}>Delete</button>
            </div>
            <div>{props.topic.name}</div>
            <div onClick={handleChangeHasTopic}>{props.topic.hasTopic ? 
                    "van"
                    :
                    "nincs"}
            </div>  
            <div>
                <label>
                    <h4 className='level'>level: {props.topic.knowledge}%</h4>
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

        </li>
    }</div>
  )
}