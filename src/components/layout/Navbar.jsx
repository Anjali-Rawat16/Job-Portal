import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/careerhublogo.png"; 

const Navbar = () => {
  const activeClass = "text-[#593c8f] border-b-2 border-[#593c8f] pb-1";
  const inactiveClass = "hover:underline text-[#593c8f]";

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white text-[#593c8f] border-2 border-[#f5efff]">

      {/* Left - Logo + Text */}
      <div className="flex items-center gap-0">
        <img src={logo} alt="Career-Hub Logo" className="w-12 h-17" />
        <h2 className="text-xl font-bold">Career-Hub</h2>
      </div>

      {/* Middle - Main Navigation */}
      <div className="flex space-x-6 font-medium">
        <NavLink
          to="/jobs"
          className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
        >
          Find Jobs
        </NavLink>

        <NavLink
          to="/employers"
          className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
        >
          Employers
        </NavLink>

        <NavLink
          to="/admin"
          className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
        >
          Admin
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
        >
          About Us
        </NavLink>
      </div>

      {/* Right - Actions */}
      <div className="flex space-x-4 font-medium">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-1 border border-[#593c8f] bg-[#f5efff]"
              : "px-4 py-1 border border-[#593c8f] hover:bg-[#f5efff]"
          }
        >
          Contact Us
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-1 border border-[#593c8f] bg-[#593c8f] text-white"
              : "px-4 py-1 border border-[#593c8f] bg-[#593c8f] text-white hover:bg-[#4b2f7a]"
          }
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
