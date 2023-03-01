import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const PasswordInput = ({placeholder, name, value, onChange, onPaste, children }) => {
    const [showPassword, setShowPassword] = useState(false)
    const togglePassword = () => {
        setShowPassword(!showPassword)
    }


  return (
    <div className='form-control'>
        <label className="label">
            <span className="label-text text-bg-black">{ children }</span>
        </label>
        <div className="input-group">
        <input 
        type={showPassword ? "text" : "password"} 
        placeholder={placeholder} 
        required 
        name={name} 
        value={value} 
        onChange={onChange} 
        onPaste={onPaste}
        className="input input-bordered bg-bg-white text-bg-black" 
        style={{width:'100%'}}
        />
            <span className="bg-bg-black text-bg-white" onClick={togglePassword}>
                {showPassword ? (<AiOutlineEyeInvisible size={20} />) : (<AiOutlineEye size={20}/>) }
            </span>
        </div>
    </div>
  )
}

export default PasswordInput