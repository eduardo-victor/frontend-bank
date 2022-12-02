import React from 'react'

type GetProps = {
    icon: string,
    title: string,
}

const Card = (props: GetProps) => {
  return (
    <div className='w-[40%] h-[15vh] lg:h-[25vh] lg:w-[15%] drop-shadow-md bg-white rounded-md flex flex-col gap-3 items-center hover:transition-all hover:-translate-y-2 hover:duration-150 hover:ease-in-out'>
        <h1 className='text-xl font-inter text-yellow mt-3 [text-shadow:_0_0.2px_0_rgb(0_0_0_/_10%)]'>{props.title}</h1>
        <img src={props.icon} alt=""  className=''/>
    </div>
  )
}

export default Card