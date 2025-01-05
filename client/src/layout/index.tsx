import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="1600:ml-80 1300:ml-60 600:ml-16 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
