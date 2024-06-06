'use client'

import { motion } from 'framer-motion'
import splitStringRgx from './SplitString'
import React from 'react'

type Props = {
    content: string
    color: string
    speed?: number | 2
    delay: number | 2
    size: string,
}

const FadeText = ({ content, delay, color,  size}: Props) => {

    const text = splitStringRgx(content)
    const characterVariant = {
        hidden: { opacity: 0},
        visible: { opacity: 1},
    } 
    
  return (
    <motion.div>
        <motion.h2
            initial='hidden'
            whileInView='visible'
            transition={{  staggerChildren : 0.1}}
            className={` ${size == 'Five' ? 'lg:text-6xl text-5xl font-bold' : 
                          size == 'h2Title' ? 'text-4xl font-light' :
                          size == 'Four' ? 'text-3xl font-bold' : size == 'FourLight' ? 'text-4xl font-normal' :
                          size === 'Three' ? 'text-3xl font-medium' : size === 'ThreeBold' ? 'lg:text-4xl  text-xs font-semibold' :
                          size === 'Two' ? 'lg:text-2xl text-xl font-medium' :
                          size === 'One' ? 'text-lg font-medium' : size == 'OneLight' ? 'lg:text-sm text-xs font-light' :
                            'text-sm'} 
                        ${color == 'yellow' ? 'text-[#ffba08]' : 
                        color == 'white' ? 'text-white ' :
                        color == 'lightblue' ? 'text-[#2f97c1] ' :
                          color == 'green' ? 'text-emerald-600 ' : 'text-black'}`}>
                {text.map( char => (
                    <motion.span 
                        variants={characterVariant}
                        transition={{ duration: 0.2 * delay}}
                        key={char}
                        >
                            {char}
                    </motion.span>
                ))}
            </motion.h2>
    </motion.div>
  )
}

export const FadeParagraph = ({ content, delay, color,  size}: Props) => {

    const text = splitStringRgx(content)
    const characterVariant = {
        hidden: { opacity: 0},
        visible: { opacity: 1},
    } 
    
  return (
    <motion.div>
        <motion.h2
            initial='hidden'
            whileInView='visible'
            transition={{  staggerChildren : 0.01}}
            className={` ${size == 'Five' ? 'lg:text-6xl text-5xl font-bold' : 
                          size == 'Four' ? 'text-4xl font-bold' : size == 'FourLight' ? 'text-4xl font-normal' :
                          size === 'ThreeMiniBold' ? 'text-3xl font-medium'  :
                          size === 'Three' ? 'text-2xl font-medium' : size === 'ThreeBold' ? 'text-2xl font-semibold' :
                          size === 'Two' ? 'text-xl font-medium' :
                          size === 'One' ? 'text-lg font-medium' : size == 'OneLight' ? 'lg:text-xs text-xs font-light' :
                            'text-sm'} 
                        ${color == 'yellow' ? 'text-yellow-500' : 
                          color == 'green' ? 'text-emerald-600 ' :
                            color == 'lightblue' ? 'text-[#2f97c1] ' :
                          color == 'white' ? 'text-white ' :
                           'text-black'}`}>
                {text.map( char => (
                    <motion.span 
                        variants={characterVariant}
                        transition={{ duration: 0.2 * delay}}
                        key={char}
                        >
                            {char}
                    </motion.span>
                ))}
            </motion.h2>
    </motion.div>
  )
}
export const FadeParagraph2 = ({ speed, content, delay, color,  size}: Props) => {

    const text = splitStringRgx(content)
    const characterVariant = {
        hidden: { opacity: 0},
        visible: { opacity: 1},
    } 
    
    const OneLight = 'text-4xl font-light'
    const One = ''
    const OneBold = ''
  return (
    <motion.div className=''>
        <motion.h2
            initial='hidden'
            whileInView='visible'
            transition={{  staggerChildren : 0.1 }}
            className={` ${
                          size == 'Four' ? 'text-4xl font-bold' : size == 'FourLight' ? 'text-4xl font-normal' :
                          size === 'ThreeMiniBold' ? 'text-3xl font-medium'  :
                          size === 'Three' ? 'text-2xl font-medium' : size === 'ThreeBold' ? 'text-2xl font-semibold' :
                          size === 'Two' ? 'text-xl font-medium' :
                          size === 'One' ? 'text-lg font-medium' : size == 'OneLight' ? 'lg:text-xs text-xs font-light' :
                            'text-sm'} 
                        ${color == 'yellow' ? 'text-yellow-500' : 
                          color == 'green' ? 'text-emerald-600 ' :
                            color == 'lightblue' ? 'text-[#2f97c1] ' :
                          color == 'white' ? 'text-white ' :
                           'text-black'}`}>
                {text.map( char => (
                    <motion.span 
                        variants={characterVariant}
                        transition={{ duration: 0.5 * speed}}
                        key={char}
                        >
                            {char}
                    </motion.span>
                ))}
            </motion.h2>
    </motion.div>
  )
}

export default FadeText