import React from 'react';
import './App.css';
import Form from "./Components/Form/Form";
import GroupList from './Components/GroupList/GroupList';


function App() {
  const [state,setState]= React.useState(
    {
      group:[{
        title: "Exam name",
        examDate: '2023-03-16',
        groupSetting: false,
        groupId: 0, 
        topicList:[{
          name: "Topic",
          knowledge: 0,
          topicSetting: false,
          hasTopic: false,
          topicId: 0,
            }  
        ], 
      }],
      nextGroupId:1,
      nextTopicId:1,
    }
  );

  function addGroup(title,examDate){
    const newGroup = structuredClone(state.group)
    newGroup.push({
      title,
      examDate,
      groupSetting: false,
      groupId: state.nextGroupId, 
      topicList:[]
    });

    setState({
      group:newGroup,
      nextGroupId:state.nextGroupId +1,
      nextTopicId:state.nextTopicId
    });
  };

function deleteGroup(id){
    const newGroup = structuredClone(state.group).filter(group=>group.groupId !== id);

    setState({
      group:newGroup,
      nextGroupId:state.nextGroupId,
      nextTopicId:state.nextTopicId
    });
  };

  function settingGroup(id){
      const setGroupSetting = structuredClone(state.group).map(group=>{
        if( group.groupId == id){
          group.groupSetting= !group.groupSetting;
        }
        return group;
      })
      setState({
        group:setGroupSetting,
        nextGroupId:state.nextGroupId,
        nextTopicId:state.nextTopicId
      });
  }

function changeTitle ( id, newTitlename){
  const newTitle = structuredClone(state.group).map(group=>{
    if (group.groupId === id){
      group.title = newTitlename
    }
    return group;
  });

  setState({
    group:newTitle,
    nextGroupId:state.nextGroupId,
    nextTopicId:state.nextTopicId
  });
}

function changeExamDate(id,newDate ){
  const newExamDate = structuredClone(state.group).map(group=>{
    if(group.groupId === id ){
      group.examDate = newDate
    }
    return group;
  })

  setState({
    group:newExamDate,
    nextGroupId:state.nextGroupId,
    nextTopicId:state.nextTopicId
  });
}

function addTopic(id){
  const newTopic= structuredClone(state.group).map(group=>{
    if(group.groupId == id){
      group.topicList = [...group.topicList,{
        name: "Topic",
        knowledge: 0,
        topicSetting: false,
        hasTopic: false,
        topicId: state.nextTopicId,
      }]
    }
    return group
    })

    setState({
      group: newTopic,
      nextGroupId: state.nextGroupId,
      nextTopicId: state.nextTopicId +1
    });
  }

function ChangeTopic(id){

  const knowledgeSet = structuredClone(state.group).map(group=>{
    return{
        title: group.title,
        examDate: group.examDate,
        groupSetting: group.groupSetting,
        groupId: group.groupId, 
        topicList:group.topicList.map(topic=>{
          if(topic.topicId == id){
            topic.topicSetting = !topic.topicSetting
          }
          return topic;
        })
    }
  });

  setState({
    group:knowledgeSet,
    nextGroupId:state.nextGroupId,
    nextTopicId:state.nextTopicId
  });
}

function setValue(id, newValue){
  const topicSet = structuredClone(state.group).map(group=>{
    return{
        title: group.title,
        examDate: group.examDate,
        groupSetting: group.groupSetting,
        groupId: group.groupId, 
        topicList:group.topicList.map(topic=>{
          if(topic.topicId == id){
            topic.knowledge = newValue
          }
          return topic;
        })
    }
  });

  setState({
    group:topicSet,
    nextGroupId:state.nextGroupId,
    nextTopicId:state.nextTopicId
  });
}

function chageHasTopic(id){
  const changedHasTopic = structuredClone(state.group).map(group=>{
    return{
      title: group.title,
      examDate: group.examDate,
      groupSetting: group.groupSetting,
      groupId: group.groupId, 
      topicList:group.topicList.map(item=>{
        if(item.topicId == id ){
          item.hasTopic = !item.hasTopic
        }
        return item;
      })

    }
  })
  setState({
    group:changedHasTopic,
    nextGroupId:state.nextGroupId,
    nextTopicId:state.nextTopicId
  });
}

  return (
    <>
     <h1>Exam Preparation</h1>
     <Form addGroup={addGroup}/>
     <GroupList group={state.group}
                deleteGroup={deleteGroup}
                settingGroup={settingGroup}
                changeTitle={changeTitle}
                changeExamDate={changeExamDate}
                addTopic={addTopic}
                ChangeTopic={ChangeTopic}
                setValue={setValue}
                chageHasTopic={chageHasTopic}/>
    </>
  );
}

export default App;
