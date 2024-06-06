'use client'

import { FadeParagraph2 } from '@/constant/AnimateMotion'
import React from 'react'
import Footer from '../Sub/Footer'
import { AnimatePresence, motion } from 'framer-motion'


import { GrLocation } from "react-icons/gr";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import Form from '../Sub/Form'
import ExpandEntry from '../Animations/ExpandEntry'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='w-full h-screen '>
        <div className='flex flex-col justify-between items-center h-full relative w-full'>
          <div className='w-full border-4  h-full flex justify-end lg:items-center items-end '>
        <AnimatePresence>
          <motion.div 
                className='lg:h-full h-fit w-full flex lg:flex-row md:flex-row justify-end items-end  flex-col  '>
                <motion.div
                    className='w-full bg-white/30 backdrop-blur-sm flex flex-col  gap-2 h-fit  p-4 lg:py-12  py-2 lg:justify-end justify-center lg:items-end items-center '>
                        <motion.div >
                            <FadeParagraph2 color='yellow' content='Get in Touch with us'  delay={6}  speed={1} size='Four'/>
                            {/* <h2 className='text-yellow-500 font-semibold  text-4xl '>Get In Touch With Us</h2> */}
                        </motion.div>
                        <div className=' h-full  flex flex-col gap-1 w-fit'>
                            <div className=' h-fit place-items-end  grid grid-cols-1   gap-1 w-full'>
                                <ExpandEntry delay={1}>
                                  <div className=' w-fit h-full items-center   flex gap-2 hover:backdrop-blur-md hover:bg-black/10 hover:border-black/20 border border-transparent cursor-pointer hover:text-yellow-500 ease-in-out duration-500 '>
                                      <h2 className='p-2 hover:border-white/80 hover:text-yellow-500 ease-in-out duration-500  text-sm w-full  text-black font-medium '>info@zenithconstruction.so</h2>
                                      <div className=' w-fit  flex justify-center items-center p-2 h-full '>
                                          <MdOutlineMailOutline size={24} />
                                      </div>
                                  </div>
                                </ExpandEntry>
                                <ExpandEntry delay={1.5}>
                                  <div className=' w-fit h-full items-center  text-black flex gap-2 hover:backdrop-blur-md hover:bg-black/10 hover:border-black/20 border border-transparent cursor-pointer hover:text-yellow-500 ease-in-out duration-500 '>
                                      <h2 className=' p-2  hover:border-white/80 hover:text-yellow-500 ease-in-out duration-500  px-4 text-sm font-medium'>AAIA, Mogadishu, Somalia</h2>
                                      <div className=' w-fit  flex justify-center items-center p-2 h-full '>
                                          <GrLocation size={24} />
                                      </div>
                                  </div>
                                </ExpandEntry>
                                <ExpandEntry delay={1.9}>
                                  <div className=' w-f h-full items-center  text-black flex gap-2 hover:backdrop-blur-md hover:bg-black/10 hover:border-black/20 border border-transparent cursor-pointer hover:text-yellow-500 ease-in-out duration-500 '>
                                      <h2 className='p-2  hover:border-white/80 hover:text-yellow-500 ease-in-out duration-500  lg:text-sm text-sm font-medium'>+00 000 0000 000</h2>
                                      <div className=' w-fit  flex justify-center items-center p-2 h-full '>
                                          <MdOutlinePhoneEnabled size={24} />
                                      </div>
                                  </div>
                                </ExpandEntry>
                            </div>
                        
                        </div>
                </motion.div>

                <motion.div 
                    style={{}}
                    className='w-full flex flex-col justify-end items-center lg:p-4 lg:h-full md: h-fit   '>
                        <div className=' lg:p-12 p-6  w-full lg:w-[80%]  md:lg:w-[90%] h-fit  items-end justify-center  '>
                            <div className='w-full '>
                              {/* <WritingEntry delay={4}> */}
                                <Form />    
                              {/* </WritingEntry> */}
                            </div>

                        </div>
                </motion.div>
          
          </motion.div>
        </AnimatePresence>
          </div>
        <Footer />
        </div>
    </div>
  )
}

export default Contact