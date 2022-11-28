import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import hideIcon from '../assets/images/eyeslash.png'

const LoginPage = () => {

  return (
    <div className='w-full h-screen bg-yellow flex items-center justify-center flex-col gap-4'>
        <Link to="/" className='font-quicksand font-bold text-6xl text-white [text-shadow:_0_2px_0_rgb(0_0_0_/_20%)] hover:transition-all hover:translate-y-1 hover:duration-300 hover:ease-in'>bankey</Link>
        <div className='w-[85vw] h-[40vh] lg:w-[20vw] lg:h-[45vh] md:w-[40vw] sm:w-[50vw] bg-white rounded-md shadow-md flex flex-col items-center justify-center'>
        <form className='h-[80vh] w-[85vw] flex flex-col items-center justify-center gap-6 '>
                <h1 className='font-inter text-3xl text-yellow font-bold [text-shadow:_0_2px_0_rgb(0_0_0_/_20%)]'>SIGN IN</h1>
                <input type="text" placeholder='CPF' className='py-2 px-8 bg-[#F4F4F4] border-b-4 border-yellow outline-none'/>
                <input type="password" placeholder='Password' className='py-2 px-8 bg-[#F4F4F4] border-b-4 border-yellow outline-none'/>
                
                <button className='py-2 px-[12vh] lg:px-[11vh] font-inter border-2 border-white bg-yellow rounded-sm hover:bg-transparent hover:border-2 hover:border-yellow hover:text-yellow hover:transition text-white'>Register</button>
        </form>
            <Link to="/register" className='font-inter text-sm mb-10 hover:text-yellow'>Don't have a key? Click here!</Link>
        </div>
    </div>
  )
}

export default LoginPage