import React from 'react';
import './App.css';

function App() {
  const [state,setState]= React.useState(
    {
      group:[{
        title : "Exam name",
        GroupSetting: false,
        allKnowledge:0,
        GroupId : 0, 
        itemsList:[{
          name :"Topic name",
          topicRename:false,
          knowledge: 0,
          topic: false,
          topicId:0,
            }  
        ], 
      }
      ],
      nextGrupId:1 ,
      nextTopicId:1,
    }
  );


  return (
    <>
     <h1>Exam Preparation</h1>
    </>
  );
}

export default App;
