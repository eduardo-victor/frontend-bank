import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div className='w-full h-screen bg-yellow flex items-center justify-center flex-col gap-4'>
        <h1 className='font-quicksand font-bold text-6xl text-white [text-shadow:_0_2px_0_rgb(0_0_0_/_20%)]'>bankey</h1>
        <div className='w-[85vw] h-[80vh] lg:w-[20vw] lg:h-[85vh] bg-white rounded-md shadow-md flex flex-col items-center justify-center'>
            <form className='h-[80vh] w-[85vw] flex flex-col items-center justify-center gap-6 '>
                <input type="text" placeholder='Name' className='py-2 px-8 bg-[#F4F4F4] border-b-4 border-yellow outline-none'/>
                <input type="text" placeholder='Last name' className='py-2 px-8 bg-[#F4F4F4] border-b-4 border-yellow outline-none'/>
                <input type="email" placeholder='Email' className='py-2 px-8 bg-[#F4F4F4] border-b-4 border-yellow outline-none'/>
                <select name="" id="" className='py-2 px-[11.5vh] lg:px-[11vh] lg:py-3 font-inter border-b-4 border-yellow bg-[#F4F4F4]'>
                    <option value="M" className='font-inter'>Male</option>
                    <option value="F" className='font-inter'>Female</option>
                </select>
                <input type="text" placeholder='Phone' className='py-2 px-8 bg-[#F4F4F4] border-b-4 border-yellow outline-none'/>
                <input type="text" placeholder='Wage' className='py-2 px-8 bg-[#F4F4F4] border-b-4 border-yellow outline-none'/>
                <input type="password" placeholder='Password' className='py-2 px-8 bg-[#F4F4F4] border-b-4 border-yellow outline-none'/>
                <input type="date" placeholder='Born Date' className='py-2 px-[8.3vh] lg:px-14 bg-[#F4F4F4] border-b-4 border-yellow outline-none'/>
                <button className='py-2 px-[12vh] lg:px-[11vh] font-inter border-2 border-yellow bg-yellow rounded-sm hover:bg-transparent hover:border-2 hover:border-yellow hover:text-yellow hover:transition text-white'>Register</button>
            </form>
            <Link to="/login" className='font-inter text-sm hover:text-yellow'>Already have key? Click here!</Link>
        </div>
    </div>
  )
}

export default RegisterPage