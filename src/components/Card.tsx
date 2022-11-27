import React from 'react'

type GetProps = {
    icon: string,
    title: string,
    comment : string
}

const Card = (props: GetProps) => {
  return (
    <div className='w-[90%] h-[15vh] lg:w-[50%] drop-shadow-md bg-white rounded-md flex flex-row items-center hover:transition-all hover:-translate-y-2 hover:duration-150 hover:ease-in-out'>
        <img src={props.icon} alt=""  className='ml-4'/>
        <div className='w-full h-full ml-6 mt-4'>
            <h1 className='text-xl font-inter text-yellow [text-shadow:_0_0.2px_0_rgb(0_0_0_/_10%)]'>{props.title}</h1>
            <h3 className='font-inter text-[#818181]'>{props.comment}</h3>
        </div>
    </div>
  )
}

export default Card