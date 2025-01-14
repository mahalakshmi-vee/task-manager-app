import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  globalEditTaskId: -1,
};
const taskSlice = createSlice({
  name: "Tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        taskId: Date.now(),
        taskTitle: action.payload.taskTitle,
        taskDescription: action.payload.taskDescription,
        taskDate: action.payload.taskDate,
        taskStatus: "InProgress",
      });
    },
    updateTask: (state, action) => {
      const { taskId, taskTitle, taskDescription, taskDate } = action.payload;
      const editTaskIndex = state.tasks.findIndex(
        (task) => task.taskId == taskId
      );
      if (editTaskIndex != -1) {
        state.tasks[editTaskIndex].taskTitle = taskTitle;
        state.tasks[editTaskIndex].taskDescription = taskDescription;
        state.tasks[editTaskIndex].taskDate = taskDate;
      }
    },
    removeTask: (state, action) => {
      const { removeTaskId } = action.payload;
      const filteredTasks = state.tasks.filter(
        (task) => task.taskId != removeTaskId
      );
      state.tasks = filteredTasks;
    },
    setGlobalEditTaskId: (state, action) => {
      state.globalEditTaskId = action.payload;
    },
    clearTask: (state) => {
      state.globalEditTaskId = -1;
    },
    markTaskAsCompleted: (state, action) => {
      const { taskId } = action.payload; 
      const taskIndex = state.tasks.findIndex((task) => task.taskId === taskId);

      if (taskIndex !== -1) {
        state.tasks[taskIndex].taskStatus = "Completed";
      }
    },
  },
});
export const {
  addTask,
  updateTask,
  removeTask,
  setGlobalEditTaskId,
  clearTask,
  markTaskAsCompleted,
} = taskSlice.actions;
export default taskSlice;
