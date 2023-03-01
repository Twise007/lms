import React from 'react'
import { NavLink } from 'react-router-dom'

const PageMenu = () => {
  return (
    <div className="navbar bg-bg-purple text-bg-white w-full rounded ">
        <div className='navbar-start '>
            <NavLink to="/profile" className="hover:bg-bg-white p-2 hover:p-2 rounded hover:text-bg-purple active:bg-amber-500" >
                Profile
            </NavLink>
        </div>
        <div className='navbar-center '>
            <NavLink to="/changepassword" className="hover:bg-bg-white p-2 hover:p-2 rounded hover:text-bg-purple ">
                Change Password
            </NavLink>
        </div>
        <div className='navbar-end '>
            <NavLink to="/staffslist" className="hover:bg-bg-white p-2 hover:p-2 rounded hover:text-bg-purple ">
                Staffs
            </NavLink>
        </div>
    </div>
  )
}

export default PageMenu