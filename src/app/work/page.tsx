'use client'
import React from 'react'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import work from '@/data/work.json'

function page() {
  return (
    <>
     <div className="min-h-screen bg-black py-12 pt-36" >
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">My Work</h1>
        <div className="flex flex-wrap justify-center">
        {work.videos.map((project) => (
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
                    <video height="1000"
                      width="1000" controls>
                      <source src={project.video} type="video/mp4" />
                       Your browser does not support the video tag.
                     </video>
                  </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
        </div>  
    </div>
    </>
  )
}

export default page