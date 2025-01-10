import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NavbarTop from "./components/NavbarTop";
import NavbarBottom from "./components/NavbarBottom";

const Layout: React.FC = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  return (
    <div className="flex flex-row">
      <Sidebar isCreateOpen={isCreateOpen} setIsCreateOpen={setIsCreateOpen} />
      <div className="1600:ml-80 1300:ml-60 700:ml-16 w-full">
        <NavbarTop />
        <div className="my-[60px] 700:mt-0">
          <Outlet />
        </div>
        <NavbarBottom setIsCreateOpen={setIsCreateOpen} />
      </div>
    </div>
  );
};

export default Layout;
