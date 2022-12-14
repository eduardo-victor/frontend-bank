import React from 'react'
import Logout from '../assets/userNavImages/logout.png'
import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Notify } from 'notiflix'

type GetProps = {
    image: string,
}

const UserNav = (props: GetProps) => {

    const navigate = useNavigate()

    const logout = () => {
        {Swal.fire({
          title: 'Are you sure you want to exit?',
          confirmButtonText: 'Yes',
          showCancelButton: true,
        }).then((result) =>{
          if (result.isConfirmed){
            localStorage.clear()
            navigate('/')
            Notify.info('Signed out', {timeout: 1300, position:'center-top'})
          }
        })}
        localStorage.clear() 
      }
    
    return (
        <div className='w-full h-[100px] z-50 bg-yellow [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)] md:w-full'>
            <div className='px-4 flex justify-between items-center w-full h-full '>
                <div className='flex items-center'>
                    <h1 className='font-quicksand font-bold text-4xl text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)]'>bankey</h1>
                </div>
                <div className='hidden md:flex pr-4 hover:cursor-pointer'>
                    <img src={Logout} alt="" onClick={logout}/>
                </div>
                <div className='md:hidden hover:cursor-pointer'>
                    <img src={Logout} alt="" onClick={logout} className='w-10' />
                </div>
            </div>
        </div>
      )
    }

export default UserNav