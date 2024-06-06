import TypingAnimation from '@/components/Animations/TypingAnimation'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import DetailServices from './DetailServices'

type Props = {}

const ServicesPage = (props: Props) => {

  const list = [
    { id: 1, title: 'General Contracting'},
    { id: 2, title: 'Design and Build'},
    { id: 3, title: 'Infrastructure Development'},
    { id: 4, title: 'Renovatation and Restoration'},
  ]
  return (
    <div className='w-full h-screen bg-[#FFF6E9]'>
        <div className='w-full h-full '>
          {list.map( item => (
            <div key={item.id}>
              <DetailServices serviceType={item.title} />   

            </div>

          ))}
        </div>
    </div>
  )
}

export default ServicesPage