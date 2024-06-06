'use client'

import Card from '@/components/Sub/Card'
import { AnimatePresence, motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'


const QuestionPage = () => {
  
  const questions = [
    { id: 1, question: 'Question 01' },
    { id: 2, question: 'Question 02' },
    { id: 3, question: 'Question 03' },
    { id: 4, question: 'Question 04' },
    { id: 5, question: 'Question 05' },
  ]

  // const selected = questions.find(item => item.question === AskedQuestion)

  useEffect(() => {}, [])

  const [openCardId, setOpenCardId] = useState<number | null>(null)

  const handleCardClick = (id: number) => {
    setOpenCardId(prevId => (prevId === id ? null : id))
  }

  const target = useRef(null)
  const controls = useAnimation()
  const inView = useInView(target)

  const vari = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
  }

  const vari2 = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [inView, controls])
  
  return (
    <div className='w-full h-screen'>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, delay: 2, ease: 'easeOut' }}
          className='w-full h-full flex flex-col justify-between items-center'
        >
          <h2 className='text-4xl text-center w-full'>Questions for Us.</h2>
          
          <div ref={target} className='w-full h-full border-4'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
              className='w-full h-full items-end justify-center flex z-40 px-48'
            >
              <div className='flex flex-col w-full text-center gap-2'>
                {questions.map(item => (
                  <motion.div
                    key={item.id}
                    initial='hidden'
                    animate={controls}
                    variants={vari2}
                    transition={{ duration: 1, delay: 0.5 * item.id, ease: 'easeInOut' }}
                  >
                    <Card
                      id={item.id}
                      title={item.question}
                      desc={item.id.toString()}
                      isOpen={openCardId === item.id}
                      onClick={() => handleCardClick(item.id)}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </motion.div>
      </AnimatePresence>
    </div>
  )
}


export default QuestionPage
