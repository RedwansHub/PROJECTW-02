'use client'

import { AnimatePresence, motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import CustomButton from './CustomButton'
import ExpandEntry from '../Animations/ExpandEntry'
import toast from 'react-hot-toast'


type Props = {}

export default function Form({}: Props) {
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
        hidden: { opacity: 0, x: -100}
    }   


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Handler function to update form data on input change
    const handleInputChange = (e :any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        
    };

    // Handler function for form submission
    const handleSubmit = async (e : any) => {
        e.preventDefault();
        try {
            toast.success('Thank you for reaching out to us. ')
            // alert('Form submitted successfully!');
        } catch (error) {
            // Handle errors from API request
            console.error('Error submitting form:', error);
            // Provide feedback to the user about error
            alert('An error occurred while submitting the form. Please try again later.');
        }
    };


  return (
    <div className='w-full h-fit'>
        <div ref={target} className='flex flex-col w-full gap-4'>
            <form action={'https://getform.io/f/lajkpdrb'} method="POST"  className=' w-full overflow-hidden flex  flex-col  gap-2'>
               <motion.div
                    initial='hidden' 
                    animate={controls} 
                    variants={variants} 
                    transition={{ duration: 1, delay: 2, ease: 'easeInOut'}} 
                >
                    <input 
                        className='w-full p-3 placeholder:font-medium placeholder:text-blue-100/70 bg-[#333232]/50 backdrop-blur-sm rounded-sm shadow-2xl text-white '
                        type={'name'}
                        onChange={handleInputChange}
                        name='name' placeholder='Full Name'/>

               </motion.div>
               <motion.div
                    initial='hidden' 
                    animate={controls} 
                    variants={variants} 
                    transition={{ duration: 1, delay: 2.5, ease: 'easeInOut'}} 
                >
                    <input className='w-full p-3 placeholder:font-medium placeholder:text-blue-100/70 bg-[#333232]/50 backdrop-blur-sm rounded-sm shadow-2xl text-white '
                        type={'email'}
                        onChange={handleInputChange}
                        value={formData.email}
                        name='email' placeholder='Email Address' />
                </motion.div>
               <motion.div
                    initial='hidden' 
                    animate={controls} 
                    variants={variants} 
                    transition={{ duration: 1, delay: 2.8, ease: 'easeInOut'}} 
                    >
                    <textarea className='w-full p-3 placeholder:font-medium placeholder:text-blue-100/70 bg-[#333232]/50 backdrop-blur-sm rounded-sm shadow-2xl text-white '
                        onChange={handleInputChange}
                        value={formData.message}
                        name='message' placeholder='Message' />
                </motion.div>

            <div className='overflow-hidden'>
               <motion.div 
                    initial='hidden' 
                    animate={controls} 
                    variants={variants} 
                    transition={{ duration: 1, delay: 3, ease: 'easeInOut'}} 
                    >
                        <button type='submit' className={`bg-[#FFBA08] border-2 border-transparent py-2 px-16 w-fit rounded-sm cursor-pointer shadow-lg
                             hover:bg-black font-bold hover:text-[#FFBA08] transition-all hover:scale-105  duration-300 ease-in-out
                                `}>
                                    Send Message
                        </button>
                </motion.div>
            </div>
            </form>
        </div>
    </div>
  )
}