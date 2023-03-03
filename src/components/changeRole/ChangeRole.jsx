import React from 'react'
import { useState } from 'react'
import { FaCheck } from 'react-icons/fa'


const ChangeRole = () => {
    const [staffRole, setStaffRole] = useState("")
  return (
    <form className='stats '>
        <select value={staffRole} onChange={(e) => setStaffRole(e.target.value)} className="select w-full select-bordered  max-w-xs">
            <option disabled selected value="">--select--</option>
            <option value="admin">Admin</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
            <option value="suspended">Suspended</option>
        </select>
        <button className="btn bg-bg-purple text-bg-white hover:bg-bg-white hover:text-bg-purple ml-1" style={{border:"none"}}><FaCheck/></button>
    </form>
  )
}

export default ChangeRole