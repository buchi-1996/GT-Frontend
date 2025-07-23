"use client"

import React, { useState } from 'react'
import { Progress } from '../ui/progress'

const BadgeProgress = () => {

    const [progress] = useState(13)

  return (
    <div className='w-full flex items-center gap-3 justify-center'>
    <Progress value={progress} className='data-[slot=progress]:bg-[#D4E6FF]  w-[55%] h-[6px]' />
    <span className='text-xs'>0/1</span>
    </div>
  )
}

export default BadgeProgress