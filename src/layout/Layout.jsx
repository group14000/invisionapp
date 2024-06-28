import React from "react";
import Sidebar from "../sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Sidebar />
      <main className="flex-grow p-4">{children}</main>
    </div>
  );
};

export default Layout;
