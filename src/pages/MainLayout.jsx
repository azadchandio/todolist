import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 mt-10 overflow-hidden">
        <Sidebar />
      </div>
      <main className="flex-1 p-6 overflow-y-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
