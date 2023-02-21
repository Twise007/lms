import React from 'react'
import { NavLink } from 'react-router-dom'

const PageMenu = () => {
  return (
    <div className='hero'>
        <div className="flex-none bg-bg-purple text-bg-white p-2 w-96 rounded-box">
            <ul className="menu menu-horizontal px-1 active:bg-bg-black ">
            <li>
                <NavLink to="/profile" className="hover:bg-bg-white hover:text-bg-purple mx-1">
                    Profile
                </NavLink>
            </li>
            <li>
                <NavLink to="/changepassword" className="hover:bg-bg-white hover:text-bg-purple mx-1">
                    Change Password
                </NavLink>
            </li>
            <li>
                <NavLink to="/userslist" className="hover:bg-bg-white hover:text-bg-purple mx-1">
                    Users
                </NavLink>
            </li>
            </ul>
        </div>
    </div>
  )
}

export default PageMenu