import React from "react";

const AddProject = () => {
  return (
    <div className="relative w-fit mx-auto">
      <div className="relative">
        <img src="/Header-bg.svg" alt="header-bg" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <div className="flex items-center">
            <img
              src="/left-arrow.svg"
              alt="left-arrow"
              className="mr-2 h-5 w-5"
            />
            <span className="text-white text-2xl font-bold px-4 py-2 rounded">
              Create Project
            </span>
          </div>
          <div className="absolute inset-0 flex justify-center items-center">
            <img src="/logo-icon.svg" alt="logo-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
