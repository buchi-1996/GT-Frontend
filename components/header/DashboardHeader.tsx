"use client"

import React from 'react'
import { Button } from '../ui/button'
import { ChevronRight, Menu } from 'lucide-react'
import { useUIState } from '@/hooks/useAppState'
import User from './User'
import CompleteProfile from '../profile/CompleteProfile'

const DashboardHeader = () => {
  const { openSidebar, setSidebarCollapsed, sidebarCollapsed, openSheet } = useUIState()


  return (
    <header className="z-20 h-18 sticky top-0 mx-auto px-4 md:px-6 lg:px-12 bg-white border-b border-gray-200 py-4 flex items-center justify-between">
      <div className='flex items-center gap-4'>
        <button onClick={openSidebar} className='block md:hidden shrink-0 cursor-pointer'>
          <Menu />
        </button>
        <Button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} variant="ghost" size="icon" asChild className={`${sidebarCollapsed && 'visible opacity-100'} hover:bg-transparent absolute left-3 cursor-pointer opacity-0 invisible ${sidebarCollapsed && 'md:visible opacity-100'}  mr-6 w-6 h-6`}>
          <svg className='shrink-0' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 12C2 8.31087 2 6.4663 2.81382 5.15877C3.1149 4.67502 3.48891 4.25427 3.91891 3.91554C5.08116 3 6.72077 3 10 3H14C17.2792 3 18.9188 3 20.0811 3.91554C20.5111 4.25427 20.8851 4.67502 21.1862 5.15877C22 6.4663 22 8.31087 22 12C22 15.6891 22 17.5337 21.1862 18.8412C20.8851 19.325 20.5111 19.7457 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7457 3.1149 19.325 2.81382 18.8412C2 17.5337 2 15.6891 2 12Z" stroke="#141B34" strokeWidth="1.5" />
            <path d="M9.5 3V21" stroke="#141B34" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M5 7H6M5 10H6" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Button>
        <h1 className={`${sidebarCollapsed && 'ml-auto md:ml-10'} text-[1rem] sm:text-xl font-semibold text-[#222222]`}>Welcome back, Joe!</h1>
      </div>

      <div className="flex items-center gap-5">
        <Button onClick={() => openSheet(<CompleteProfile />)} className="hidden lg:flex bg-[#0d9488] hover:bg-[#0b5f5a]/90 cursor-pointer text-white px-6 py-5 rounded-md items-center gap-2 shadow-none">
          <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.84553 12.5631C2.99545 13.6767 3.91775 14.549 5.0401 14.6006C5.98451 14.644 6.94386 14.6667 8.00033 14.6667C9.05679 14.6667 10.0161 14.644 10.9605 14.6006C12.0829 14.549 13.0052 13.6767 13.1551 12.5631C13.253 11.8365 13.3337 11.0917 13.3337 10.3333C13.3337 9.57493 13.253 8.8302 13.1551 8.10353C13.0052 6.99 12.0829 6.11766 10.9605 6.06606C10.0161 6.02265 9.05679 6 8.00033 6C6.94386 6 5.98451 6.02265 5.0401 6.06606C3.91775 6.11766 2.99545 6.99 2.84553 8.10353C2.74769 8.8302 2.66699 9.57493 2.66699 10.3333C2.66699 11.0917 2.74769 11.8365 2.84553 12.5631Z" stroke="white" />
            <path d="M5 5.99992V4.33325C5 2.6764 6.34315 1.33325 8 1.33325C9.65687 1.33325 11 2.6764 11 4.33325V5.99992" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.99707 10.3333H8.00307" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          </span>
          Complete setup
          <ChevronRight className="w-4 h-4" />
        </Button>

        <div className='flex gap-4 items-center'>
          <div className='flex gap-4'>
            <button className='cursor-pointer'>
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 14.5H15.5M8.5 9.5H12" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.1706 20.8905C18.3536 20.6125 21.6856 17.2332 21.9598 12.9909C22.0134 12.1607 22.0134 11.3009 21.9598 10.4707C21.6856 6.22838 18.3536 2.84913 14.1706 2.57107C12.7435 2.47621 11.2536 2.47641 9.8294 2.57107C5.64639 2.84913 2.31441 6.22838 2.04024 10.4707C1.98659 11.3009 1.98659 12.1607 2.04024 12.9909C2.1401 14.536 2.82343 15.9666 3.62791 17.1746C4.09501 18.0203 3.78674 19.0758 3.30021 19.9978C2.94941 20.6626 2.77401 20.995 2.91484 21.2351C3.05568 21.4752 3.37026 21.4829 3.99943 21.4982C5.24367 21.5285 6.08268 21.1757 6.74868 20.6846C7.1264 20.4061 7.31527 20.2668 7.44544 20.2508C7.5756 20.2348 7.83177 20.3403 8.34401 20.5513C8.8044 20.7409 9.33896 20.8579 9.8294 20.8905C11.2536 20.9852 12.7435 20.9854 14.1706 20.8905Z" stroke="#626262" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            <button className='cursor-pointer'>
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.52992 14.394C2.31727 15.7471 3.268 16.6862 4.43205 17.1542C8.89481 18.9486 15.1052 18.9486 19.5679 17.1542C20.732 16.6862 21.6827 15.7471 21.4701 14.394C21.3394 13.5625 20.6932 12.8701 20.2144 12.194C19.5873 11.2975 19.525 10.3197 19.5249 9.27941C19.5249 5.2591 16.1559 2 12 2C7.84413 2 4.47513 5.2591 4.47513 9.27941C4.47503 10.3197 4.41272 11.2975 3.78561 12.194C3.30684 12.8701 2.66061 13.5625 2.52992 14.394Z" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 21C9.79613 21.6219 10.8475 22 12 22C13.1525 22 14.2039 21.6219 15 21" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>
          <div className='pl-4 border-l hidden md:block'>
            <User />
          </div>
        </div>
      </div>
    </header >
  )
}

export default DashboardHeader