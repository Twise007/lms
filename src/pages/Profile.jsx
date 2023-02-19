import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Profile = () => {
  return (
    <div className='bg-white hero min-h-screen '>
        <div className="max-w-md">
            <h1 className="text-5xl font-bold">Under construction</h1>
            <Link to="/" className="label-text-alt link link-hover mb-1 text-bg-black"><Button>Go Home</Button></Link>
        </div>
    </div>
  )
}

export default Profile