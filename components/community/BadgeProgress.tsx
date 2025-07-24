"use client"

import React from 'react'
import { Progress } from '../ui/progress'

interface BadgeProgressProps {
  currentStep?: number
  totalSteps?: number
}

const BadgeProgress = ({ currentStep = 2, totalSteps = 5 }: BadgeProgressProps) => {
  // Calculate progress percentage (0-100)
 const progressPercentage = (currentStep / totalSteps) * 100

  
  // You can still use state if you want to update it dynamically
  

  return (
    <div className='w-full flex items-center gap-3 justify-center'>
      <Progress 
        value={progressPercentage} 
        className='data-[slot=progress]:bg-[#D4E6FF] w-[100%] md:w-[55%] h-[6px]' 
      />
      <span className='text-xs'>{currentStep}/{totalSteps}</span>
    </div>
  )
}

export default BadgeProgress