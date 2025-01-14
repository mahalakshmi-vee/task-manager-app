import React from "react";
import { useSelector } from "react-redux";
import "./TaskList.css";
export default function TaskList() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const completedTasks = tasks.filter(
    (task) => task.taskStatus === "Completed"
  );
  return (
    <div>
      <table>
        <thead>
          <td>Title</td>
          <td>Description</td>
          <td>Date</td>
        </thead>
        <tbody>
          {completedTasks.map((task) => {
            return (
              <tr>
                <td>{task.taskTitle}</td>
                <td>{task.taskDescription}</td>
                <td>{task.taskDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
