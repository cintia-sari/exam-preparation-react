
import React from "react";
import "./PopUp.css";

const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <div className="close-icon-div"><h3 className="close-icon" onClick={props.handleClose}>X</h3></div>
       <h3 className="random-topic" >{props.content}</h3> 
      </div>
    </div>
  );
};

export default Popup;
