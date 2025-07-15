import React from 'react'
import { Link } from 'react-router'
import { NavLink } from 'react-router'

const Sidear = () => {
  return (
    <>
    <div className='bg-[#FF6767] flex w-66 mt-5 rounded h-screen'>
    <ul className='text-white p-5 space-y-2 cursor-pointer '>
        <li>
            <NavLink to="/">
                
            All tasks
            </NavLink>

        </li>
        <li>
            <Link to="/completed">
                Completed
            </Link>
        </li>
        <li>
            <NavLink to="/pending">
                Pending
            </NavLink>
        </li>
    </ul>
    </div>
    </>
  )
}

export default Sidear