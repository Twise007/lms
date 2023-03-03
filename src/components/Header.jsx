import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { RxDropdownMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import Htitle from './Htitle'


const Header = () => {

  return (
    <div className="navbar bg-bg-white"style={{position:"fixed", zIndex:"12"}}>
        <Htitle/>
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