import RequestView from '@/components/requests'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback="">

      <RequestView />
    </Suspense>
  )
}

export default page