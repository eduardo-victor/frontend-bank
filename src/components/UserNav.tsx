import React from 'react'
import Icon from '../assets/userNavImages/icon.png'
import {useState} from 'react'
import { Link } from 'react-router-dom'

type GetProps = {
    image: string,
}

const UserNav = (props: GetProps) => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    
    return (
        <div className='w-screen h-[80px] z-50 bg-yellow drop-shadow-lg md:w-full'>
            <div className='px-4 flex justify-between items-center w-full h-full '>
                <div className='flex items-center'>
                    <img src={props.image} alt='Logo' className='w-11 mr-4 sm:w-13 hover:cursor-pointer'/>
                </div>
                <div className='hidden md:flex pr-4'>
                    <div>oi</div>
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    {!nav ? <img src={Icon} alt=""/> : <div className='w-8 text-bluedefault hover:cursor-pointer '>KKKK</div>}
                    
                </div>
            </div>
            <ul className={!nav ? 'hidden' : 'absolute bg-yellow w-full px-8 lg:hidden'}>
            <Link to="/"><li className='border-b-2 border-bluedefault w-full text-bluedefault hover:cursor-pointer'>Home</li></Link>
            <div className='flex flex-col my-4'>
                <button className='text-white border bg-bluedefault border-bluedefault hover:bg-white hover:text-bluedefault rounded-md px-8 py-3 mb-4'>Login</button>
            </div>
        </ul>
        </div>
      )
    }

export default UserNav