'use client'

import { AboutInfo } from '@/constant'
import FadeText, { FadeParagraph, FadeParagraph2 } from '@/constant/AnimateMotion'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import  { AnimatePresence, motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion'
import CustomButton from '../Sub/CustomButton'
import TypingAnimation from '../Animations/TypingAnimation'

type Props = {
  outline: boolean
}

const Intro = ({outline}: Props) => {

  const variant = {
    hidden: {opacity: 0, scale: 0},
    visible: {opacity: 1, scale: 1},
  }
  const variant01 = {
    hidden: {opacity: 0, x: -400},
    visible: {opacity: 1, x: 0},
  }
  const target = useRef(null)
  const controls = useAnimation()
  const View = useInView(target)
  const { scrollYProgress } = useScroll({
    target: target
  })

  const opacity = useTransform(scrollYProgress, [0,0.5,1], [0.1,0.8, 0.1])

  useEffect( () => {
    if(View) 
        controls.start('visible')
    else
        controls.start('hidden')
  }, [View, controls])

  const var1 = {
    hidden: { opacity : 0},
    animate: { opacity : 1},
  }

  return (
    <div className='w-full h-screen  relative'>
      <div className='w-full h-full absolute '>
        <div className='lg:py-8 lg:px-24 md:px-12  h-full'>
            <div ref={target} className='w-full h-full overflow-hidden lg:grid lg:grid-cols-2 md:grid-cols-2 flex flex-col gap-4   place-items-center'>
              <motion.div 
                initial='hidden'
                animate={controls}
                variants={variant}
                transition={{ duration: 2, delay:1, ease: 'easeInOut'}}
                className='px-8'>
                <Image src={'/images/08.jpg'} alt='image' width={400} height={400}/>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 400 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay: 2, ease: 'easeInOut'}}
                className={`
                  w-fit lg:px-12 px-6 flex justify-start lg:py-12 py-6 gap-8 flex-col
                  ${outline ? 
                      'bg-black/40 backdrop-blur-sm '
                    : 'bg-white/20 backdrop-blur-sm rounded-md shadow-xl'}
                `}>
                <motion.div 
                  className=' w-full flex flex-col'>
                    <TypingAnimation content='Who we are' delay={0.3} size='xxlarge' color={outline ? 'white' : 'black'} speed={4}/>
                    
                    {/* <FadeParagraph2 color={outline ? 'white' : 'black'}  content='Who we are'  delay={6}  speed={1} size='Four'/> */}
                </motion.div>
                <div className='flex flex-col gap-6 w-full lg:w-full'>
                    <FadeParagraph color={outline ? 'white' : 'black'} content={AboutInfo} delay={2} size=''/>
                </div>
                  {outline && (
                      <div className='overflow-hidden w-fit flex '>
                      <AnimatePresence>
                        <motion.div
                              initial='hidden'
                              animate={controls}
                              variants={variant01}
                              transition={{ duration: 2, delay: 3, ease: 'easeInOut'}} >
                              <CustomButton  path={'/about'} text='black' title='Learn more ' />
                          </motion.div>
                      </AnimatePresence>
                    </div>
                  )}
              </motion.div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Intro