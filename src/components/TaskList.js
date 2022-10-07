import React from "react";
import Task from "./Task";

function TaskList({tasks,onDeleteTask}) {
  const displayTask = tasks.map(()=>{
    return (<Task 
      key = {tasks.text}
      text = {tasks.text}
      category = {tasks.category}
      onDeleteTask = {onDeleteTask}
    />)
  }
  )
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {displayTask}
    </div>
  );
}

export default TaskList;
