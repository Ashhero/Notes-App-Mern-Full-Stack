// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
// import {FaRegEye,FaRegEyeSlash} from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const Passwordinput = ({value,onChange,placeholder}) => {
        const [isShowPassword,setShowPassword] = useState(false);

    // eslint-disable-next-line no-unused-vars
    const toggleShowPassword = ()=>{
        setShowPassword(!isShowPassword);
    };

  return (
    <div className='flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3'>
      <input
      value={value}
      onChange={onChange}
      type="password"
      placeholder={placeholder || "Password"}
      className='w-full text-sm bg-transparent py-3 mr-3 rounded outline-none'/>

      {/* <FaRegEye
      size={17}
      className='text-primary cursor-pointer'
      onclick={()=>toggleShowPassword()}/> */}
    </div>
  )
}

export default Passwordinput
