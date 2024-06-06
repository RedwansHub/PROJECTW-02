'use client'

import {  MissionInfo, VisionInfo } from '@/constant'
import FadeText, { FadeParagraph2 } from '@/constant/AnimateMotion'
import { useAnimation, useInView, useScroll, useTransform } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'


type Props = {}

const Previois = (props: Props) => {

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

    
    const [isSelected, setSelected] = useState<number | null>(null)
   

    return (
        <div className='w-full h-full snap-y snap-mandatory overflow-auto'>

           <div className='snap-start w-full h-full flex justify-center items-center '>
                <div className='grid lg:grid-cols-2 lg:px-48 px-12 w-full h-fit place-items-center md:grid-cols-2 grid-cols-1 gap-12'>

                    <div className='flex flex-col gap-2 w-full h-full'>
                        <FadeParagraph2 color='black' content='Our Process' delay={2} size='One' speed={4} />
                        <div className='w-full h-fit'>
                            <h2 className='w-full text-5xl font-medium leading-tight'>Our Strategic Approach</h2>
                        </div>
                    </div>

                    <div className='flex flex-col w-full h-full gap-6 '>
                        <div className='flex flex-col w-full h-fit'>
                            <FadeText color='black' content='Our Mission' delay={2} size='Three' speed={4} />
                            <FadeParagraph2 color='black' content={MissionInfo} delay={4} size='One' speed={4} />
                        </div>
                        <div className='flex flex-col w-full h-fit'>
                            <FadeText color='black' content='Our Vision' delay={2} size='Three' speed={4} />
                            <FadeParagraph2 color='black' content={VisionInfo} delay={4} size='One' speed={4} />
                        </div>
                    </div>

                </div>
            </div>

            {/* Second */}
            <div className='snap-start w-full h-full flex justify-center items-center '>
                <div className='grid lg:grid-cols-2 lg:px-48 px-12 w-full h-fit place-items-center md:grid-cols-2 grid-cols-1 gap-12'>

                    <div className='flex flex-col gap-2 w-full h-full'>
                        <FadeParagraph2 color='black' content='Our Process' delay={2} size='One' speed={4} />
                        <div className='w-full h-fit'>
                            <h2 className='w-full text-5xl font-medium leading-tight'>Our Strategic Approach</h2>
                        </div>
                    </div>

                    <div className='flex flex-col w-full h-full gap-6 '>
                        <div className='flex flex-col w-full h-fit'>
                            <FadeText color='black' content='Our Mission' delay={2} size='Three' speed={4} />
                            <FadeParagraph2 color='black' content={MissionInfo} delay={4} size='One' speed={4} />
                        </div>
                        
                        <div className='flex flex-col w-full h-fit'>
                            <FadeText color='black' content='Our Vision' delay={2} size='Three' speed={4} />
                            <FadeParagraph2 color='black' content={VisionInfo} delay={4} size='One' speed={4} />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Previois
