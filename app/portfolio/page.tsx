'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FadeParagraph2 } from '@/constant/AnimateMotion'

type Props = {}

const PortfolioPage = (props: Props) => {
  return (
    <>
      <motion.div
         initial={{ opacity: 0, }}
         animate={{ opacity: 1, }}
         exit={{ opacity: 0, }}
         transition={{ duration: 0.8, delay: 1.5, ease: 'easeOut'}}>
        <div className='w-full h-screen '>

          <div className='w-full h-full  flex items-end pb-20 justify-center'>
            <FadeParagraph2 color='black' delay={4} content={'Coming soon'} speed={4} size='Four' />
          </div>

        </div>
      </motion.div>
    </>
  )
}

export default PortfolioPage