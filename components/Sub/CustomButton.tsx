import React from 'react'

type Props = {
    title: string
    text: string
    path: string | '/'
}

const CustomButton = ({title, path, text}: Props) => {
  return (
    <div className={`bg-[#FFBA08] border-2 border-transparent py-2 px-16 w-fit rounded-sm cursor-pointer shadow-lg
          hover:border-[#FFBA08]/80 hover:bg-black/40 transition-all hover:scale-105  duration-300 ease-in-out
            ${text == 'black' ? 'hover:text-white' : ''}  `}>
            <a href={path} className='font-bold'>{title}</a>
    </div>
  )
}

export default CustomButton