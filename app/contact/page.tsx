'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Contact from '@/components/Main/Contact'

type Props = {}

const ContactPage = (props: Props) => {
  return (
    <div className=''>
        <motion.div 
            initial={{ opacity: 0, y: 400}}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0}}
            transition={{ duration: 2, delay: 1, ease: 'easeOut'}}
            className='w-full h-screen '>
            <motion.div 
              initial={{ opacity: 0, }}
              animate={{ opacity: 1, }}
              exit={{ opacity: 0}}
              transition={{ duration: 2, delay: 3, ease: 'easeOut'}}
              className='w-full h-full '>
                <div className=''>
                    {/* <FadeParagraph2 color='black' speed={4} content='Contact Us' size='Four' delay={4}/> */}
                  <div>
                    <Contact />
                  </div>
                </div>

            </motion.div>
        </motion.div>
    </div>
  )
}

export default ContactPage