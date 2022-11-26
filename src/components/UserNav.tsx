import React from 'react'
import Logout from '../assets/userNavImages/logout.png'
import {useState} from 'react'
import { Link } from 'react-router-dom'

type GetProps = {
    image: string,
}

const UserNav = (props: GetProps) => {
    function Signout(){
        console.log('Saiu')
    }
    
    return (
        <div className='w-screen h-[100px] z-50 bg-yellow [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)] md:w-full'>
            <div className='px-4 flex justify-between items-center w-full h-full '>
                <div className='flex items-center'>
                    <img src={props.image} alt='Logo' className='w-16 mr-4 lg:w-20'/>
                </div>
                <div className='hidden md:flex pr-4'>
                    <img src={Logout} alt="" onClick={Signout}/>
                </div>
                <div className='md:hidden'>
                    <img src={Logout} alt="" onClick={Signout} className='w-10' />
                </div>
            </div>
        </div>
      )
    }

export default UserNav