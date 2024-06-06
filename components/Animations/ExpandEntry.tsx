'use client'
import { AnimatePresence, motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

type Props = {
    children: React.ReactNode
    delay: number | 1
}

const ExpandEntry = ({ children, delay } : Props) => {
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
        visible: { opacity: 1, x: 0},
        hidden: { opacity: 0, x: 100}
    }   

  return (
    <motion.div ref={target} 
        className='w-fit h-fit overflow-hidden'>
        <motion.div 
            initial='hidden'
            variants={variants}
            animate={controls}
            transition={{ duration: 1.5, delay: delay, ease: 'easeInOut'}}
            className='w-fit h-fit '>

                {children}
        </motion.div>
    </motion.div>
  )
}

export default ExpandEntry