'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Contact from '@/components/Main/Contact'
import Header from '@/components/Sub/Header'

type Props = {}

const ContactPage = (props: Props) => {
  return (
    <div className='w-full h-full relative '>
         <div className='relative w-full z-50 h-fit'>
              <div className='absolute top-0 p-4 lg:px-24 md:px-8 px-2 w-full h-fit'>
                    <Header  />
            </div>
          </div>

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
              className='w-full h-fit '>
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