'use client'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    children: React.ReactNode
}

const PageLayout = ( {children} : Props) => {
  return (
    <motion.div 
        initial={{ opacity: 0, scale: 0.6}}
        animate={{ opacity: 1, scale: 1}}
        exit={{ opacity: 0, scale: 0}}
        transition={{ duration: 0.8, ease: 'easeOut'}}
        className=''>
            {children}
    </motion.div>
  )
}

export default PageLayout