import React from 'react'

const InfoBox = ({bgColor, title, count, icon}) => {
  return (
    <div className={`stats ml-3 mt-3 mb-5 shadow-2xl ${bgColor}`}>
        <div className="stats">
            <div className="stat bg-bg-white">
                <div className="stat-figure">{icon}</div>
                <div className="stat-title text-2xl font-bold text-bg-black">{title}{' :'}</div>
                <div className="stat-value text-4xl font-bold text-bg-black">{count}</div>
            </div>
        </div>
      </div>
  )
}

export default InfoBox