import React from 'react'
import { BiSearch } from "react-icons/bi";

const Search = ({value, onChange}) => {
    return (
      <div className="form-control text-bg-black rounded-box bg-bg-white">
          <div className="input-group">
              <input type="text" placeholder="Search Staff" value={value} onChange={onChange} className="placeholder:italic input input-bordered bg-bg-white text-bg-black" style={{width:'100%'}}/>
              <span className="bg-bg-purple text-bg-white bold">
                  <BiSearch size={20}/>
              </span>
          </div>
      </div>
    )
  }

export default Search