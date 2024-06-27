'use client'
import React from 'react'
import Link from 'next/link'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'

import work from '@/data/work.json'
// import After from '/'

function Work() {

  const featuredWork = work.videos.filter((work) => work.isFeatured)

  return (
    <>
     <div className="min-h-screen py-12 pt-36" >
     <div>
            <div className='text-center' >
            <h2 className="text-2xl text-teal-600 font-semibold tracking-wide uppercase">MY WORK</h2>
            <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Get With the Best</p>
            </div>
        </div>
        <div className="flex flex-wrap justify-center">
            {featuredWork.map((project) => (
                <CardContainer key={project.id} className="inter-var m-4">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem >
                  <div className="w-full mt-4">
                    <video width="600" controls>
                      <source src={project.video} type="video/mp4" />
                       Your browser does not support the video tag.
                     </video>
                  </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
        </div>  
        <div className='mt-20 text-center' >
            <Link href={"/work"} 
            className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500"
            >
            View All
            </Link>
        </div>
    </div>
    </>
  )
}


export default Work