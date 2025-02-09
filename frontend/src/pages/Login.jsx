import React from 'react'
import { useState,useEffect,useContext } from 'react'

const Login = () => {
  const onSubmitHandler=async (e)=>{
    e.preventDefault();

  }
  const [currentState,setCurrentState]=useState('Sign Up');
  return (
    <form onSubmit={onSubmitHandler} className='border flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className="inline-flex items-center gap-2 mb-2 mt-10 border">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
     {currentState==='Login' ? '': <input type="text" placeholder='Name' className="w-full px-3 py-2 border border-gray-800"  required/>}
      <input type="email" placeholder='Email' className="w-full px-3 py-2 border border-gray-800"  required/>
      <input type="password" placeholder='password' className="w-full px-3 py-2 border border-gray-800" required />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {
          currentState ==="Login"
          ? <p className='cursor-pointer' onClick={()=>setCurrentState('Sign Up')}>Create account</p>
          : <p className='cursor-pointer' onClick={()=>setCurrentState('Login')}>Login Here</p>
        }
      </div>
      <button type='submit' className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState==='Login' ? 'Sign In'  :"Sign Up"}</button>
    </form>
  )
}

export default Login
