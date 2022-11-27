import React from 'react'
import UserNav from '../components/UserNav'
import Image from '../assets/commentImages/firstComment.png'
import Card from '../components/Card'

const UserPage = () => {
  return (
    <>
      <UserNav image={'a'}/>
      <div className='w-screen h-screen flex flex-col'>
        <div className='w-screen flex justify-between'>
          <h1 className='font-inter text-lg mt-7 ml-4'>R$   {'7.895,00'}</h1>
          <h1 className='font-inter text-lg mt-7 mr-4'>Welcome, {'User'}.</h1>
        </div>
      <div className='w-full h-screen flex items-end'>
        <div className='w-screen h-[90vh] bg-yellow rounded-t-2xl flex justify-center items-center'>
          <Card/>
        </div>
      </div>
      </div>

    </>
  )
}

export default UserPage