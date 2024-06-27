'use client'
import React from 'react'
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";

function Hero() {

  return (
    <>
    <div>
     <AuroraBackground>
        <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
          <div className=' top-0 grid grid-cols-1 items-center lg:grid-cols-2 h-[75vh]' >
              <div className=' font-bold text-[100px] text-center text-7xl md:text-[200px] text-teal-300 '>
                  Hello!
              </div>
              <div className='text-xl text-left mx-10 lg:mx-0  text-white ' >
              I am a 18 year old young video editor, I can use my creative editing ideas to convert your raw footage into cool and high quality video.
              </div>
          </div>
        </motion.div>
      </AuroraBackground>
    </div>
    </>
  )
}

export default Hero