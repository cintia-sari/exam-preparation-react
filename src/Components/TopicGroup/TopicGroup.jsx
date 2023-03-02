import React from 'react'

export default function TopicGroup(props) {


  return (
    <li>
        <div>{props.topic.name}</div>
        <div>{props.topic.knowledge}</div>
        <div>{props.topic.topic ? 
                "van"
                :
                "nincs"}</div>  

    </li>
  )
}
