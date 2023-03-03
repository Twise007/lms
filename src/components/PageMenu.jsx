import React from 'react'
import { NavLink } from 'react-router-dom'

const PageMenu = () => {
  return (
    <div className="bg-bg-purple text-bg-white w-full rounded flex">
        <div className='grid h-12 flex-grow card place-items-center '>
            <NavLink to="/profile" className="hover:bg-bg-white p-2 hover:p-2 rounded hover:text-bg-purple">
                Profile
            </NavLink>
        </div>
        <div className="divider divider-horizontal bg-bg-white w-1 "></div>   
        <div className='grid h-12 flex-grow card place-items-center'>
            <NavLink to="/changepassword" className="hover:bg-bg-white p-2 hover:p-2 rounded hover:text-bg-purple">
                Change Password
            </NavLink>
        </div>
        <div className="divider divider-horizontal bg-bg-white w-1 "></div>
        <div className='grid h-12 flex-grow card  place-items-center'>
            <NavLink to="/staffslist" className="hover:bg-bg-white p-2 hover:p-2 rounded hover:text-bg-purple">
                Staffs
            </NavLink>
        </div>
    </div>
  )
}

export default PageMenu