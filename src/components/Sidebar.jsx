import React from "react";
import { Link } from "react-router";
import { NavLink } from "react-router";

const Sidebar = () => {
  const linkClass = "block w-full px-3 py-2 rounded-md hover:underline underline-offset-4 decoration-2 transition";
  
  return (
    <>
      <div className="bg-[#FF6767] flex w-66 mt-5 rounded ">
        <ul className="text-white p-5 space-y-2 cursor-pointer ">
          <li>
            <NavLink to="/" className={({isActive})=> `${linkClass} ${isActive ? "text-[#FF6767] bg-white font-semibold": ""}`}>All Tasks</NavLink>
          </li>
          <li>
            <NavLink to="/completed" className={({isActive})=>`${linkClass} ${isActive ? "text-[#FF6767] bg-white font-semibold" : ""}`}>Completed</NavLink>
          </li>
          <li>
            <NavLink to="/pending"  className={({isActive})=> `${linkClass} ${isActive ? "text-[#FF6767] bg-white font-semibold" : ""}`} >Pending</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
