"use client"
import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import MenuItem from './MenuItem'
import { NavigationSection } from '@/types'
import { Card, CardContent } from '../ui/card'
import { ChevronRight, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useUIState } from '@/hooks/useAppState'
import User from '../header/User'
import CompleteProfile from '../profile/CompleteProfile'


const navigationData: NavigationSection[] = [
  {
    id: "main",
    items: [
      {
        id: "overview-item",
        title: "Overview",
        href: "/dashboard/overview",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.88886 9.66294C4.39331 10 5.09554 10 6.5 10C7.90447 10 8.6067 10 9.11115 9.66294C9.32953 9.51702 9.51703 9.32952 9.66294 9.11114C10 8.60669 10 7.90446 10 6.5C10 5.09554 10 4.39331 9.66294 3.88886C9.51703 3.67048 9.32953 3.48298 9.11115 3.33706C8.6067 3 7.90447 3 6.5 3C5.09554 3 4.39331 3 3.88886 3.33706C3.67048 3.48298 3.48298 3.67048 3.33707 3.88886C3 4.39331 3 5.09554 3 6.5C3 7.90446 3 8.60669 3.33707 9.11114C3.48298 9.32952 3.67048 9.51702 3.88886 9.66294Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M14.8888 9.66294C15.3933 10 16.0955 10 17.5 10C18.9044 10 19.6067 10 20.1111 9.66294C20.3295 9.51702 20.517 9.32952 20.6629 9.11114C21 8.60669 21 7.90446 21 6.5C21 5.09554 21 4.39331 20.6629 3.88886C20.517 3.67048 20.3295 3.48298 20.1111 3.33706C19.6067 3 18.9044 3 17.5 3C16.0955 3 15.3933 3 14.8888 3.33706C14.6705 3.48298 14.483 3.67048 14.337 3.88886C14 4.39331 14 5.09554 14 6.5C14 7.90446 14 8.60669 14.337 9.11114C14.483 9.32952 14.6705 9.51702 14.8888 9.66294Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M3.88886 20.6629C4.39331 21 5.09554 21 6.5 21C7.90447 21 8.6067 21 9.11115 20.6629C9.32953 20.517 9.51703 20.3295 9.66294 20.1111C10 19.6067 10 18.9045 10 17.5C10 16.0955 10 15.3933 9.66294 14.8889C9.51703 14.6705 9.32953 14.483 9.11115 14.3371C8.6067 14 7.90447 14 6.5 14C5.09554 14 4.39331 14 3.88886 14.3371C3.67048 14.483 3.48298 14.6705 3.33707 14.8889C3 15.3933 3 16.0955 3 17.5C3 18.9045 3 19.6067 3.33707 20.1111C3.48298 20.3295 3.67048 20.517 3.88886 20.6629Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M14.8888 20.6629C15.3933 21 16.0955 21 17.5 21C18.9044 21 19.6067 21 20.1111 20.6629C20.3295 20.517 20.517 20.3295 20.6629 20.1111C21 19.6067 21 18.9045 21 17.5C21 16.0955 21 15.3933 20.6629 14.8889C20.517 14.6705 20.3295 14.483 20.1111 14.3371C19.6067 14 18.9044 14 17.5 14C16.0955 14 15.3933 14 14.8888 14.3371C14.6705 14.483 14.483 14.6705 14.337 14.8889C14 15.3933 14 16.0955 14 17.5C14 18.9045 14 19.6067 14.337 20.1111C14.483 20.3295 14.6705 20.517 14.8888 20.6629Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        )

      },
      {
        id: "listing-item",
        title: "Item Listing",
        href: "/dashboard/item-listing",
        icon: (

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M4 5H4.00898" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12H4.00898" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 19H4.00898" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M8 19H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>

        ),
      },
      {
        id: "matching-item",
        title: "Matching",
        href: "/dashboard/matching",
        icon: (

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 20V17.9704C16.5 16.7281 15.9407 15.5099 14.8103 14.9946C13.4315 14.3661 11.7779 14 10 14C8.22212 14 6.5685 14.3661 5.18968 14.9946C4.05927 15.5099 3.5 16.7281 3.5 17.9704V20" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.5 20.001V17.9713C20.5 16.729 19.9407 15.5109 18.8103 14.9956C18.5497 14.8768 18.2792 14.7673 18 14.668" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 11C11.933 11 13.5 9.433 13.5 7.5C13.5 5.567 11.933 4 10 4C8.067 4 6.5 5.567 6.5 7.5C6.5 9.433 8.067 11 10 11Z" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 4.14453C16.4457 4.57481 17.5 5.91408 17.5 7.49959C17.5 9.0851 16.4457 10.4244 15 10.8547" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        ),
      },
      {
        id: "pickup-item",
        title: "Pickup",
        href: "/dashboard/pickup",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C11.1818 22 10.4002 21.6698 8.83693 21.0095C4.94564 19.3657 3 18.5438 3 17.1613C3 16.7742 3 10.0645 3 7M12 22C12.8182 22 13.5998 21.6698 15.1631 21.0095C19.0544 19.3657 21 18.5438 21 17.1613V7M12 22V11.3548" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.32592 9.69138L5.40472 8.27785C3.80157 7.5021 3 7.11423 3 6.5C3 5.88577 3.80157 5.4979 5.40472 4.72215L8.32592 3.30862C10.1288 2.43621 11.0303 2 12 2C12.9697 2 13.8712 2.4362 15.6741 3.30862L18.5953 4.72215C20.1984 5.4979 21 5.88577 21 6.5C21 7.11423 20.1984 7.5021 18.5953 8.27785L15.6741 9.69138C13.8712 10.5638 12.9697 11 12 11C11.0303 11 10.1288 10.5638 8.32592 9.69138Z" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 12L8 13" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 4L7 9" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        ),
      },
      {
        id: "reputation-item",
        title: "Reputation",
        href: "/dashboard/reputation",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        ),
      },
      {
        id: "community-item",
        title: "Community",
        href: "/dashboard/community",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 11C15.5 9.067 13.933 7.5 12 7.5C10.067 7.5 8.5 9.067 8.5 11C8.5 12.933 10.067 14.5 12 14.5C13.933 14.5 15.5 12.933 15.5 11Z" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.483 11.3499C15.805 11.4475 16.1465 11.5 16.5003 11.5C18.4333 11.5 20.0003 9.933 20.0003 8C20.0003 6.067 18.4333 4.5 16.5003 4.5C14.6854 4.5 13.1931 5.8814 13.0176 7.65013" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.9827 7.65013C10.8072 5.8814 9.31492 4.5 7.5 4.5C5.567 4.5 4 6.067 4 8C4 9.933 5.567 11.5 7.5 11.5C7.85381 11.5 8.19535 11.4475 8.51727 11.3499" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 16.5C22 13.7386 19.5376 11.5 16.5 11.5" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.5 19.5C17.5 16.7386 15.0376 14.5 12 14.5C8.96243 14.5 6.5 16.7386 6.5 19.5" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.5 11.5C4.46243 11.5 2 13.7386 2 16.5" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        ),
      }
    ]
  },
  {
    id: "bottom",
    items: [
      {
        id: "settings-item",
        title: "Settings",
        href: "/dashboard/settings",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.3175 7.14139L20.8239 6.28479C20.4506 5.63696 20.264 5.31305 19.9464 5.18388C19.6288 5.05472 19.2696 5.15664 18.5513 5.36048L17.3311 5.70418C16.8725 5.80994 16.3913 5.74994 15.9726 5.53479L15.6357 5.34042C15.2766 5.11043 15.0004 4.77133 14.8475 4.37274L14.5136 3.37536C14.294 2.71534 14.1842 2.38533 13.9228 2.19657C13.6615 2.00781 13.3143 2.00781 12.6199 2.00781H11.5051C10.8108 2.00781 10.4636 2.00781 10.2022 2.19657C9.94085 2.38533 9.83106 2.71534 9.61149 3.37536L9.27753 4.37274C9.12465 4.77133 8.84845 5.11043 8.48937 5.34042L8.15249 5.53479C7.73374 5.74994 7.25259 5.80994 6.79398 5.70418L5.57375 5.36048C4.85541 5.15664 4.49625 5.05472 4.17867 5.18388C3.86109 5.31305 3.67445 5.63696 3.30115 6.28479L2.80757 7.14139C2.45766 7.74864 2.2827 8.05227 2.31666 8.37549C2.35061 8.69871 2.58483 8.95918 3.05326 9.48012L4.0843 10.6328C4.3363 10.9518 4.51521 11.5078 4.51521 12.0077C4.51521 12.5078 4.33636 13.0636 4.08433 13.3827L3.05326 14.5354C2.58483 15.0564 2.35062 15.3168 2.31666 15.6401C2.2827 15.9633 2.45766 16.2669 2.80757 16.8741L3.30114 17.7307C3.67443 18.3785 3.86109 18.7025 4.17867 18.8316C4.49625 18.9608 4.85542 18.8589 5.57377 18.655L6.79394 18.3113C7.25263 18.2055 7.73387 18.2656 8.15267 18.4808L8.4895 18.6752C8.84851 18.9052 9.12464 19.2442 9.2775 19.6428L9.61149 20.6403C9.83106 21.3003 9.94085 21.6303 10.2022 21.8191C10.4636 22.0078 10.8108 22.0078 11.5051 22.0078H12.6199C13.3143 22.0078 13.6615 22.0078 13.9228 21.8191C14.1842 21.6303 14.294 21.3003 14.5136 20.6403L14.8476 19.6428C15.0004 19.2442 15.2765 18.9052 15.6356 18.6752L15.9724 18.4808C16.3912 18.2656 16.8724 18.2055 17.3311 18.3113L18.5513 18.655C19.2696 18.8589 19.6288 18.9608 19.9464 18.8316C20.264 18.7025 20.4506 18.3785 20.8239 17.7307L21.3175 16.8741C21.6674 16.2669 21.8423 15.9633 21.8084 15.6401C21.7744 15.3168 21.5402 15.0564 21.0718 14.5354L20.0407 13.3827C19.7887 13.0636 19.6098 12.5078 19.6098 12.0077C19.6098 11.5078 19.7888 10.9518 20.0407 10.6328L21.0718 9.48012C21.5402 8.95918 21.7744 8.69871 21.8084 8.37549C21.8423 8.05227 21.6674 7.74864 21.3175 7.14139Z" stroke="#383838" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M15.5195 12C15.5195 13.933 13.9525 15.5 12.0195 15.5C10.0865 15.5 8.51953 13.933 8.51953 12C8.51953 10.067 10.0865 8.5 12.0195 8.5C13.9525 8.5 15.5195 10.067 15.5195 12Z" stroke="#383838" strokeWidth="1.5" />
          </svg>
        ),
      },
      {
        id: "logout-item",
        title: "Log Out",
        href: "/dashboard/overview",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 17.625C14.9264 19.4769 13.3831 21.0494 11.3156 20.9988C10.8346 20.987 10.2401 20.8194 9.05112 20.484C6.18961 19.6768 3.70555 18.3203 3.10956 15.2815C3 14.723 3 14.0944 3 12.8373V11.1627C3 9.90561 3 9.27705 3.10956 8.71846C3.70555 5.67965 6.18961 4.32316 9.05112 3.51603C10.2401 3.18064 10.8346 3.01295 11.3156 3.00119C13.3831 2.95061 14.9264 4.52307 15 6.37501" stroke="#383838" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M21 12H10M21 12C21 11.2998 19.0057 9.99153 18.5 9.5M21 12C21 12.7002 19.0057 14.0085 18.5 14.5" stroke="#383838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        ),
      }
    ]
  }
]

