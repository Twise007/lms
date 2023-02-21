import React from 'react'
import { BiLogIn } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { Wave1, Wave2 } from './Styles'

const Wave = ({children}) => {
  return (
    <div className=''>
      <div className='navbar bg-bg-off-white' style={{zIndex:"9",position:"fixed"}}>
        <div className="flex-1" style={{ zIndex:"10",border:"none"}}>
            <Link to="/" className="btn bg-bg-purple normal-case text-xl p-2 mt-2 shadow-2xl text-bg-off-white hover:bg-bg-white hover:text-bg-purple" style={{border:"none"}}><BiLogIn size={35} className="mr-2"/>LMS</Link>
        </div>
        <Wave1>
          {/* gotten from https://www.shapedivider.app/ */}
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill">
            </path>
          </svg>
        </Wave1>
      </div>
      {children}
      <footer className='footer bg-bg-off-white ' style={{position:"sticky"}}>
        <Wave2>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
          </svg>
        </Wave2>
      </footer>

    </div>
  )
}
export default Wave