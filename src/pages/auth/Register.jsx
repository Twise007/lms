import React, { useState } from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'
import { TiUserAddOutline  } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import PasswordInput from '../../components/PasswordInput'
import { useEffect } from 'react'


const initialState = {
    name : "",
    email : "",
    password : "",
    password2 : "",
}

const Register = () => {
   const [formData, setFormData] = useState (initialState);
   const { name, email, password, password2 } = formData;
   const handleInputChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
   };

   const [uCase, setUCase] = useState(false)
   const [uNum, setUNum] = useState(false)
   const [uCharater, setUCharater] = useState(false)
   const [uPassLenght, setUPassLenght] = useState(false)

   const timesIcon = <FaTimes color='red' size={15} />
   const checkIcon = <FaCheck color='green' size={15} />

    const switchIcon = (condition) => {
        if (condition) {
            return checkIcon
        }
        return timesIcon
    }

    useEffect(() => {
        // check lower and upper case
      if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        setUCase (true)
      } else {
        setUCase (false)
      }

        // Check For Numbers
      if (password.match(/([0-9])/)) {
        setUNum (true)
      } else {
        setUNum (false)
      }

        // Check For Special char
      if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
        setUCharater (true)
      } else {
        setUCharater (false)
      }

      // Check For Password lenght
      if (password.length > 5) {
        setUPassLenght (true)
      } else {
        setUPassLenght (false)
      }
    }, [password])

const registerUser = () => {};
  return (
    <div className="hero bg-bg-off-white pt-20 pb-5">
        <div className="">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-bg-off-white">                
                <div className="card-body">
                    <div className="card-actions justify-center">
                        <TiUserAddOutline size={50} className="text-bg-black "/> 
                    </div>
                    <div className="card-actions justify-center">                 
                        <h1 style={{fontSize:"30px", fontWeight:"500"}} className='text-bg-purple'>Register</h1> 
                    </div>
                    <form onSubmit={registerUser}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-bg-black">Name</span>
                    </label>
                    <input type="text" placeholder="Name" required name='name' value={name} onChange={handleInputChange} className="input input-bordered bg-bg-white text-bg-black" />
                    </div>
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
                        <PasswordInput
                        children="Confirm Password"
                        placeholder=" Confirm Password"
                        name="password2"
                        value={password2}
                        onChange={handleInputChange}
                        />

                        {/*password strenght*/}
                        <ul className="menu menu-compact bg-bg-white m-2 rounded-box text-bg-black ">
                            <li>
                                <p>
                                {switchIcon(uCase)}
                                Lowercase & Uppercase
                                </p>
                            </li>
                            <li>
                                <p>
                                {switchIcon(uNum)}
                                Number 0-9
                                </p>
                            </li>
                            <li>
                                <p>
                                {switchIcon(uCharater)}
                                Special Character (!@#$%*)
                                </p>
                            </li>
                            <li>
                                <p>
                                {switchIcon(uPassLenght)}
                                At least 6 Character
                                </p>
                            </li>
                            </ul>
                        <Button>register</Button>
                    </form>
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