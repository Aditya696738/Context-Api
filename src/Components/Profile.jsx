import React from 'react'
import { useContext } from 'react'
import UserContext from '../Context/context'

function Profile() {
  const {user} = useContext(UserContext)
  if(!user) return <div className='text-[2rem] font-mono font-semibold text-center text-red-600 mt-2' >Please Login</div>
  return <div className='text-[2rem] font-mono font-semibold  text-center mt-2'>Welcome {user.Username}</div>
  return (
    <div></div>
  )
}

export default Profile