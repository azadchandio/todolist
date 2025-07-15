import React from "react";
import { Link } from "react-router";
import { NavLink } from "react-router";

const Sidebar = () => {
    const Linkclass = "hover:hover:underline"
  return (
    <>
      <div className="bg-[#FF6767] flex w-66 mt-5 rounded ">
        <ul className="text-white p-5 space-y-2 cursor-pointer ">
          <li>
            <NavLink to="/" className={Linkclass}>All tasks</NavLink>
          </li>
          <li>
            <Link to="/completed">Completed</Link>
          </li>
          <li>
            <NavLink to="/pending">Pending</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
