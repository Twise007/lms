import React, { useState } from 'react'
import { MdPassword } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import PasswordInput from '../../components/PasswordInput'


const initialState = {
    password: "",
    password2: "",
  };


const Reset = () => {
    const [formData, setFormData] = useState(initialState);
    const { password, password2 } = formData;  
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    };


const forgotPassword = () => {};
  return (
    <div className="hero min-h-screen bg-bg-off-white">
        <div className="">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">                
                <div className="card-body">
                    <div className="card-actions justify-center">
                        <MdPassword size={50} className="text-bg-black"/> 
                    </div>
                    <div className="card-actions justify-center">                 
                        <h1 style={{fontSize:"30px", fontWeight:"500"}} className='text-bg-purple'>Reset Password</h1> 
                    </div>
                    <form onSubmit={forgotPassword}>
                    <PasswordInput
                        children="Password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        />
                        <PasswordInput
                        children="Confirm Password"
                        placeholder=" Confirm Password"
                        name="password2"
                        value={password2}
                        onChange={handleInputChange}
                        />
                    <Button>reset password</Button>
                    </form>
                    <Link to="/login" className="label-text-alt link link-hover mb-1 text-bg-black">Login</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reset