'use client'

import { FadeParagraph, FadeParagraph2 } from '@/constant/AnimateMotion'
import React, { useRef } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { MissionInfo, VisionInfo } from '@/constant'



type Props = {}

const Process = (props: Props) => {
  const target = useRef(null)
 

  return (
    <div ref={target} className='w-full h-screen ' >
            <AnimatePresence>
            <motion.div 
                    className='h-full w-full flex   flex-col  gap-8 justify-center items-center   '>
                    <motion.div 
                        className='w-full  h-fit flex gap-8 flex-col  lg:px-24 p-4  justify-evenly  items-center '>
                            <motion.div className='w-full lg:text-center text-center md:text-center'>
                            <motion.div className='w-full lg:text-center text-center md:text-center'>
                                  <FadeParagraph2 color='blue' content='Our Process'  delay={6}  speed={1} size='One'/>
                              </motion.div>
                                  <FadeParagraph2 color='blue' content='Our Strategic Approach'  delay={6}  speed={1} size='Four'/>
                            </motion.div>
                    </motion.div>

                    <motion.div className='flex  flex-row gap-2 lg:px-48    md:px-12 px-4 w-full  h-fit'>
                        <motion.div  style={{}} className='w-full  flex flex-col lg:p-4 p-2 gap-4 lg:h-full h-full  '>
                                <FadeParagraph2 color='black' content={'Our Mission'}  delay={6}  speed={1} size='ThreeBold'/>
                                <FadeParagraph color='black' content={MissionInfo}  delay={6}  speed={1} size=''/>                        
                        </motion.div>
                        <motion.div  style={{}} className='w-full lg:p-4 p-2 gap-4  flex flex-col   lg:h-full h-full   '>
                                <FadeParagraph2 color='black' content={'Our Vision'}  delay={6}  speed={1} size='ThreeBold'/>
                                <FadeParagraph color='black' content={VisionInfo}  delay={6}  speed={1} size=''/>                        
                        </motion.div>
                    </motion.div>
            
            </motion.div>
            </AnimatePresence>
        
    </div>
  )
}

export default Process