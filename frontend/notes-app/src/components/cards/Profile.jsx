// eslint-disable-next-line no-unused-vars
import React from 'react'
import { getInitials } from '../../utils/helper'

// eslint-disable-next-line react/prop-types
const Profile = ({ userInfo, onLogout }) => {
  // Add a check for userInfo to handle cases where it might be undefined
  if (!userInfo) {
    return null; // Or return a loading indicator if userInfo is still being fetched
  }

  return (
    <div className='flex items-center gap-3'>
      <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100'>
        {/* eslint-disable-next-line react/prop-types */}
        {getInitials(userInfo.fullName)}
      </div>
      <div>
         {/* eslint-disable-next-line react/prop-types */}
        <p className='text-sm font-medium'>{userInfo.fullName}</p>
        <button className='text-sm text-slate-700 underline' onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Profile
