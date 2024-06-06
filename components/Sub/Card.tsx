'use client'
import React from 'react'
import { motion } from 'framer-motion'
import TypingAnimation from '../Animations/TypingAnimation'

type Props = {
    id: any,
    title: any,
    desc: any,
    isOpen: boolean,
    onClick: (id: any) => void,
}

const Card = ({ id, title, desc, isOpen, onClick }: Props) => {
  return (
    <motion.div layout onClick={() => onClick(id)}
      transition={{ duration: 0.35, ease: 'easeIn' }}
      className='w-full h-fit border-b-2 border-orange-400/50  p-4 text-sm cursor-pointer  flex-col flex  gap-4 '>
      <motion.h2 layout='position' className='font-medium text-black '>
        <TypingAnimation content={title} delay={0.01} size='medium' color='black' speed={1}/>      
      </motion.h2>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: 'easeInOut' }}
          className=''>
            <TypingAnimation content={desc} delay={0.01} size='small' color='black' speed={1}/>
          
          
        </motion.div>
      )}
    </motion.div>
  )
}

export default Card
