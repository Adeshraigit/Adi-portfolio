'use client'
import React from 'react'
import { IoMenu } from "react-icons/io5";
import Link from 'next/link';

function Navbar() {
  return (
    <>
        <div className='flex justify-between sticky top-0 z-20 bg-black' >
            <div className=' text-xl border-r-4 border-b-4 border-white p-8 ' >
                <Link href='/' >
                    Aditya Raut
                </Link>
                </div>
            <div className='text-lg p-8 border-b-2 border-white grow text-center' >
                <Link href='/' >
                    Video Editor
                </Link>
            </div>
            <div className='text-3xl p-8 border-l-4 border-b-4 border-white ' ><IoMenu /></div>
        </div>
    </>
  )
}

export default Navbar