import React from "react";
import { Link, Outlet } from "react-router-dom"; // Used to render child routes
import "./Home.css";
export default function Layout() {
  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Task Manager</h2>
      <Link to="/taskManager">Manage Tasks</Link>
      <Link to="/taskList">List Completed Tasks</Link>
      <Outlet />
    </div>
  );
}