const MenuSidebar = () => {

  const pathname = usePathname()
  const { openSheet, overlay, setOverlay, closeSidebar, sidebarOpen, setSidebarOpen, sidebarCollapsed, setSidebarCollapsed } = useUIState()



  useEffect(() => {
    const handleSidebarResize = () => {
      if (window.innerWidth <= 768) {
        setSidebarCollapsed(false)
        setOverlay(true)
      }else{
        setOverlay(false)
      }

    }


    // Call once on mount
    handleSidebarResize()

    // Attach resize listener
    window.addEventListener('resize', handleSidebarResize)

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleSidebarResize)
    }
  }, [setSidebarCollapsed, setOverlay]) // 


  const handleProfileCompleteClick = ()=> {
    closeSidebar()
    openSheet(<CompleteProfile />)
    // Navigate to profile completion page or open modal
    // For example, you can use router.push('/profile/complete') if using Next.js
  }

  return (
    <>
      <div className={`${sidebarOpen ? 'translate-x-[0]' : '-translate-x-[100%]'} fixed inset-y-0 bg-white transform transition-all duration-300 ease-in-out -translate-x-[100%] md:-translate-x-0 overflow-y-auto scrollbar-hide ${sidebarCollapsed ? 'w-20' : 'min-w-72'}  md:sticky top-0 min-h-screen md:h-screen  shrink-0 z-50 sm:border-r flex flex-col`}>
        <div className={`${sidebarCollapsed && 'flex-col'} hidden  z-20 md:flex sticky top-0 bg-white py-5 px-4 items-center justify-between`}>
          <Link href="/">
            <div className="text-2xl text-center w-full font-bold text-[#0d9488] self-center">GT</div>
          </Link>
          <Button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} variant="ghost" size="icon" asChild className={`${sidebarCollapsed ? 'invisible opacity-0 absolute transform scale-0' : 'visible'} hover:bg-transparent hidden md:block cursor-pointer w-6 h-6`}>
            <svg className='shrink-0' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12C2 8.31087 2 6.4663 2.81382 5.15877C3.1149 4.67502 3.48891 4.25427 3.91891 3.91554C5.08116 3 6.72077 3 10 3H14C17.2792 3 18.9188 3 20.0811 3.91554C20.5111 4.25427 20.8851 4.67502 21.1862 5.15877C22 6.4663 22 8.31087 22 12C22 15.6891 22 17.5337 21.1862 18.8412C20.8851 19.325 20.5111 19.7457 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7457 3.1149 19.325 2.81382 18.8412C2 17.5337 2 15.6891 2 12Z" stroke="#141B34" strokeWidth="1.5" />
              <path d="M9.5 3V21" stroke="#141B34" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M5 7H6M5 10H6" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
          <button onClick={() => setSidebarOpen(false)} className='hover:bg-gray-50 rounded-md p-1 cursor-pointer block md:hidden'>
            <X />
          </button>
        </div>
        {/* Menu Items */}
        <div className='py-3 px-4 flex flex-col flex-1  items-start justify-between'>
          <div className='w-full flex flex-col justify-between h-full gap-6 divide-y'>
            
            <ul className='list-none grid gap-1 sm:gap-2 pb-5'>
              <div className='py-4 borderl block md:hidden'>
              <User />
            </div>
              <Button onClick={handleProfileCompleteClick} className={`flex lg:hidden bg-[#0d9488] hover:bg-[#0b5f5a]/90 cursor-pointer text-white px-6 py-6 rounded-md items-center ${sidebarCollapsed ? 'justify-center' : 'justify-between'}  gap-2 shadow-none mb-2`}>
                <div className='flex items-center gap-4'>
                  <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.84553 12.5631C2.99545 13.6767 3.91775 14.549 5.0401 14.6006C5.98451 14.644 6.94386 14.6667 8.00033 14.6667C9.05679 14.6667 10.0161 14.644 10.9605 14.6006C12.0829 14.549 13.0052 13.6767 13.1551 12.5631C13.253 11.8365 13.3337 11.0917 13.3337 10.3333C13.3337 9.57493 13.253 8.8302 13.1551 8.10353C13.0052 6.99 12.0829 6.11766 10.9605 6.06606C10.0161 6.02265 9.05679 6 8.00033 6C6.94386 6 5.98451 6.02265 5.0401 6.06606C3.91775 6.11766 2.99545 6.99 2.84553 8.10353C2.74769 8.8302 2.66699 9.57493 2.66699 10.3333C2.66699 11.0917 2.74769 11.8365 2.84553 12.5631Z" stroke="white" />
                    <path d="M5 5.99992V4.33325C5 2.6764 6.34315 1.33325 8 1.33325C9.65687 1.33325 11 2.6764 11 4.33325V5.99992" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.99707 10.3333H8.00307" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  </span>
                  <p className={`${sidebarCollapsed && 'hidden'}`} >Complete setup</p>
                </div>
                <ChevronRight className={`${sidebarCollapsed && 'hidden'} w-6 h-6`} />
              </Button>
              {navigationData[0].items.map(menuItem => (
                <MenuItem key={menuItem.id} isActive={pathname === menuItem.href } {...menuItem} />
              ))}
            </ul>
            <ul className='list-none grid gap-1 sm:gap-2 '>
              {navigationData[1].items.map(menuItem => (
                <MenuItem key={menuItem.id} isActive={pathname === menuItem.href  || pathname.includes(`${menuItem?.href}`)} {...menuItem} />
              ))}
            </ul>
          </div>
          <div className={`${sidebarCollapsed && 'hidden'} grid gap-6 my-8 w-full`}>
            {/* Become a Receiver */}
            <Card className="bg-[#f1f3de] shadow-none border-0 relative w-full py-5 h-auto">
              <Button variant="ghost" size="icon" className="absolute top-3 right-3 w-8 h-8">
                <X className="w-4 h-4" />
              </Button>
              <CardContent className="px-3 sm:px-5">
                <h3 className="font-semibold text-[#222222] mb-1">Become a Receiver</h3>
                <p className="text-sm text-[#626262] mb-4">Receive items from others</p>
                <Button className="bg-[#0d9488] hover:bg-[#14ae7d] cursor-pointer text-white w-full">Get Started</Button>
              </CardContent>
            </Card>

            {/* Need Help */}
            <Card className="bg-[#ffffff] shadow-none border w-full h-auto py-3 border-gray-200">
              <CardContent className="px-3 sm:px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-[#222222] mb-1">Need Help?</h3>
                    <p className="text-sm text-[#626262]">Visit our Help centre</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#626262]" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div onClick={() => setSidebarOpen(false)} className={`${overlay && sidebarOpen ? 'block translate-x-0' : 'hidden'} z-30 transform duration-300 -translate-x-[100%] transition-all ease-in-out absolute inset-0  min-h-screen w-full bg-black/40 backdrop-blur-md`} />
    </>
  )
}

export default MenuSidebar