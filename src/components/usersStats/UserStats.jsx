import React from 'react'
import { BiUserCheck, BiUserMinus, BiUserX } from 'react-icons/bi'
import { FaUsers } from 'react-icons/fa'
import InfoBox from './InfoBox'

//Icons
const icon1 = <FaUsers size={40} className='text-bg-purple'/>
const icon2 = <BiUserCheck size={40} className='text-green-500'/>
const icon3 = <BiUserMinus size={40} className='text-blue-700'/>
const icon4 = <BiUserX size={40} className='text-error'/>

const UserStats = () => {
  return (
    <div className=''>
        <div className="shadow-2xl rounded-box">
            <h1 className='text-bg-black text-3xl font-bold p-2'>Profile:</h1>
            <InfoBox 
                icon={icon1}
                title={"Total Users"}
                count={"5"}
                bgColor=''
            />
            <InfoBox 
                icon={icon2}
                title={"Verified Users"}
                count={"5"}
                bgColor="c"
            />
            <InfoBox 
                icon={icon3}
                title={"Unverified Users"}
                count={"5"}
                bgColor="c"
            />
                        <InfoBox 
                icon={icon4}
                title={"Suspended Users"}
                count={"5"}
                bgColor="c"
            />
        </div>
    </div>
  )
}

export default UserStats