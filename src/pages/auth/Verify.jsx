import React from 'react'
import Button from '../../components/Button'

const Verify = () => {
  return (
    <div className='bg-bg-off-white hero min-h-screen text-center items-center'>
        <div className='card shadow-2xl p-5'>
            <h1 className='text-bg-black text-3xl font-bold'>Account Verification</h1>
            <p className='text-bg-black pt-3'>To verify your account, click the button below...</p>
            <Button>Verify Account</Button>
        </div>
    </div>
  )
}

export default Verify