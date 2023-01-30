import React from 'react'

const Button = ({children}) => {
  return (
    <div className='form-control mt-6'>
      <button className="btn bg-bg-purple text-bg-white hover:bg-bg-white hover:text-bg-purple" style={{border:"none"}}>{children}</button>
    </div>
  )
}

export default Button