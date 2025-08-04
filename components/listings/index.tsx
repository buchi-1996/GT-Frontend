"use client"
import { Button } from '@/components/ui/button'
import { useAppState, useUIState } from '@/hooks/useAppState'
import Image from 'next/image'
import React from 'react'
import ListingForm from './ListingForm'
import { ItemListingView } from './ItemListingView'



const AddListingItem = () => {
      const { listedItems } = useAppState()
      const { openAddItem } = useUIState()


  // Show full listing view if there are items
  if (listedItems.length > 0) {
    return <ItemListingView />
  }

    return (
        <div className='flex flex-col min-h-[calc(100vh_-_11rem)] items-center justify-center'>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" fill="none"><rect width="79" height="79" x="1" y=".5" fill="#F9F9F9" stroke="#F1F1F1" rx="5.5"/><rect width="37" height="4" x="32.412" y="58.956" fill="#D9D9D9" rx="2"/><rect width="29" height="4" x="32.412" y="66.956" fill="#D9D9D9" rx="2"/><g clipPath="url(#a)"><rect width="16.478" height="16.478" x="11.5" y="55.956" fill="#C9D377" rx="4.119"/><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="m20.019 60.08-.011 8.75M15.625 64.456h8.75"/></g><rect width="37" height="4" x="32.412" y="10" fill="#D9D9D9" rx="2"/><rect width="29" height="4" x="32.412" y="18" fill="#D9D9D9" rx="2"/><g clipPath="url(#b)"><rect width="16.478" height="16.478" x="11.5" y="7" fill="#C9D377" rx="4.119"/><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="m20.019 11.125-.011 8.75M15.625 15.5h8.75"/></g><rect width="37" height="4" x="32.412" y="34.478" fill="#D9D9D9" rx="2"/><rect width="29" height="4" x="32.412" y="42.478" fill="#D9D9D9" rx="2"/><g clipPath="url(#c)"><rect width="16.478" height="16.478" x="11.5" y="31.478" fill="#C9D377" rx="4.119"/><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="m20.019 35.603-.011 8.75M15.625 39.978h8.75"/></g><defs><clipPath id="a"><rect width="16.478" height="16.478" x="11.5" y="55.956" fill="#fff" rx="4.119"/></clipPath><clipPath id="b"><rect width="16.478" height="16.478" x="11.5" y="7" fill="#fff" rx="4.119"/></clipPath><clipPath id="c"><rect width="16.478" height="16.478" x="11.5" y="31.478" fill="#fff" rx="4.119"/></clipPath></defs></svg>
            </span>
            <div className='grid place-items-center gap-2 mt-6'>
                <h2 className="text-lg text-app-black font-semibold">No Items Listed</h2>
                <p className='w-full text-sm md:text-md max-w-xs text-center text-app-base mb-4'>Share items you no longer need with people who can use them.</p>
                <Button variant="primary" className='w-auto md:w-44 py-6' onClick={() => openAddItem(<ListingForm />)}>Post Item</Button>
            </div>
        </div>
    )
}

export default AddListingItem