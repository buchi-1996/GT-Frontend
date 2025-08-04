import React from 'react'
import { Button } from '../ui/button'
import ResponsiveAlert from '../modal/ResponsiveAlert'
interface FeedbackReceivedModalProps {
  open: boolean
  onClose: () => void
  subtext: string
  buttonText?: string
}

const FeedbackReceivedAlert = ({
  open,
  onClose,
  subtext,
  buttonText = 'Done',
}: FeedbackReceivedModalProps) => {
  return (
    <ResponsiveAlert open={open} close={() => { }} className='py-4 md:py-20'>
      <div className='flex flex-col items-center gap-3 justify-center text-center p-4 md:p-6'>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="96" height="100" fill="none"><path fill="#FF6D83" d="M3.281 38.73a4.155 4.155 0 1 1 1.75 8.124 4.155 4.155 0 0 1-1.75-8.123Z" /><path fill="#4671FF" d="M91.044 25.745a4.093 4.093 0 1 1 1.725 8.003 4.093 4.093 0 0 1-1.725-8.003Z" /><path fill="#FFB636" d="M51.314.614a4.276 4.276 0 1 1 1.8 8.362 4.276 4.276 0 0 1-1.8-8.362Z" /><path fill="#4671FF" d="M30.439 91.025a4.276 4.276 0 1 1 1.801 8.361 4.277 4.277 0 0 1-1.801-8.361Z" /><path fill="#AD8FE6" stroke="#AD8FE6" stroke-width=".377" d="M88.905 71.18a4.149 4.149 0 1 1 1.746 8.113 4.149 4.149 0 0 1-1.746-8.112Z" /><path fill="#14AE7D" d="M58.222 16.82c19.245 5.157 30.665 24.937 25.509 44.181-5.157 19.245-24.938 30.665-44.182 25.508C20.305 81.352 8.884 61.572 14.04 42.33c5.156-19.245 24.937-30.665 44.181-25.509Z" /><path fill="#fff" d="M42.907 65.372a1.017 1.017 0 0 1-1.424-.06L28.388 51.328a2.793 2.793 0 0 1-.608-1.973 2.8 2.8 0 0 1 .919-1.852 2.903 2.903 0 0 1 1.956-.743 2.907 2.907 0 0 1 1.952.76l9.437 10.077c.252.27.675.287.949.04l19.792-17.872a2.907 2.907 0 0 1 2.008-.593c.723.057 1.396.38 1.887.905a2.8 2.8 0 0 1 .76 1.922 2.793 2.793 0 0 1-.77 1.915L42.906 65.372Z" /><path stroke="#FF6E83" stroke-linecap="round" stroke-width="2.143" d="M20.834 15.332c-.66-2.45-2.229-5.7-5.95-7.768" /><path fill="#AD8FE6" d="M16.643 86.989c-.718.119-1.758.058-3.223-.263-8.31-1.824-.912 5.37-.912 5.37s1.894 3.718-1.73 2.808" /><path stroke="#AD8FE6" strokeLinecap="round" strokeWidth="2.027" d="M16.643 86.989c-.718.119-1.758.058-3.223-.263-8.31-1.824-.912 5.37-.912 5.37s1.894 3.718-1.73 2.808" /><path stroke="#FFB636" stroke-linecap="round" stroke-width="1.832" d="M83.127 11.48c2.277-.83 4.95-.007 7.54 5.027 4.883 9.487-6.64 7.553-5.97 1.64" /><path fill="#4671FF" d="M74.115 87.426c.649 1.803 2.41 3.918 6.791 5.378a32.5 32.5 0 0 1 1.412.505" /><path stroke="#6EB9FF" stroke-linecap="round" stroke-width="2.027" d="M74.115 87.426c.649 1.803 2.41 3.918 6.791 5.378a32.5 32.5 0 0 1 1.412.505" /></svg>
        </span>
        <h4 className='text-xl md:text-2xl font-semibold'>Feedback Received</h4>
        <p className="text-sm text-gray-500 sm:max-w-sm">{subtext}</p>
        <div className='flex items-center justify-center gap-4 mt-6'>
          <Button onClick={onClose} variant="primary" className='w-auto md:w-44 py-6 px-6'>{buttonText}</Button>
        </div>
      </div>
    </ResponsiveAlert>
  )
}

export default FeedbackReceivedAlert