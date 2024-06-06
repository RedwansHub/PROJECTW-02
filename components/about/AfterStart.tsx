'use client'
import { AboutInfo } from '@/constant'
import FadeText, { FadeParagraph2 } from '@/constant/AnimateMotion'
import React from 'react'
import CustomButton from '../Sub/CustomButton'
import Image from 'next/image'
import { AnimatePresence } from 'framer-motion'
import ZoomInEntry from '../Animations/ZoomInEntry'
import ExpandEntry from '../Animations/ExpandEntry'
import WritingEntry from '../Animations/WritingEntry'

type Props = {}

const AfterStart = (props: Props) => {
  return (
    <div className='w-full h-screen relative snap-start'>
      <AnimatePresence>
            <div className='w-full h-full   flex justify-center items-center '>
                <div className='absolute h-fit  flex gap-6 lg:flex-row lg:px-2 px-4 flex-col justify-center items-center   lg:w-[90%]  lg:h-[60%] md:h-[80%]  rounded-l-lg   w-full'>
                      <div className='w-full  h-fit gap-3 text-white   flex flex-col  backdrop-blur-md transition-all duration-300 ease-in-out bg-opacity-25 bg-black/60 '>
                          <div className='flex flex-col  h-fit p-14 gap-2 '>
                            {/* <FadeText delay={4}  size='Three' color='' content='Building Today Empowering Tomorrow'/> */}
                              <div className='w-fit  h-fit '>
                              <FadeText content='Who we are' color='white' delay={4} size='h2Title'/>
                              </div>
                            {/* <WritingEntry delay={1}>
                            </WritingEntry> */}
                            {/* <h2 className='font-semibold  lg:text-5xl text-3xl'>Building Foundation For The Future 
                            </h2> */}
                            <WritingEntry delay={1}>
                              <div className='w-fit relative  h-fit   '>
                                  <FadeParagraph2 color='white' content={AboutInfo} delay={1} size='Two' />
                              </div>
                            </WritingEntry>
                          </div>

                            <ExpandEntry  delay={6}>
                              <div className=' h-fit w-full  '>
                               <CustomButton path='/about'  text='' title='Learn More'/>
                              </div>
                            </ExpandEntry>
                      </div>
                      <ZoomInEntry>
                        <div className='w-full h-full overflow-hidden hover:rounded-3xl duration-500 ease-in-out '>
                            <Image src={'/images/07.svg'} alt='image' 
                              className='rounded-sm hover:shadow-2xl  ease-in-out duration-500 hover:scale-110'
                              width={800} height={800} />
                        </div>
                      </ZoomInEntry>
                    
                
                </div>
            </div>
      </AnimatePresence>
</div>
  )
}

export default AfterStart