"use client"

import React from 'react'
import ResponsiveModal from '../modal/ResponsiveModal'
import MultiStepForm from '.'
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks'
import { showItemListingModal } from '@/redux/slices/modalSlice'



const AddItemModal = () => {

  const {itemListingModalOpen} = useAppSelector((state) => state.modal)
  const dispatch = useAppDispatch()
  return (
    <ResponsiveModal open={itemListingModalOpen} close={()=> dispatch(showItemListingModal(false))} className=' min-h-[90%] md:min-h-96  px-2 md:px-4'>
        <MultiStepForm />
    </ResponsiveModal>
  )


}

export default AddItemModal