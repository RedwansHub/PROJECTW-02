'use client'

import TypingAnimation from '@/components/Animations/TypingAnimation'
import Card from '@/components/Sub/Card'
import { DebuServiceList, GencoServiceList, IndeServiceList, RereServiceList } from '@/constant'
import { AnimatePresence, motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

type Props = {
    serviceType: string
}

const DetailServices = ({serviceType}: Props) => {

    const CurrentServices = [
        {id: 1, list: GencoServiceList, 
            src: '/equipments/02.png', 
            service: 'General Contracting', 
            desc: 'Our general contracting services encompass the complete management and execution of construction projects. We act as the central point of contact, coordinating all aspects of the construction process, including:'},
        {id: 2, list: DebuServiceList, 
            src: '/equipments/08.png', 
            service: 'Design and Build', 
            desc: 'Our design/build approach integrates both the design and construction phases, offering a seamless, efficient, and cost-effective solution. Key services include:'},
        {id: 3, list: IndeServiceList, 
            src: '/equipments/07.png', 
            service: 'Infrastructure Development', 
            desc: 'Our infrastructure development services are designed to create the foundational elements necessary for thriving communities and businesses. This includes:'},
        {id: 4, list: RereServiceList, 
            src: '/equipments/09.png', 
            service: 'Renovatation and Restoration', 
            desc: 'We specialize in breathing new life into existing structures through our renovation and restoration services, offering:'},
    ]

    const selected = CurrentServices.find(item => item.service === serviceType);
    useEffect( () => {
        
    }, [])
 
    const [openCardId, setOpenCardId] = useState<any>(null);

    const handleCardClick = (id: any) => {
        setOpenCardId(prevId => prevId === id ? null : id);
    };


    if (!selected) {
        return <div>Service not found</div>;
    }
    

    const target = useRef(null)
    const controls = useAnimation()
    const View = useInView(target)

    const vari = {
        hidden: { opacity: 0, x: -300  },
        visible: { opacity: 1, x: 0  },
    }

    const vari2 = {
        hidden: { opacity: 0, y: 100  },
        visible: { opacity: 1, y: 0  },
    }
    const var01 = {
        hidden: { opacity: 0,  x: 500  },
        visible: { opacity: 1,  x: 0  },
    }

    useEffect( () => {
        if (View) {
            controls.start('visible')
        } else {
            controls.start('hidden')

        }
    }, [View, controls])

  return (
    <div className='w-full h-screen bg-[#FFF6E9] overflow-hidden'>
        <div ref={target} className='w-full h-full flex lg:flex-row flex-col-reverse pt-24 px-4 lg:px-24'>
            <AnimatePresence>
            
            <div className=' w-full   relative lg:h-full h-fit flex flex-col  justify-center items-center  gap-8 overflow-hidden'>
                
                <motion.div 
                    transition={{ duration: 2, delay: 1}}
                    className='w-full h-fit '>
                    <TypingAnimation content={selected.desc} delay={0.04} size='medium' color='primary' speed={1}/>
                        
                        <h2 className='text-lg  font-medium  w-full '></h2>
                </motion.div>
               
                <motion.div 
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{ duration: 2, delay: 1}}
                        className='w-full h-fit flex z-40   '>
                            <div className='flex flex-col w-full gap-2'>
                            {selected.list.map(item => (
                                <motion.div
                                    key={item.id}
                                    initial='hidden'
                                    animate={controls}
                                    variants={vari2}
                                    transition={{ duration: 1, delay: 0.5 *item.id, ease: 'easeInOut'}}
                                    >
                                    <Card
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        desc={item.desc}
                                        isOpen={openCardId === item.id}
                                        onClick={handleCardClick}
                                    />
                                </motion.div>
                                ))}
                            </div>
                </motion.div>
            </div>
            <div className='w-full h-hit flex flex-col justify-center items-center lg:gap-12 gap-6  px-2 pt-8 lg:px-12'>
                <div className='w-full h-fit flex lg:justify-end justify-center items-center lg:items-start '>
                    <TypingAnimation content={selected.service} delay={0.1} size='xxlarge' color='primary' speed={1}/>
                </div>

                <motion.div 
                    initial={'hidden'}
                    animate={controls}
                    variants={var01}
                    transition={{ duration: 2, ease:'easeInOut', delay: 1}}
                    className='w-fit  h-fit '>
                    <Image src={selected.src} alt='image' width={500} height={500} />
                </motion.div>
                   
            </div>
        </AnimatePresence>
        </div>
    </div>
  )
}

export default DetailServices