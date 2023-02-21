import React from 'react'
import PageMenu from '../../components/PageMenu'
import StaffsStats from '../../components/staffsStats/StaffsStats'

const StaffsList = () => {
  return (
    <div className='bg-bg-off-white min-h-screen pt-20 px-10'>
    <PageMenu />
    <StaffsStats />
    </div>
  )
}

export default StaffsList