import React from 'react'
import { NavLink } from 'react-router-dom'

const PageMenu = () => {
  return (
    <div className="navbar bg-bg-purple text-bg-white w-full rounded ">
        <div className='navbar-start '>
            <NavLink to="/profile" className="hover:bg-bg-white pr-1 hover:p-2 rounded hover:text-bg-purple" activeClassName='!text-bg-purple !bg-bg-white' >
                Profile
            </NavLink>
        </div>
        <div className='navbar-center '>
            <NavLink to="/changepassword" className="hover:bg-bg-white pr-1 hover:p-2 rounded hover:text-bg-purple" activeClassName='!text-bg-purple !bg-bg-white'>
                Change Password
            </NavLink>
        </div>
        <div className='navbar-end '>
            <NavLink to="/staffslist" className="hover:bg-bg-white hover:p-2 rounded hover:text-bg-purple" activeClassName='!text-bg-purple !bg-bg-white'>
                Staffs
            </NavLink>
        </div>
    </div>
  )
}

export default PageMenu