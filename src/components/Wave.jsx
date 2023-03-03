import React from 'react'
import Htitle from './Htitle'
import { Wave1, Wave2 } from './Styles'

const Wave = ({children}) => {
  return (
    <div className=''>
      <div className='navbar bg-bg-off-white' style={{zIndex:"12",position:"fixed"}}>
        <Htitle/>
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