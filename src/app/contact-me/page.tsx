'use client'
import React, { useState }  from 'react'
import { BackgroundBeams } from '@/components/ui/background-beams';

function Works() {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
     <div className="min-h-screen bg-white dark:bg-black py-12 pt-36 relative">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 dark:text-white">
          Contact Me
        </h1>
        <form action="https://getform.io/f/bvreewdb" method="POST" className="space-y-4 mt-4">
          <input
            type="email"
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 dark:bg-neutral-950 
            placeholder:text-neutral-700"
            required
          />
          <textarea
            typeof='text'
            name='Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 dark:bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Works