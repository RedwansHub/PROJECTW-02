import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='w-full h-fit flex '>
        <div className='w-full h-full flex  py-2 flex-col bg-white lg:px-32 px-3   items-center'>
            <div className='flex w-full h-fit lg:flex-row flex-col lg:justify-between justify-center '>
                <div className='flex gap-2 p-4  lg:justify-start justify-center  items-center  h-full w-full   bg-white '>
                    <Image src={'/Images/Logo.svg'} alt='image' width={40} height={40} />
                    <Link href={'/'} >
                        <div className='w-fit flex-col flex justify-center  -space-y-2'>
                            <h2 className='font-bold text-lg'>Zenith </h2>
                            <h2 className='font-bold text-sm'>Construction</h2>
                        </div>
                    </Link>
                </div>
                <div className='flex w-full  items-ends items-center justify-center lg:justify-end gap-1'>
                    <div className=' w-fit lg:p-12 p-1 flex items-center gap-3 '>
                        <a href='/about' className='font-medium p-1 text-sm hover:scale-105 duration-200 hover:font-bold cursor-pointer '>About</a>
                        <a href='/portfolio' className='font-medium p-1 text-sm hover:scale-105 duration-200 hover:font-bold cursor-pointer '>Portfolio</a>
                        <a href='/services' className='font-medium p-1 text-sm hover:scale-105 duration-200 hover:font-bold cursor-pointer '>Services</a>
                        <a href='/askQuestion' className='font-medium p-1 text-sm hover:scale-105 duration-200 hover:font-bold cursor-pointer '>FAQ</a>
                        <a href='/contact' className='font-medium p-1 text-sm hover:scale-105 duration-200 hover:font-bold cursor-pointer '>Contact</a>
                    </div>
                </div>
            </div>
           <h2 className='font-bold text-xs text-black/55'>All rights Reserved. @ 2024 Zenith Construction</h2>
        </div>
    </div>
  )
}

export default Footer