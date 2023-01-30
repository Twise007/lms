import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { BiLogIn } from 'react-icons/bi'


const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-bg-black text-bg-white">
      <div className="items-center grid-flow-col">
        <BiLogIn size={35}/><p>Copyright © 2023 - All right reserved</p>
      </div> 
      <div className="grid-flow-col  md:place-self-center md:justify-self-end">
        <Link to="https://twitter.com" target="_blank" className={`btn btn-ghost btn-circle`}>
          <p><AiFillTwitterCircle size={25}/></p>
        </Link>
        <Link to="https://facebook.com" target="_blank" className={`btn btn-ghost btn-circle`}>
          <p><BsFacebook size={25}/></p>
        </Link>
        <Link to="https://instagram.com" target="_blank" className={`btn btn-ghost btn-circle`}>
          <p><AiFillInstagram size={25}/></p>
        </Link>
      </div>
    </footer>
  )
}

export default Footer