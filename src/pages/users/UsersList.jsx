import React from 'react'
import PageMenu from '../../components/PageMenu'
import UserStats from '../../components/usersStats/UserStats'

const UsersList = () => {
  return (
    <div className='bg-bg-off-white min-h-screen pt-20 px-10'>
    <PageMenu />
    <UserStats />
    </div>
  )
}

export default UsersList