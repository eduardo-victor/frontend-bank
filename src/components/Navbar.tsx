import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[100px] bg-[#FFFF] [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)] flex items-center justify-between pl-8'>
        <div className=''>
            <h1 className='font-quicksand font-bold text-4xl text-yellow [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)]'>bankey</h1>
        </div>
        <div>
            <button className='py-2 px-8 mr-8 font-inter border-2 border-yellow bg-yellow rounded-sm hover:bg-transparent hover:border-2 hover:border-yellow hover:text-yellow hover:transition text-white'>Login Here!</button>
        </div>
    </div>
  )
}

export default Navbar