import React from 'react'
import Homepic from '../assets/homePic.jpg'


const Home = () => {
  return (
    <div>
        <div className="hero min-h-screen text-bg-off-white" style={{backgroundImage: `url(${Homepic})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content flex-col lg:flex-row">
            <div className=''>
              <h1 className="text-5xl font-bold">Learning Management System</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home