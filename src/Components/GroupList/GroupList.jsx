import React from 'react';
import GroupListItem from "../GroupListItem/GroupListItem";


export default function GroupList(props) {

    const groupListItemjsx = props.group.map((item)=>(
        <GroupListItem item={item}
                       deleteGroup={props.deleteGroup}
                       settingGroup={props.settingGroup}
                       changeTitle={props.changeTitle}
                       changeExamDate={props.changeExamDate}
                       addTopic={props.addTopic}/>
    ))

  return (
    <ul>{groupListItemjsx}</ul>
  )
}
