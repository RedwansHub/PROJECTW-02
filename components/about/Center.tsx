'use client'

import {  ServicesList } from '@/constant'
import FadeText, { FadeParagraph } from '@/constant/AnimateMotion'
import { AnimatePresence, motion, useAnimation, useInView, useScroll } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import TypingAnimation from '../Animations/TypingAnimation'

type Props = {}


const Box1 = () => {
    
    const target = useRef(null)
    const controls = useAnimation()
    const View = useInView(target)

    

    useEffect( () => {
        if(View) {
            controls.start('visible')
        } else {
            controls.start('hidden')
        } 

    }, [View, controls])

    const variants ={
        visible: { opacity: 1, y: 0},
        hidden: { opacity: 0, y: 100}
    }   

    return (
        <div ref={target} className='w-full h-full'>
            <div className='w-full lg:h-full md:h-full h-full  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  '>
                {ServicesList.map( item => (
                    <motion.div key={item.id} 
                        initial={'hidden'}
                        variants={variants}
                        animate={controls}
                        transition={{ duration: 2, ease: 'backInOut', delay: 0.2 * item.id}}
                        className={` border-black/20  w-full h-full  p-6 flex gap-4 flex-col justify-between
                            ${  item.id == 4 ? 'bg-[#333232] text-white' :
                                item.id == 2 ? 'bg-[#2f97c1] text-black' :
                                item.id == 3 ? 'bg-[#ffba08] text-black' :
                                'bg-[#033f63] text-white'}
                                `}>
                        <FadeParagraph color={
                            item.id == 3 ? 'black' : 
                            item.id == 2 ? 'black' : 'white' } 
                            content={item.title} delay={5} size='ThreeBold'/>
                        <p className='lg:text-base text-sm'>
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

const Center = (props: Props) => {


    
    
  return (
    <div className='w-full h-screen  snap-start'>
            <AnimatePresence>
                <div className=' w-full h-full flex flex-col justify-end items-end'>            
                    <div className='z-20 relative flex gap-4 border-4 items-center flex-col justify-end  bg-white w-full lg:h-full h-full p-6'>
                       
                        <TypingAnimation  delay={4}  size='Medium' color='black' content='Our Services'/>
                        <FadeText delay={4}  size='Four' color='black' content='Building the Foundation for the Future'/>
                        
                    </div>
                    <Box1 />
                </div>
            </AnimatePresence>
    </div>
  )
}

export default Center