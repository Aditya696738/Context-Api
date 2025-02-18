import React from 'react'
import { useState , useContext } from 'react';
import UserContext from '../Context/context';

function Login() {

const[Username , SetUsername] = useState('')
const [Password, SetPassword] = useState('')

const {Setuser} = useContext(UserContext)

const handleSubmit = (e)=>{
  e.preventDefault()
  Setuser({Username , Password})
}
  return (
    <div>
        <h1 className='text-[2rem] text-purple-600 font-bold font-mono text-center'>Welcome  </h1>
       <div className='box flex flex-col items-center h-[30vh] w-[40vw] bg-black text-white mx-auto mt-10 p-4 rounded-lg'>
        <input value={Username} onChange={(e)=>SetUsername(e.target.value)} type="text" placeholder='Enter your name' className='text-red-500 w-[90%] p-2 m-2 rounded-lg font-mono'/>
        <input value={Password} onChange={(e)=>SetPassword(e.target.value)} type="text" placeholder='Password' 
        className='text-purple-600 w-[90%]  p-2 m-2 rounded-lg font-mono'/>
        <button onClick={handleSubmit} className='mt-[2rem] font-mono bg-white h-[40px] w-[80px] rounded-lg text-black text-[1.2rem] font-semibold'>Submit</button>
        </div>
    </div>
  )
}

export default Login
