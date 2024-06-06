'use client'
import { AnimatePresence, motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

type Props = {
    children: React.ReactNode
}

const LevelZero = ({ children }: Props) => {

    const target = useRef(null)
    const controls = useAnimation()
    const View = useInView(target)
    const { scrollYProgress } = useScroll({
        target: target,
        smooth: 1
    })

    const fade = useTransform(scrollYProgress, [0, 1], [0.2, 0.8])
    const x = useTransform(scrollYProgress, [0, 1], ['10%', '-150%'])
    const variants = {
        hidden: { opacity: 0},
        visible: { opacity: 1},
    }
    useEffect(() => {
        if(View) {
            controls.start('Visible')
        } else 
            controls.start('hidden')

    }, [View, controls])


  return (
    <div ref={target} className='w-fit h-fit'>
        <AnimatePresence>
            <motion.div initial='hidden' variants={variants} transition={{ duration: 2, ease: 'easeInOut', delay: 1 }}
                className='h-full w-full'>
                <motion.div style={{  }} initial='hidden' 
                    className='h-full w-full'>
                        <h2>Hello</h2>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    </div>
  )
}

export default LevelZero