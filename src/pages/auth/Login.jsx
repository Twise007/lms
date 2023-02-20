import React, { useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import PasswordInput from '../../components/PasswordInput'

const initialState = {
    email: "",
    password: "",
  };


const Login = () => {
    const [formData, setFormData] = useState(initialState);
    const { email, password } = formData;  
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    };


const loginUser = () => {};
  return (
    <div className="hero bg-bg-off-white pt-20 pb-5">
        <div className="">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-bg-off-white">                
                <div className="card-body">
                    <div className="card-actions justify-center">
                        <BiUserCircle size={50} className="text-bg-black"/> 
                    </div>
                    <div className="card-actions justify-center">                 
                        <h1 style={{fontSize:"30px", fontWeight:"500"}} className='text-bg-purple'>Login</h1> 
                    </div>
                    <div className="card-actions justify-center">                 
                        <h1 className='text-bg-black btn bg-bg-white hover:bg-bg-off-white'>sign in with google</h1> 
                    </div>
                    <div className="card-actions justify-center">                 
                        <h1 style={{fontSize:"20px", fontWeight:"500"}} className='text-bg-black divider'>OR</h1>
                    </div>
                    <form onSubmit={loginUser}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-bg-black">Email</span>
                    </label>
                    <input type="email" placeholder="Email" required name='email' value={email} onChange={handleInputChange} className="input input-bordered bg-bg-white text-bg-black" />
                    </div>
                        <PasswordInput
                        children="Password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        />
                    <Button>login</Button>
                    </form>
                    <Link to="/forgotpassword" className="label-text-alt link link-hover mb-1 text-bg-black">Forgot password?</Link>
                    <Link to="/" className="label-text-alt link link-hover mb-1 text-bg-black">Home</Link>
                    <p style={{fontSize:"12px", fontStyle:"italic"}}> &nbsp; Don't have an account? &nbsp; </p>
                    <Link to="/register" className="label-text-alt link link-hover mb-1 text-bg-black">Register</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login