import React from "react";

function Task({category,text,onDeletetask}) {
  
  function handleClick(){
    onDeletetask (text)

  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick = {handleClick}>X</button>
    </div>
  );
}

export default Task;
