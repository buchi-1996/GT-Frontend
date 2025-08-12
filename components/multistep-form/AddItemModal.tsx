"use client"

import { useUIState } from '@/hooks/useAppState'
import React from 'react'
import ResponsiveModal from '../modal/ResponsiveModal'
import MultiStepForm from '.'



const AddItemModal = () => {

    const {itemListingModalOpen, setItemListingModalOpen, isEditMode} = useUIState()
  return (
    <ResponsiveModal open={itemListingModalOpen} close={()=> setItemListingModalOpen(false)} className='min-h-[90%] md:min-h-96  px-4'>
        <MultiStepForm isEditMode={isEditMode} />
    </ResponsiveModal>
  )


}

export default AddItemModal