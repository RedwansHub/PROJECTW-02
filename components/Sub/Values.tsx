'use client'
import { CoreValues } from '@/constant'
import {motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

type CoreProps = {
    id: number, 
    title: string, 
    desc: string, 
    selected: number
    hanlde: (e: any) => void
}

const Core = ({id, title, desc, selected, hanlde} : CoreProps) => {

    
    const target = useRef(null)
    const controls = useAnimation()
    const View = useInView(target)

    const { scrollYProgress } = useScroll({
        target: target,
    })
    const scale = useTransform(scrollYProgress, [0, 1], [0.7, 0.2])

    useEffect(() => {
        if (View) {
            controls.start('visible')
        } else {
            controls.start('hidden')
        }

    }, [View, controls])

    const var1 = {
        hidden: { opacity: 0, x: 100},
        visible: { opacity: 1, x: 0},    
    }
    const var2 = {
        hidden: { opacity: 0, x: -100},
        visible: { opacity: 1, x: 0},    
    }
    
   
    return (
        <div ref={target}  className='overflow-hidden'>
            <motion.div
                key={id}
                initial='hidden'
                variants={  (id % 2 != 0) ? var1 : var2 }
                animate={controls}
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 * id}}
                className={`border-2 border-blue-300/25 h-full w-fit  
                    cursor-pointer shadow-md hover:border-blue-900  rounded-md  
                    lg:px-1 px-3 lg:py-4 py-2
                
                    `}>
                <motion.div
                    
                    onClick={() => hanlde(id)}
                    className={`text-center
                        flex justify-center items-center gap-2 ${ (id % 2 != 0) ? 'lg:flex-row-reverse  w-fit lg:text-right  flex-col' : 'w-fit lg:flex-row flex-col'}
                    `}>
                                
                    <div className={`
                                w-fit lg:p-3 flex 
                                ${ ( id % 2 != 0 ) ? 'flex lg:justify-end lg:items-end' : '' }
                    `}>
                        <h2 className='h-fit  w-fit text-lg font-semibold'>{title}</h2>
                    </div>
                        <div 
                            className='w-fit'>
                            <p className='text-sm text-black/70'>{desc}</p>
                        </div>
                    {/* {selected === id ? 
                    : <></>} */}
                </motion.div>
            </motion.div>

        </div>
    )
}

const Values = () => {
  


    const [isSelected, setSelected] = useState<number | null>(null)
    const handleClick = (id: number) => {
        if (isSelected === id) {
            setSelected(null)
        } else {
            setSelected(id)
        }
    }

  return (
        <div className='w-full h-full flex justify-center items-center'>
            <motion.div 
                className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:px-48 md:px-10 px-2  gap-2 w-fit h-fit'>
                {CoreValues.map(item => (
                    <Core key={item.id} 
                        hanlde={handleClick}
                        selected ={isSelected}
                        id={item.id}
                        desc={item.desc}
                        title={item.title}/>
                ))}
                
            </motion.div>
        </div>
  )
}

export default Values