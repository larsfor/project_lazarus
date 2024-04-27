import React from "react";
import TopNavbar from "./TopNavbar";
import { Outlet } from "react-router-dom";

export default function MainScreen() {
  return (
    <div>
      <TopNavbar />
      <Outlet />
    </div >
  )
};
