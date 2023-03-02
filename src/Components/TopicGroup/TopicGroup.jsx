import React from 'react'

export default function TopicGroup(props) {

    function handleChangeTopic(){
        props.ChangeTopic(props.topic.topicId)
    }

    function handleSetValue(e){
        const valueInt=parseInt(e.target.value)
        props.setValue(props.topic.topicId,valueInt)
    }
   

  return (
    <li>
        <div>{props.topic.name}</div>
        <div onClick={handleChangeTopic}>{props.topic.topic ? 
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
  )
}
