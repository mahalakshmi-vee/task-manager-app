import React, { use, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  updateTask,
  removeTask,
  setGlobalEditTaskId,
  clearTask,
  markTaskAsCompleted,
} from "../redux/taskSlice.js";
import "./TaskManager.css";
import Task from "./Task.js";
export default function TaskManager() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const taskInputRef = useRef(null);

  const tasks = useSelector((state) => state.tasks.tasks);
  const globalEditTaskId = useSelector((state) => state.tasks.globalEditTaskId);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskTitle.trim() === "") {
      alert("Please enter task title");
      return;
    }
    if (taskDescription.trim() === "") {
      alert("Please enter task description");
      return;
    }
    if (taskDate.trim() === "") {
      alert("Please enter task date");
      return;
    }
    if (globalEditTaskId == -1)
      dispatch(addTask({ taskTitle, taskDescription, taskDate }));
    else
      dispatch(
        updateTask({
          taskId: globalEditTaskId,
          taskTitle: taskTitle,
          taskDescription: taskDescription,
          taskDate: taskDate,
        })
      );
    handleClearTask();
  };
  const handleClearTask = () => {
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    dispatch(clearTask());
    if (taskInputRef.current) taskInputRef.current.focus();
  };
  const handleEditTask = (editTask) => {
    dispatch(setGlobalEditTaskId(editTask.taskId));
    setTaskTitle(editTask.taskTitle);
    setTaskDescription(editTask.taskDescription);
    setTaskDate(editTask.taskDate);
    if (taskInputRef.current) taskInputRef.current.focus();
  };
  const handleDeleteTask = (removeTaskId) => {
    dispatch(removeTask({ removeTaskId }));
    if (taskInputRef.current) taskInputRef.current.focus();
  };
  const handleMarkAsCompleted = (markTask) => {
    dispatch(markTaskAsCompleted({ taskId: markTask.taskId }));
  };
  const inProgressTasks = tasks.filter(
    (task) => task.taskStatus === "InProgress"
  );
  return (
    <div className="container">
      <div className="input-section">
        <div className="input-section-inputs">
          <input
            type="text"
            placeholder="Task Title"
            autoFocus
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            ref={taskInputRef}
          />
          <textarea
            placeholder="Task Description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
          <input
            type="date"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
          />
        </div>
        <div className="input-section-buttons">
          <button onClick={handleAddTask} className="add-task-button">
            {globalEditTaskId == -1 ? "Add Task" : "Update Task"}
          </button>
          <button onClick={handleClearTask}>Clear Task</button>
        </div>
      </div>
      <div className="list-section">
        <ul>
          {inProgressTasks.map((task) => {
            return (
              <li key={task.taskId}>
                <Task
                  task={task}
                  handleEditTask={handleEditTask}
                  handleDeleteTask={handleDeleteTask}
                  handleMarkAsCompleted={handleMarkAsCompleted}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
