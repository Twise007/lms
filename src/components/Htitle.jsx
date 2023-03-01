import React from 'react'
import { BiLogIn } from 'react-icons/bi'

const Htitle = () => {
  return (
    <div  className="flex-1" style={{ zIndex:"10",border:"none"}}>
       <a href='/' className="btn glass normal-case text-xl p-2 shadow-4xl text-bg-purple hover:bg-bg-purple hover:text-bg-white"><BiLogIn size={35} className="mr-2"/>LMS</a>
    </div>
  )
}

export default Htitle