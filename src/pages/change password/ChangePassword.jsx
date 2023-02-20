import React, { useState } from 'react'
import Button from '../../components/Button'
import PageMenu from '../../components/PageMenu';
import PasswordInput from '../../components/PasswordInput';

const initialState = {
    oldPassword : "",    
    password : "",
    password2 : "",
}

const ChangePassword = () => {
    const [formData, setFormData] = useState (initialState);
    const { oldPassword, password, password2 } = formData;
    const handleInputChange = (e) => {
     const {name, value} = e.target
     setFormData({...formData, [name]: value})
    };

const changePassword = () => {};
  return (
    <div className='bg-bg-off-white  min-h-screen pt-20'>
      <PageMenu />
      <div className='hero'>
        <div className="card w-96 bg-bg-off-white text-bg-black shadow-2xl my-5 ">
          <h1 className='text-bg-black text-3xl font-bold p-2 '>Change Password:</h1>
          <div className="card-body text-center">
            <form onSubmit={changePassword}>
                <PasswordInput
                    children="Password"
                    placeholder="Password"
                    name="oldPassword"
                    value={oldPassword}
                    onChange={handleInputChange}
                    />
                <PasswordInput
                    children="New Password"
                    placeholder="New Password"
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

                <Button>change password</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword