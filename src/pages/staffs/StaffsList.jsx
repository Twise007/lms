import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import ChangeRole from '../../components/changeRole/ChangeRole'
import PageMenu from '../../components/PageMenu'
import Search from '../../components/Search'
import StaffsStats from '../../components/staffsStats/StaffsStats'

const StaffsList = () => {
  return (
    <div className='bg-bg-off-white min-h-screen pt-20 px-10'>
    <PageMenu />
    <StaffsStats />

    <div className="navbar shadow-xl bg-bg-off-white mt-5 rounded-box">
      <div className="flex-1 navbar-start p-1 text-bg-black text-2xl">All Staffs</div>
      <div className="flex-none navbar-end"><Search/></div>  
    </div>

    <div className='overflow-x-auto bg-bg-off-white rounded-box shadow-xl mt-5 text-bg-black'>
      <table className="table w-full ">
        <thead className='bg-bg-purple text-bg-white'>
          <tr>
            <th>s/n</th> 
            <th>Name</th> 
            <th>Email</th> 
            <th>Role</th> 
            <th>Change Role</th>
            <th>Action</th>
          </tr>
        </thead> 
        <tbody>
          <tr className="hover">
            <th>1</th>
            <td>Tunde</td>
            <td>Tundeoke80@gmail.com</td>
            <td>Admin</td>
            <td>
              Change Role
            </td>
            <td>
              <FaTrashAlt size={20} color='red'/>
            </td>
          </tr>
          <tr className="hover">
            <th>2</th>
            <td>Tunde</td>
            <td>Tundeoke80@gmail.com</td>
            <td>Admin</td>
            <td>
              Change Role
            </td>
            <td>
              <FaTrashAlt size={20} color='red'/>
            </td>
          </tr>
          <tr className="hover">
            <th>3</th>
            <td>Tunde</td>
            <td>Tundeoke80@gmail.com</td>
            <td>Admin</td>
            <td>
              <ChangeRole/>
            </td>
            <td>
              <FaTrashAlt size={20} color='red'/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    


    </div>
  )
}

export default StaffsList