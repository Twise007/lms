import React, { useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import Button from '../components/Button'

const Homeform = () => {
  return (
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl glass">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">                
                <div className="card-body">
            <div className="card-actions justify-center">
                <BiUserCircle size={50} className="text-bg-white"/> 
            </div>
            <div className="card-actions justify-center">                 
                <h1 style={{fontSize:"30px", fontWeight:"500"}} className='text-bg-purple'>Login</h1> 
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text text-bg-white">Email</span>
            </label>
            <input type="text" placeholder="email" className="input input-bordered bg-bg-off-white text-bg-black" />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text text-bg-white">Password</span>
            </label>
            <input type="text" placeholder="password" className="input input-bordered bg-bg-off-white text-bg-black" />
            <label className="label">
                <a href="/" className="label-text-alt link link-hover text-bg-black">Forgot password ?</a>
            </label>
            </div>
            <Button>login</Button>
        </div>
        </div>
    </div>
  )
}

export default Homeform