import ReceiverPickupView from '@/components/pickup/ReceiverPickup'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback="">
      <ReceiverPickupView />
    </Suspense>
  )
}

export default page