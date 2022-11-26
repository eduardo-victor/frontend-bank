import React from 'react'
import UserNav from '../components/UserNav'
import Image from '../assets/commentImages/firstComment.png'

type GetProps = {
  image: string,
  amount: string
}


const UserPage = (props: GetProps) => {
  return (
    <>
      <UserNav image={props.image}/>
      <div className='w-screen h-screen flex flex-col'>
        <div className='w-screen flex justify-between'>
          <h1 className='font-inter text-xl mt-7 ml-4'>R${props.amount}</h1>
          <h1 className='font-inter text-md mt-7 mr-4'>Welcome, {}.</h1>
        </div>
      <div className='w-full h-screen flex items-end'>
        <div className='w-screen h-[90vh] bg-yellow rounded-t-2xl'>

        </div>
      </div>
      </div>

    </>
  )
}

export default UserPage