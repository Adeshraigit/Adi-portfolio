'use client'
import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';

function Navbar() {

    const [open, setOpen] = useState(false);

  return (
    <>
        <div className='flex justify-between gap-0 sticky top-0 left-0 z-20 dark:bg-black bg-white' >
            <div className='text-sm md:text-xl border-r-2 border-b-2 border-black dark:border-white p-3 md:p-8 ' >
                <Link href='/' >
                    Aditya Raut
                </Link>
                </div>
            <div className='text-sm md:text-xl  p-3 md:p-8 border-b-2 dark:border-white border-black dark:border-whites  grow text-center' >
                <Link href='/' >
                    Video Editor
                </Link>
            </div>
            <div 
            className={`text-xl md:text-4xl p-3 md:p-8 border-l-2 border-b-2 border-black dark:border-white ${ open ? ' bg-white text-black' : 'dark:bg-black bg-white' } `}
            onClick={() =>setOpen(!open)}
            >
                { open ? <IoMdClose/> : <IoMenu/> }
            </div>
        </div>
        <div className={` grid grid-cols-2 dark:bg-black bg-whites h-[90vh] ${open ? '' : 'hidden'}`} >
            <div className='h-full w-full  border-l-4 border-r-4  dark:border-white border-black place-content-center text-center text-2xl md:text-7xl font-bold' 
            onClick={() => setOpen(!open)} 
            >
                <Link href={'/'} >
                    Home
                </Link>
            </div>
            <div className='h-full w-full border-r-4 dark:border-white border-black  place-content-center text-center text-2xl md:text-7xl font-bold'
            onClick={() => setOpen(!open)} 
            >
                <Link href={'/work'} >
                    Work
                </Link>
            </div>
            <div className='h-full w-full border-4 dark:border-white border-black place-content-center text-center text-2xl md:text-7xl font-bold'
            onClick={() => setOpen(!open)} 
            >
                <Link href={'/contact-me'} >
                    Contact
                </Link>
            </div>
            <div className='h-full w-full border-4 border-l-0 dark:border-white border-black place-content-center text-center text-2xl md:text-7xl font-bold' 
            onClick={() => setOpen(!open)} 
            >
                <Link href='https://www.linkedin.com/in/aditya-raut-b0a3b5277/' target='_blank' >
                    Linkedin
                </Link>
            </div>
        </div>
    </>
  )
}

export default Navbar