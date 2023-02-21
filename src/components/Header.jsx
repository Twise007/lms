import React from 'react'
import { BiLogIn } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'
import { RxDropdownMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'


const Header = () => {

  return (
    <div className="navbar bg-bg-white"style={{position:"fixed", zIndex:"999"}}>
        <div className="flex-1">
            <a href='/' className="btn  bg-bg-off-white normal-case text-xl p-2 shadow-2xl text-bg-purple hover:bg-bg-purple hover:text-bg-white" style={{border:"none"}}><BiLogIn size={35} className="mr-2"/>LMS</a>
        </div>
        <div className="flex-none text-bg-black">
            <ul className="menu menu-horizontal px-1">
                <li><p><FaUserCircle size={20} />Hi,<span className='text-bg-purple'>Tunde</span></p></li>
            </ul>
            <div className="dropdown dropdown-end">
                <li tabIndex={0} className={`btn btn-ghost btn-circle`}>
                    <p><RxDropdownMenu size={25}/></p>
                </li>
                <ul tabIndex={0} className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-bg-white rounded-box w-52 duration-700`}> 
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/">Logout</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header