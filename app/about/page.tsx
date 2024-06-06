
'use client'

import Contact from '@/components/Main/Contact'
import Intro from '@/components/Main/Intro'
import Philos from '@/components/Main/Philos'
import Values from '@/components/Sub/Values'
import Process from '@/components/about/Process'
import FadeText, { FadeParagraph2 } from '@/constant/AnimateMotion'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    
}

const AboutPage = (props: Props) => {
 

  return (
    <div className='w-full h-full relative  '> 
    <AnimatePresence>
        <motion.div 
              initial={{ opacity: 0, }}
              animate={{ opacity: 1,  }}
              exit={{ opacity: 0}}
              transition={{ duration: 1.8, delay: 2, ease: 'easeOut'}}
              className='w-full h-full '>
        
              <Intro outline={false} />
              <Process />
              <div className='w-full lg:h-10 h-80' />

              <div className='w-full h-screen '>
                <div className='w-full h-full flex justify-center lg:snap-start items-center'>
                  <div className='w-full h-fit flex flex-col justify-center items-center lg:gap-12 gap-2 p-8'>
                    <div className='flex flex-col gap-2 justify-center items-center w-full h-fit'>
                        <FadeParagraph2 color='black' content='Our Core Values' delay={2} size='One' speed={4} />
                        <div className='w-fit h-fit text-center'>
                            {/* <h2 className='w-full text-3xl  font-semibold leading-tight'></h2> */}
                            <FadeText color='black' content='The Foundation For Our Success' delay={2} size='Four' speed={4} />
                        </div>
                    </div>
                    <AnimatePresence>
                        <Values />
                    </AnimatePresence>
                  </div>
                </div>
              </div>
    
              <Philos />
              <Contact />
          
        </motion.div >
    </AnimatePresence>
    </div>
  )
}

export default AboutPage