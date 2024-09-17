import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const GuestLayout = () => {
  return (
    <div className="bg-gray-300 min-h-screen">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default GuestLayout;
