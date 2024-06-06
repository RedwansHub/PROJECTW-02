'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Counter from '../Sub/Counter';
import Image from 'next/image';
import TypingAnimation from '../Animations/TypingAnimation';
import Logo from '../../public/images/logo.svg'


type Props = {}
export const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 0.75,
        transition: {duration: 1, delay: 0.2}
    },
}

export const slideUp = {
    initial: {
        top: 0
    },
    exit: {
        top: "-100vh",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    }
}


const LoadingCover = (props: Props) => {
    
    const [isDone, setIsDone] = useState(false);

    const handleComplete = (done: boolean) => {
        setIsDone(done);
    };


    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className={'introduction'}>
            <AnimatePresence>
                <div className='flex w-full flex-col h-full justify-center items-center   gap-16'>
                    <div></div>
                    <div className='flex justify-center items-center gap-4'>
                        <motion.div 
                            initial={{ rotate: '-180deg', opacity: 0}}
                            animate={{ rotate: '0deg', opacity: 1 } }
                            transition={{ duration: 2, delay: 3}}
                            className='w-full'>
                                <Image src={Logo} alt='image' width={60} height={60}
                                    className=''
                                />
                        </motion.div>
                            
                        <div>
                            <TypingAnimation content='Zenith' delay={0.2} size='xxlarge' color='primary' speed={1}/>
                            <TypingAnimation content='Construction' delay={0.1} size={'medium'} color='primary' speed={1}/>
                        </div>
                    </div>
                    <div className=' flex gap-4 w-full justify-center'>
                        <TypingAnimation  content='Building Today, Empowering Tommorow' delay={0.1} size='medium' color='primary' speed={4}/>
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{ duration: 1}}
                        className='w-full  flex justify-center items-center '>
                        <Counter complete={handleComplete}  initialSpeed={70} finalSpeed={10} /> 
                    </motion.div>
                </div>
           
            </AnimatePresence>
        </motion.div>
    )
}

export default LoadingCover