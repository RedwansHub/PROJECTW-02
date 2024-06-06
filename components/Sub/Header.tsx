'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import Logo from '../../public/images/logo.svg'
type Props = {
  delay?: any
}

const Header = ({ delay }: Props) => {

    const [menuOpen, setMenuOpen] = useState(false)
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen)
    }

  const closeMenu = () => {
    setMenuOpen(false)
  }
  

  return (
    <div className='w-full h-fit '>
    <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.6, delay: delay | 5.8 }}
        className='w-full h-full flex justify-between items-center p-4 px-12 bg-white/60 rounded-lg shadow-lg'>
      <Link href='/' className='flex cursor-pointer gap-2 items-center '>
        <Image src={Logo} alt='image' width={35} height={35} />
        <div className='flex -space-y-2 flex-col'>
          <h2 className='font-semibold text-2xl '>Zenith</h2>
          <h2 className='font-semibold text-xs'>Construction</h2>
        </div>
      </Link>
      <div className='hidden md:flex items-end gap-3'>
        <Link href='/about' className='font-normal p-1 text-sm hover:scale-105 duration-200 hover:font-bold cursor-pointer'>About</Link>
        <Link href='/portfolio' className='font-normal p-1 text-sm hover:scale-105 duration-200 hover:font-bold cursor-pointer'>Portfolio</Link>
        <Link href='/services' className='font-normal p-1 text-sm hover:scale-105 duration-200 hover:font-bold cursor-pointer'>Services</Link>
        <Link href='/contact' className='font-normal p-1 text-sm hover:scale-105 duration-200 hover:font-bold cursor-pointer'>Contact</Link>
      </div>
      <div className='md:hidden flex items-center'>
        <button onClick={toggleMenu}>
          {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>
    </motion.div>

    {menuOpen && (
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: 'auto' }}
        transition={{ duration: 0.5 }}
        className='md:hidden flex flex-col items-center bg-white/80 rounded-lg shadow-lg p-4 mt-2'>
        <Link onClick={closeMenu} href='/about' className='font-medium p-2 text-sm hover:scale-105 duration-200 hover:font-bold cursor-pointer'>About</Link>
        <Link onClick={closeMenu} href='/portfolio' className='font-medium p-2 text-sm hover:scale-105 duration-200 hover:font-bold cursor-pointer'>Portfolio</Link>
        <Link onClick={closeMenu} href='/services' className='font-medium p-2 text-sm hover:scale-105 duration-200 hover:font-bold cursor-pointer'>Services</Link>
        <Link onClick={closeMenu} href='/contact' className='font-medium p-2 text-sm hover:scale-105 duration-200 hover:font-bold cursor-pointer'>Contact</Link>
      </motion.div>
    )}
  </div>
)
}

export default Header