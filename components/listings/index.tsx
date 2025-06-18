"use client"
import { Button } from '@/components/ui/button'
import { useAppState } from '@/hooks/useAppState'
import Image from 'next/image'
import React from 'react'
import ListingForm from './ListingForm'



const AddListingItem = () => {
    const { openAddItem } = useAppState()
    return (
        <div className='flex flex-col min-h-[calc(100vh_-_11rem)] items-center justify-center'>
            <Image
                src="/assets/icons/listing-icon.svg"
                alt="No items found"
                width={200}
                height={200}
                className="mb-4 w-22 h-22"
            />
            <div className='grid place-items-center gap-4 mt-2'>
                <h2 className="text-xl text-app-black font-semibold">No Items Listed</h2>
                <p className='text-md max-w-sm text-center text-app-base mb-4'>Share items you no longer need with people who can use them.</p>
                <Button variant="primary" className='w-44 py-6' onClick={() => openAddItem(<ListingForm />)}>Post Item</Button>
            </div>
        </div>
    )
}

export default AddListingItem