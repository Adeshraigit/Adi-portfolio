'use client'
import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <>
     <div className='md:grid justify-between sticky top-0 grid-cols-3 ' >
            <div className='text-xl text-center border-l-4 border-t-4 border-b-4 border-white p-4 md:p-12 hover:text-teal-300 ' >
                <Link href='/contact-me' >
                    Break the ice
                </Link>
                </div>
            <div className='text-lg p-4 md:p-12 border-4 border-white grow text-center hover:text-teal-300 ' >
                <Link href='mailto:aditya.ar855@gmail.com' >
                    Drop me a message.
                </Link>
            </div>
            <div className='text-xl text-center p-4 md:p-12 border-r-4 border-t-4 border-b-4 border-white hover:text-teal-300  ' >
              <Link href='https://www.linkedin.com/in/aditya-raut-b0a3b5277/' target='_blank' >
              Connect on Linkedin
              </Link>
            </div>
        </div>
        <div className=' flex p-4  justify-center' >
          <p className='text-sm md:text-xl' >
          ©2024 Aditya Raut</p>
        </div>
    </>
  )
}

export default Footer