import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import IconHamburguer from '../assets/images/hamburgerIcon.png'
import xIcon from '../assets/images/xIcon.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () =>{
    setNav(!nav);
  }

  return (
    <>
    <div className='h-[100px] bg-[#FFFF] [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)] flex items-center justify-between pl-8'>
        <div className=''>
            <h1 className='font-quicksand font-bold text-4xl text-yellow [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)]'>bankey</h1>
        </div>
        <div className='sm: hidden'>
            <button className='py-2 px-8 mr-8 font-inter border-2 border-yellow bg-yellow rounded-sm hover:bg-transparent hover:border-2 hover:border-yellow hover:text-yellow hover:transition text-white'>Login Here!</button>
        </div>
        <div className='hidden md:flex pr-4'>
                <Link to="/login"><button className='text-white border bg-yellow border-yellow hover:bg-transparent hover:text-yellow rounded-sm px-10 py-2 mr-4 font-inter font-semibold'>Login</button></Link>
            </div>
            <div className='md:hidden pr-7' onClick={handleClick}>
                {!nav ? <img src={IconHamburguer} alt=""/> : <img src={xIcon} alt=""/>}
            </div>
        </div>
        <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8 lg:hidden'}>
            <div className='flex flex-col my-4 gap-4'>
            <button className='py-3 px-32 font-semibold font-inter border-2 border-yellow md:px-6 bg-yellow rounded-sm hover:bg-transparent hover:border-2 hover:border-yellow hover:text-yellow hover:transition text-white [text-shadow:_0_0.5px_0_rgb(0_0_0_/_20%)]'>Login</button>
            <button className='py-3 px-32 font-semibold font-inter border-2 border-yellow md:px-6 bg-yellow rounded-sm hover:bg-transparent hover:border-2 hover:border-yellow hover:text-yellow hover:transition text-white [text-shadow:_0_0.5px_0_rgb(0_0_0_/_20%)]'>Register</button>
            </div>
        </ul>
    </>
  )
}

export default Navbar