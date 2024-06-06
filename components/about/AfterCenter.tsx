'use client'

import React, { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion'
import Form from '../Sub/Form'
import Footer from '../Sub/Footer'

import { GrLocation } from "react-icons/gr";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
type Props = {}

const AfterCenter = (props: Props) => {
    const targetView = useRef(null)
    const controls = useAnimation()
    const View = useInView(targetView)

    const { scrollYProgress } = useScroll({
        target: targetView,
    })

    const y = useTransform(scrollYProgress, [0,1] , ['40%', '-50%'])
    useEffect( () => {
        if(View) {
            controls.start('visible')
        } else {
            controls.start('hidden')
        } 

    }, [View, controls])

    const variants ={
        visible: { height: '100%'},
        hidden: {  height: '20%'}
    }   
    const variantsText ={
        visible: { opacity: 1, x: 0},
        hidden: {  opacity: 0, x: 200}
    }   

  return (

    <div ref={targetView} className=' h-screen  snap-start w-full'>
        <div className=' h-full  w-full  rounded-2xl'>

            <AnimatePresence>
                <motion.div 
                    transition={{ duration: 2, ease: 'easeInOut'}}
                    className='  rounded-lg shadow-2xl flex flex-col h-full'>
                        <motion.div 
                            className='h-full w-full flex lg:flex-row md:flex-row flex-col '>
                            <motion.div
                                className='w-full  flex flex-col gap-4 h-full p-4 py-12  justify-center items-end bg-black/70'>
                                    <motion.div >
                                        <h2 className='text-yellow-500 font-semibold  text-4xl '>Get In Touch With Us</h2>
                                    </motion.div>
                                    <div className=' h-fit  flex flex-col gap-1 w-fit'>
                                        <div className=' h-fit place-items-end  grid grid-cols-1   gap-1 w-full'>
                                            <div className=' w-fit h-full items-center  text-white flex gap-2 hover:backdrop-blur-md hover:bg-white/10 hover:border-white/20 border border-transparent cursor-pointer hover:text-yellow-500 ease-in-out duration-500 '>
                                                <h2 className='p-2 hover:border-white/80 hover:text-yellow-500 ease-in-out duration-500  text-sm w-full  text-white font-medium '>info@zenithconstruction.so</h2>
                                                <div className=' w-fit  flex justify-center items-center p-2 h-full '>
                                                    <MdOutlineMailOutline size={24} />
                                                </div>
                                            </div>
                                            <div className=' w-fit h-full items-center  text-white flex gap-2 hover:backdrop-blur-md hover:bg-white/10 hover:border-white/20 border border-transparent cursor-pointer hover:text-yellow-500 ease-in-out duration-500 '>
                                                <h2 className=' p-2  px-4 text-sm font-medium'>AAIA, Mogadishu, Somalia</h2>
                                                <div className=' w-fit  flex justify-center items-center p-2 h-full '>
                                                    <GrLocation size={24} />
                                                </div>
                                            </div>
                                            <div className=' w-fit h-full items-center  text-white flex gap-2 hover:backdrop-blur-md hover:bg-white/10 hover:border-white/20 border border-transparent cursor-pointer hover:text-yellow-500 ease-in-out duration-500 '>
                                                <h2 className='p-2  lg:text-sm text-sm font-medium'>+00 000 0000 000</h2>
                                                <div className=' w-fit  flex justify-center items-center p-2 h-full '>
                                                    <MdOutlinePhoneEnabled size={24} />
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </div>
                            </motion.div>
                            <motion.div 
                                style={{}}
                                className='w-full flex flex-col  lg:p-4 h-full  items-center justify-center '>
                                    <div className='lg:w-[70%] p-4 w-full  items-center justify-center bg-white/10 backdrop-blur-sm '>
                                        <div className='w-full '>
                                            <Form />    
                                        </div>
                                    </div>
                                    <div className=''>

                                    </div>
                            </motion.div>

                        </motion.div>
                            <Footer />    
                </motion.div>
            </AnimatePresence>
        </div>

    </div>
  )
}

export default AfterCenter