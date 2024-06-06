'use client'

import { AboutInfo, PhilosInfo } from '@/constant'
import FadeText, { FadeParagraph } from '@/constant/AnimateMotion'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import  { motion, useAnimation, useInView } from 'framer-motion'
import CustomButton from '../Sub/CustomButton'

type Props = {}

const Philos = (props: Props) => {

  const variant = {
    hidden: {opacity: 0, x: 300},
    visible: {opacity: 1, x: 0},
  }
  const target = useRef(null)
  const controls = useAnimation()
  const View = useInView(target)

  useEffect( () => {
    if(View) 
        controls.start('visible')
    else
        controls.start('hidden')
  }, [View, controls])

  return (
    <div className='w-full h-screen snap-start'>
      <div className='lg:py-8 py-6 lg:px-28 px-8 h-full'>
          <div ref={target} className='w-full h-full lg:grid grid-cols-2 flex flex-col gap-4   place-items-center'>
            
            <div className='w-full h-fit  flex justify-center items-center'>
              <div className=' w-fit h-fit lg:h-fit  md:px-12 px-4'>
                <div className=' flex flex-col gap-12 justify-center items-start p-6'>
                <FadeText color='black' content='Our Philosophy' delay={2} size='Four' speed={4} />
                <FadeParagraph color='black' content={PhilosInfo} delay={5} size='' speed={4} />
                </div>
              </div>            
            </div>

              <div className='overflow-hidden w-fit h-fit'>
                  <motion.div 
                  initial='hidden'
                  animate={controls}
                  variants={variant}
                  transition={{ duration: 2, delay: 2, ease: 'easeInOut'}}
                  className=''>
                  <Image src={'/images/03.svg'} alt='image' width={400} height={400}/>
                  </motion.div>
              </div>
          
            
          </div>
      </div>
    </div>
  )
}

export default Philos