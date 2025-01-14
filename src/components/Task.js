import React from "react";
import "./Task.css";
export default function Task({ task, handleEditTask, handleDeleteTask, handleMarkAsCompleted }) {
  return (
    <div
      className="task-container"
      style={
        task.taskStatus === "InProgress"
          ? { backgroundColor: "#FFBF00" }
          : { backgroundColor: "green" }
      }
    >
      <div className="task-container-labels">
        <div className="task-container-labels-1">
          <label style={{ width: "75%" }}>Title: {task.taskTitle}</label>
          <label style={{ width: "25%" }}>Date: {task.taskDate}</label>
        </div>
        <label>Description: {task.taskDescription}</label>
      </div>
      <div className="task-container-buttons">
        <button onClick={() => handleEditTask(task)}>Edit</button>
        <button onClick={() => handleDeleteTask(task.taskId)}>Delete</button>
        <button
          style={{ width: "10%" }}
          onClick={() => handleMarkAsCompleted(task)}
        >
          Mark As Completed
        </button>
      </div>
    </div>
  );
}
