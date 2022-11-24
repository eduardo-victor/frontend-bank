import React from 'react'

type GetProps = {
    image: string,
    comment : string
}

const Comment = (props: GetProps) => {
  return (
    <div>
        <div className='w-[90vw] h-20 md:h-[12vh] md:w-[70vw] lg:h-[15vh] lg:w-[55vw] drop-shadow-md bg-white rounded-l-[120px] rounded-r-[30px] flex hover:transition-all hover:translate-y-3 hover:duration-150 hover:ease-in-out'>
            <div className='w-[20.5vw] h-20 md:w-[11.5vw] sm:w-[12vw] lg:w-[8.2vw] lg:h-10 rounded-full drop-shadow-md'  >
                <img src={props.image} alt="comentario" />
            </div>
            <div className='h-full w-[50vw] flex items-center justify-center ml-6'>
                <h1 className='font-inter text-[#989898] text-sm font-medium [text-shadow:_0_0.5px_0_rgb(0_0_0_/_20%)] md:text-xl'>{props.comment}</h1>
            </div>
        </div>

    </div>
  )
}

export default Comment