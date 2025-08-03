import React, { ReactElement } from 'react'
import BadgeProgress from './BadgeProgress';

interface BadgeCardProps {
  icon: ReactElement;
  badgeTitle: string;
  goalAchieved: string;
  earnedDate?: string;
  currentStep: number;
  totalSteps: number;
  isCompleted?: boolean;
}

const BadgeCard = ({ icon, badgeTitle, goalAchieved, isCompleted, currentStep, totalSteps, earnedDate }: BadgeCardProps) => {

  return (
    <div className='grid place-items-center gap-3 bg-gray-50 rounded-md py-4 md:py-6 px-4'>
      {icon}
      <div className='text-center mt-1'>
        <h4 className='font-semibold text-sm text-gray-700'>{badgeTitle}</h4>
        <p className='text-xs md:text-sm text-gray-500'>{goalAchieved}</p>
      </div>
      {isCompleted ? (
        <span className='text-xs text-gray-400'>{earnedDate}</span>) : (<BadgeProgress currentStep={currentStep} totalSteps={totalSteps} />)}
    </div>
  )
}

export default BadgeCard