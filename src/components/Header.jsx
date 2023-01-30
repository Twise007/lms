import React, { useState } from 'react'
import { BiLogIn } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'
import { RxDropdownMenu } from 'react-icons/rx'


const Header = () => {
    const [open, setOpen] = useState(true);

  return (
    <div className="navbar bg-bg-white">
        <div className="flex-1">
            <a href='/' className="btn btn-ghost bg-bg-purple normal-case text-xl p-2 text-bg-black"><BiLogIn size={35} className="mr-2"/>LMS</a>
        </div>
        <div className="flex-none text-bg-black">
            <ul className="menu menu-horizontal px-1">
                <li><p><FaUserCircle size={20} />Hi,<span className='text-bg-purple'>Tunde</span></p></li>
            </ul>
            <div className="dropdown dropdown-end">
                <li tabIndex={0} className="btn btn-ghost btn-circle">
                    <p className={`${!open && "rotate-180"}`} ><RxDropdownMenu size={25} onClick={()=> setOpen(!open)}/></p>
                </li>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-bg-white rounded-box w-52">
                    <li>
                    <a className="justify-between">
                        Profile
                    </a>
                    </li>
                    <li><a>Login</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header