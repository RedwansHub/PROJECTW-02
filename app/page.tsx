'use client'


import Intro from "@/components/Main/Intro";
import Center from "@/components/about/Center";
import AfterCenter from "@/components/about/AfterCenter";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingCover from "@/components/layout/LoadingLayout";


export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 6000)
      }
    )()
  }, [])


  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingCover />}
      </AnimatePresence>
        
        <div className="w-full h-full overflow-hidden">
          <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 6.5, ease: 'easeInOut'}}
            className="w-full h-full BackgroundImage">
            
              <div className="h-screen w-full snap-y snap-mandatory overflow-auto">
                <div className="snap-start w-full   h-screen">
                  {/* Landing Page  */}
                </div>
                <div className="h-full w-full snap-start">
                <Intro  outline={true} />

                </div>
                <div className='w-full h-80 '>
                </div>
                <Center />
                <AfterCenter />  {/* Footer */}

              </div>

          </motion.main>
        </div>
        
    </>

  );
}
