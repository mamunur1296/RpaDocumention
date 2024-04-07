import React from "react";
import { Outlet } from "react-router-dom";
import VarticalNavChild from "../Nave/VarticalNavChild";
import NaveBar from "../Nave/NaveBar";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NaveBar />
      {/* Content Wrapper */}
      <div className="flex-grow flex">
        {/* Vertical Navigation */}
        <div className="w-1/4 bg-gray-200">
          <VarticalNavChild />
        </div>
        {/* Main Content */}
        <div className="w-3/4 p-4">
          <Outlet />
        </div>
      </div>
      {/* Footer */}
      <div className="w-full text-center py-4 bg-gray-300">
        <h1>This is Footer page</h1>
      </div>
    </div>
  );
};

export default Main;