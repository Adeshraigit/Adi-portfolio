'use client'
import React from 'react'

function Hero() {
  return (
    <>
        <div className='grid grid-cols-1 items-center lg:grid-cols-2 h-[75vh]' >
            <div className=' font-bold text-[150px] text-center lg:text-[200px]'>
                Hello!
            </div>
            <div className='text-xl text-left mx-10 lg:mx-0 ' >
            I am a 18 year old young video editor, I can use my creative editing ideas to convert your raw footage into cool and high quality video.
            </div>
        </div>
    </>
  )
}

export default Hero