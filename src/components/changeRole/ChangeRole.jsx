import React from 'react'
import { useState } from 'react'
import { FaCheck } from 'react-icons/fa'


const ChangeRole = () => {
    const [staffRole, setStaffRole] = useState("")
  return (
    <form>
        <select value={staffRole} onChange={(e) => setStaffRole(e.target.value)} className="select w-full select-bordered  max-w-xs">
            <option disabled selected value="">--select--</option>
            <option value="admin">Admin</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
        </select>
        {/*<button>
            <FaCheck size={20}/>
  </button>*/}
    </form>
  )
}

export default ChangeRole