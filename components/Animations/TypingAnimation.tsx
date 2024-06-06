'use client'

import { motion } from 'framer-motion'
import splitStringRgx from '../../constant/SplitString'
import React from 'react'

type Props = {
    content: string
    color: string
    speed?: number | 1
    delay: number | 1
    size: string,
}

const sizeClasses: { [key: string]: string } = {
    small: 'text-sm font-regular',
    medium: 'text-base font-medium',
    mediumBold: 'text-base font-semibold',
    semi: 'text-xl font-semibold',
    large: 'text-xl font-bold',
    xlarge: 'text-2xl font-bold',
    xxlarge: 'text-4xl font-bold',
};

const colorClasses: { [key: string]: string } = {
    yellow: 'text-yellow-500',
    green: 'text-emerald-600',
    primary: 'text-[#033F63]',
    white: 'text-white',
    black: 'text-black',
};

const TypingAnimation = ({ speed, content, delay, color,  size}: Props) => {

    const text = splitStringRgx(content)
    const characterVariant = {
        hidden: { opacity: 0},
        visible: { opacity: 1},
    } 

  return (
    <div>
    <motion.div className=''>
        <motion.h2
            initial='hidden'
            whileInView='visible'
            transition={{ staggerChildren: delay }}
            className={`${sizeClasses[size] || 'text-base font-regular'} ${colorClasses[color] || 'text-black'}`}
        >
            {text.map((char, index) => (
                <motion.span
                    key={`${char}-${index}`}
                    variants={characterVariant}
                    transition={{ duration: 0.3 * speed}}
                >
                    {char}
                </motion.span>
            ))}
        </motion.h2>
    </motion.div>
</div>
  )
}

export default TypingAnimation