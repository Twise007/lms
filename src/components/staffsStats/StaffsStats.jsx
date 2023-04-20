import React from 'react'
import { BiUserCheck, BiUserMinus, BiUserX } from 'react-icons/bi'
import { FaUsers } from 'react-icons/fa'
import InfoBox from './InfoBox'

//Icons
const icon1 = <FaUsers size={40} className='text-bg-purple'/>
const icon2 = <BiUserCheck size={40} color='green'/>
const icon3 = <BiUserMinus size={40} color='blue'/>
const icon4 = <BiUserX size={40} color='red'/>

const StaffsStats = () => {
  return (
    <div className='shadow-2xl rounded-box'>
        <h1 className='text-bg-black text-3xl font-bold p-2'>Profile:</h1>
        <div className="justify-center card-actions">
            <InfoBox 
                icon={icon1}
                title={"Total"}
                count={"27"}
                bgColor=''
            />
            <InfoBox 
                icon={icon2}
                title={"Verified"}
                count={"18"}
                bgColor=""
            />
            <InfoBox 
                icon={icon3}
                title={"Unverified"}
                count={"6"}
                bgColor=""
            />
            <InfoBox 
                icon={icon4}
                title={"Suspended"}
                count={"3"}
                bgColor=""
            />
        </div>
    </div>
  )
}

export default StaffsStats