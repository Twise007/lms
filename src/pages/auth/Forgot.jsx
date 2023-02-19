import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Waves from '../../components/Waves'

const initialState = {
    email: "",
  };


const Forgot = () => {
    const [formData, setFormData] = useState(initialState);
    const { email } = formData;  
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    };


const forgotPassword = () => {};
  return (
    <div className="hero min-h-screen bg-bg-purple">
        <Waves />
        <div className="">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl glass">                
                <div className="card-body">
                    <div className="card-actions justify-center">
                        <AiOutlineMail size={50} className="text-bg-white"/> 
                    </div>
                    <div className="card-actions justify-center">                 
                        <h1 style={{fontSize:"30px", fontWeight:"500"}} className='text-bg-purple'>Forgot Password</h1> 
                    </div>
                    <form onSubmit={forgotPassword}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-bg-white">Email</span>
                    </label>
                    <input type="email" placeholder="Email" required name='email' value={email} onChange={handleInputChange} className="input input-bordered bg-bg-off-white text-bg-black" />
                    </div>
                    <Button>get reset email</Button>
                    </form>
                    <Link to="/" className="label-text-alt link link-hover mb-1 text-bg-black">Home</Link>
                    <Link to="/login" className="label-text-alt link link-hover mb-1 text-bg-black">Login</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Forgot