import React from 'react';
import GroupListItem from "../GroupListItem/GroupListItem";
import "./GroupList.css"


export default function GroupList(props) {

    const groupListItemjsx = props.group.map((item)=>(
        <GroupListItem item={item}
                       deleteGroup={props.deleteGroup}
                       settingGroup={props.settingGroup}
                       changeTitle={props.changeTitle}
                       changeExamDate={props.changeExamDate}
                       addTopic={props.addTopic}
                       topicList={item.topicList}
                       ChangeTopic={props.ChangeTopic}
                       setValue={props.setValue}
                       chageHasTopic={props.chageHasTopic}
                       deleteTopic={props.deleteTopic}
                       changeTopicName={props.changeTopicName}/>
    ))

  return (
    <div className='groupList-contanier'>{groupListItemjsx}</div>
  )
}