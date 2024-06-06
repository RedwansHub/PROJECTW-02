import { HeroInfo } from '@/constant'
import FadeText, { FadeParagraph } from '@/constant/AnimateMotion'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import CustomButton from '../Sub/CustomButton'
import Image from 'next/image'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='h-screen w-full snap-start'>
      <div className='w-full h-full relative  flex flex-col  justify-center gap-1 items-center'>
        <div className=' w-full flex flex-col justify-center items-center  lg:absolute top-56  '>
          <div className=' flex flex-col
              justify-center items-center rounded-xl backdrop-blur-md  p-8 bg-[#FFBA08]/10   text-center'>
            <div className='flex flex-col items-center justify-center w-fit  gap-4 '>
                <div className='flex flex-col gap-3'>
                  <FadeText color='yellow' delay={4} size='Four' content='Building Today' />
                  <FadeText color='yellow' delay={12} size='Four' content='Empowering Tomorrow' />
                </div>
              <div className='lg:w-[600px] w-full'>
                <FadeParagraph color='white' content={HeroInfo} delay={4} size='OneLight'/>
              </div>
              <CustomButton text='' path={'/About'} title='Learn More'  />
            </div>
          
          </div>
        </div>

        <div className='h-fit w-full flex justify-center items-end'>
          <Image src={'/images/01.svg'} alt='image' width={1300} height={1300}/>
        </div>
      </div>
    </div>
  )
}

export default Hero