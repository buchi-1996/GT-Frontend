"use client"

import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation';


const OnboardingHeader = () => {
  const router = useRouter();

  return (
    <header className='py-6 px-4 md:px-6'>
      <nav className="flex items-center justify-between">
          <button onClick={() => router.back()} className="cursor-pointer flex sm:hidden items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.99982 11.9998H19.9998" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

        <Button variant="secondary" size="lg" className='ml-auto cursor-pointer'>
          Switch role
        </Button>
      </nav>
    </header>
  )
}

export default OnboardingHeader