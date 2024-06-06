'use client'

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { FadeParagraph2 } from '@/constant/AnimateMotion'

type Props = {
    children: React.ReactNode,
    title: any,
    h?: any | 300,

}

const EntryLayout = ({ children, h, title }: Props) => {
  const [prevTitle, setPrevTitle] = useState(title)
  const pathname = usePathname()

  useEffect(() => {
    setPrevTitle(title)
  }, [pathname])

  return (
    <motion.div className='relative w-full h-full overflow-hidden'>
        <AnimatePresence mode='wait'>
          <motion.div
            className={`coverLayer bg-[#333232] absolute w-full h-full flex justify-center items-bottom`}
            initial={{ height: '100%' }}
            animate={{ height: h }}
            exit={{ height: '100%' }}
            transition={{ duration: 4, ease: 'easeInOut' }}
          >
            <div className='pt-48'>
              <AnimatePresence>
                <motion.h2
                  key={title}
                  className='text-6xl font-bold'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <FadeParagraph2 color='white' delay={0} content={prevTitle} speed={4} size='Four' />
                </motion.h2>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            key={`${pathname}-content`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
    </motion.div>
  )
}

export default EntryLayout