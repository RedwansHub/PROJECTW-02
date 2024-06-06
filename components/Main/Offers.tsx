
'use client'
import React, { useEffect, useRef } from 'react'
import  { motion, useAnimation, useInView } from 'framer-motion'
import FadeText, { FadeParagraph } from '@/constant/AnimateMotion'
import Image from 'next/image'
import { ServiceInfo, ServicesList } from '@/constant'

type Props = {}

const Offers = (props: Props) => {

const variant = {
    hidden: {opacity: 0, scale: 0},
    visible: {opacity: 1, scale: 1},
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
      <div className='w-full h-full lg:p-28 p-4  '>
        <div ref={target} className='w-full h-full lg:grid flex flex-col items-center justify-center lg:gap-2 gap-8 '>
            <div className='flex flex-col justify-center items-center gap-4'>
              <div className=' flex gap-4 flex-col h-fit justify-center w-full items-center'>
                <FadeText color='white' delay={4} content='Our Services' size='Two' />
                <FadeText color='white' delay={6} content='Building Foundation for the future' size='Four' />
              </div>
            </div>

            <div className='w-full lg:h-full md:h-[50%] h-fit lg:grid md:grid lg:grid-cols-4 md:grid-cols-2 flex flex-col gap-2'>
              {ServicesList.map( item => (
                <div key={item.id}>
                    <ServiceBox controls={controls} title={item.title} description={item.desc} id={item.id}/>
                </div>
              ))}
            </div>

        </div>
      </div>
    </div>
  )
}

const ServiceBox = ({ title, description, id, controls}) => {
  const variant = {
    hidden: {opacity: 0, },
    visible: {opacity: 1,},
  }
  return (
    <motion.div 
      transition={{ staggerChildren: 0.5}}
      className='w-fit overflow-hidden h-full'>
      <motion.div 
        initial='hidden'
        animate={controls}
        variants={variant}
        transition={{ duration: 1, delay: 0.3 * id, ease:'easeInOut'}}
        className='w-fit lg:p-4 p-6 h-full hover:bg-yellow-300/25 duration-300 ease-in-out gap-6  flex flex-col justify-between border border-[#ffba08] rounded-xl '>
          {/* <div className='hidden w-full lg:flex md:flex justify-end items-end'>
            <FadeText content={`${id}`} delay={4} color='yellow' size='One'/>
          </div> */}
          <div className=' h-full justify-evenly flex flex-col gap-2'>
            <h2 className='text-3xl font-light'>
                {title}
            </h2>
            {/* <FadeText content={title} delay={6} color='white' size='ThreeBold'/> */}
            <FadeParagraph content={description} delay={8} color='lightblue' size='OneLight'/>
          </div>
      </motion.div>
    </motion.div>
  )
}
export default Offers