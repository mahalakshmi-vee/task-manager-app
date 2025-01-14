import React from "react";
import TaskList from "./TaskList";
import TaskManager from "./TaskManager";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="taskManager" element={<TaskManager />} />
          <Route path="taskList" element={<TaskList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
