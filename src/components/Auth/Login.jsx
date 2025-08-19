import React from 'react'
import { useState } from 'react';
const Login = ({handleLogin}) => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("form Submitted")
    
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-gray-800'>
        <div className='border-2 border-emerald-400 p-20 rounded-2xl'>
          <form action="" className='flex flex-col items-center justify-center' 
          onSubmit={(e)=>{
            submitHandler(e);
            // console.log(email + " " + password);
            handleLogin(email, password);
            setEmail("");
            setPassword("");
          }}>
            <input 
            className='text-white outline-none border-2 border-emerald-400 py-4 px-5 text-xl rounded-full bg-transparent placeholder:text-gray-400' type="email" 
            placeholder='Enter your email'
            id='email' 
            value={email} 
            onChange={(e) =>{
              setEmail(e.target.value)
            }}
            />
            <input 
            className='text-white outline-none border-2 border-emerald-400 py-4 px-5 text-xl rounded-full bg-transparent placeholder:text-gray-400 mt-5' 
            type="password" 
            placeholder='Enter your password' 
            id='pass'
            value={password} 
            onChange={(e) =>{
              setPassword(e.target.value)
            }}
            />
            <button className='text-white border-none outline-none border-2 bg-emerald-500 py-2 px-5 text-xl rounded-full  placeholder:text-white mt-5'>Log in</button>
          </form>
        </div>
    </div>
  )
}

export default Login
