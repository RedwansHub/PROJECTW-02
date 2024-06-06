'use client'
import { AnimatePresence, motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

type Props = {
    children: React.ReactNode
}

const ZoomInEntry = ({ children } : Props) => {
    const target = useRef(null)
    const controls = useAnimation()
    const View = useInView(target)

    const { scrollYProgress } = useScroll({
        target: target,
    })
    const scale = useTransform(scrollYProgress, [0,1], [0.7, 0.2])

    useEffect( () => {
        if(View) {
            controls.start('visible')
        } else {
            controls.start('hidden')
        } 

    }, [View, controls])
    
    const variants ={
        visible: { opacity: 1, scale: 1},
        hidden: { opacity: 0, scale: 0.5}
    }   

  return (
    <motion.div ref={target} 
        className='w-full h-full '>
        <motion.div 
            variants={variants}
            animate={controls}
            transition={{ duration: 1, ease: 'easeInOut'}}
            className='w-full h-full '>

                {children}
        </motion.div>
    </motion.div>
  )
}

export default ZoomInEntry