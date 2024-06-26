'use client'
import React from 'react'
import Image from 'next/image'
import image from '@/data/image.json'
import { BackgroundGradient } from './ui/background-gradient'

function Skills() {

    const images = image.images;

  return (
    <>
     <div className='py-12' >
        <div>
            <div className='text-center' >
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Software I Use</p>
            </div>
        </div>
        <div className='mt-10' >
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                {images.map((img) => (
                    <div key={img.id} className='flex justify-center'  >
                        <BackgroundGradient>
                        <Image 
                        src={img.src}
                        alt=''
                        width={100}
                        height={100}
                        />
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default Skills