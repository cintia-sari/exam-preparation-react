import React from 'react';
import TopicGroup from "../TopicGroup/TopicGroup";
import "./GroupListItem.css";
import Delete from "../Icons/Delete.svg";
import Settings from "../Icons/Settings.svg";
import Popup from '../PopUp/PopUp';


export default function GroupListItem(props ) {

  const [isOpen, setIsOpen] = React.useState(false);
  const [topicName,setTopicName]= React.useState("");

    function handleTopicNameChange(e){
      setTopicName(e.target.value)
    };

    function handleAddTopic(e){
      e.preventDefault();
      props.addTopic(props.item.groupId, topicName);
      setTopicName("");
    };

    function settingDayleft(){
      const day1 = new Date(props.item.examDate);
      const day2 = new Date();
      const dayleft = (Math.round((day1-day2)/1000/60/60/24))+1 ;
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
        props.deleteGroup(props.item.groupId);
    }

    function handleSetting(e){
        e.preventDefault();
        props.settingGroup(props.item.groupId);
    }

    function handleChangeTitle(e){
      props.changeTitle(props.item.groupId,e.target.value)
    }

    function handleChangeDate(e){
      props.changeExamDate(props.item.groupId, e.target.value)
    }
  

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

  //change color according to level:
  function changeLevelColor(){ 
    const levelNum=  calcAverKnowledge();

    if( 0 < levelNum && levelNum <= 40){
      return "orange"
    }else if( 40 < levelNum && levelNum <= 80){
      return "yellow"
    }else if( levelNum > 80){
      return "green"
    };
  };


  const topicGroupjsx = props.topicList.map(topic=>(
    <TopicGroup
        topic={topic}
        ChangeTopic={props.ChangeTopic}
        setValue={props.setValue}
        chageHasTopic={props.chageHasTopic}
        deleteTopic={props.deleteTopic}
        changeTopicName={props.changeTopicName}/>
  ));
   
function selectRandomTopic(){
  const max= props.topicList.length;

  if (max == 0){
    return "Please add some topic..."
  }else{
  const randomNum= Math.floor(Math.random()* max );
  const randomTopicList = props.item.topicList[randomNum];
  return randomTopicList.name;
  };
};

const togglePopup = () => {
  setIsOpen(!isOpen)
};

function toClaspVisibilityPopUp (){
  return(
    <div>
      {isOpen && <Popup content={<h3 title= { selectRandomTopic() }> {selectRandomTopic()} </h3> }
                        handleClose={togglePopup}
                  />}
    </div>
  );
};
   
  return (
    <div className='GroupList-div' key={props.item.groupId}>
      {props.item.groupSetting ?
            <form key="form" action='#' method='GET' onSubmit={handleSetting}>
                  <div className='from-row'>
                      <label htmlFor="title" >Exam name: </label>
                      <input
                        className='form-title-input'
                        type="text"
                        value={props.item.title}
                        onChange={handleChangeTitle}
                        required/>
                  </div>
                  <div className='from-row'>
                      <label htmlFor='exam-date'>Exam date: </label>
                      <input 
                        className='form-date'
                        type="date"
                        value={props.item.examDate}
                        onChange={handleChangeDate}
                        required/>

                  </div>
                  <button className='form-button' type="submit">OK</button>
            </form>
      :
            <div>
                  <div className='button-div'>
                      <a onClick={handleSetting} href="#"><img className='Settings-button' src={Settings} alt="Settings"></img></a>
                      <a onClick={handleDelet} href="#"><img className='delete-button' src={Delete} alt="delete"></img></a>
                  </div>
                  <div className='group-title'>
                      <h3 className={ changeLevelColor()} title={props.item.title}>{props.item.title}</h3>
                  </div>
                  <div className={ changeLevelColor()} > { calcAverKnowledge() } % </div>
                  <div className={ changeLevelColor()}> { settingDayleft() }</div>
                  <button className='form-button' onClick={togglePopup}> Topic draw </button>
                  <form className='topic-form' key="form" action='.' method='GET' onSubmit={handleAddTopic}>
                      <input className='form-title-input' placeholder='Type new topic name...' type="text" value={topicName} onChange={handleTopicNameChange} required/>
                      <button type="submit">Add topic</button>
                  </form>
            <div>{topicGroupjsx}</div>
            {toClaspVisibilityPopUp ()}
            </div> 
          }
    </div>
  );
};
