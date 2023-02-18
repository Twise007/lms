import React, { useState } from 'react'
import { TiUserAddOutline  } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import PasswordInput from '../../components/PasswordInput'
import Waves from '../../components/Waves'


const initialState = {
    name : "",
    email : "",
    password : "",
    password2 : "",
}

const Register = () => {
   const [formData, setFormData] = useState (initialState);
   const { name, email, password, password2 } = formData

    const handleInputChange = () => {};
    const loginUser = () => {};



  return (
    <div className="hero min-h-screen bg-bg-purple">
        <Waves />
        <div className="">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl glass">                
                <div className="card-body">
                    <div className="card-actions justify-center">
                        <TiUserAddOutline size={50} className="text-bg-white"/> 
                    </div>
                    <div className="card-actions justify-center">                 
                        <h1 style={{fontSize:"30px", fontWeight:"500"}} className='text-bg-purple'>Register</h1> 
                    </div>
                    <form onSubmit={loginUser}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-bg-white">Name</span>
                    </label>
                    <input type="text" placeholder="Name" required name='name' value={name} onChange={handleInputChange} className="input input-bordered bg-bg-off-white text-bg-black" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-bg-white">Email</span>
                    </label>
                    <input type="email" placeholder="Email" required name='email' value={email} onChange={handleInputChange} className="input input-bordered bg-bg-off-white text-bg-black" />
                    </div>
                        <PasswordInput 
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        />
                        <PasswordInput 
                        placeholder=" Confirm Password"
                        name="password2"
                        value={password2}
                        onChange={handleInputChange}
                        />
                    </form>
                    <Button>register</Button>
                    <Link to="/" className="label-text-alt link link-hover mb-1 text-bg-black">Home</Link>
                    <p style={{fontSize:"12px", fontStyle:"italic"}}> &nbsp; Already have an account? &nbsp; </p>
                    <Link to="/login" className="label-text-alt link link-hover mb-1 text-bg-black">Login</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register