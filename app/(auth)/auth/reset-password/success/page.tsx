import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='py-5 grid  min-h-[calc(100dvh)] bg-gradient-to-b  from-[#CCECE9] to-[#E4E9CF] md:bg-white md:from-white md:to-white  place-items-center'>
            <div className="container mx-auto p-6">
                <div className="grid h-full max-w-2xl mx-auto">
                    <div className='h-full w-full'>
                        <div className="w-full mb-10 flex flex-col items-center space-y-6">
                            <span className="mb-4">
                                <svg width="96" height="100" viewBox="0 0 96 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.28096 38.7292C5.52401 38.2462 7.73382 39.6728 8.21718 41.9155C8.70018 44.1586 7.27358 46.3691 5.03053 46.8521C2.78748 47.3355 0.577311 45.9085 0.0939485 43.6654C-0.389053 41.4224 1.03791 39.2122 3.28096 38.7292Z" fill="#FF6D83" />
                                    <path d="M91.0445 25.7435C93.2546 25.2676 95.4323 26.6729 95.9081 28.8829C96.3844 31.093 94.9788 33.2703 92.7687 33.7465C90.5587 34.2224 88.3813 32.8172 87.9051 30.6071C87.4292 28.397 88.8348 26.2194 91.0445 25.7435Z" fill="#4671FF" />
                                    <path d="M51.314 0.61382C53.623 0.116613 55.8978 1.58518 56.395 3.89382C56.8926 6.20284 55.4237 8.47839 53.1146 8.9756C50.8056 9.47318 48.5308 8.00424 48.0332 5.69522C47.536 3.3862 49.005 1.11103 51.314 0.61382Z" fill="#FFB636" />
                                    <path d="M30.439 91.0248C32.748 90.5273 35.0224 91.9958 35.52 94.3048C36.0172 96.6139 34.549 98.8887 32.24 99.3862C29.931 99.8835 27.6558 98.4153 27.1582 96.1062C26.661 93.7976 28.13 91.522 30.439 91.0248Z" fill="#4671FF" />
                                    <path d="M88.9053 71.1799C91.0751 70.7129 93.2142 72.0357 93.7842 74.1555L93.834 74.3625C94.3016 76.5327 92.9793 78.6724 90.8594 79.2424L90.6514 79.2922C88.4814 79.7596 86.3429 78.4373 85.7725 76.3176L85.7217 76.1096C85.2547 73.9397 86.5777 71.8012 88.6973 71.2307L88.9053 71.1799Z" fill="#AD8FE6" stroke="#AD8FE6" strokeWidth="0.377195" />
                                    <path d="M58.2223 16.8192C77.4667 21.9758 88.8867 41.7565 83.7306 61.0005C78.5737 80.2449 58.7926 91.6649 39.5486 86.5084C20.3046 81.3514 8.88412 61.5712 14.0411 42.3272C19.1972 23.0827 38.9779 11.6627 58.2223 16.8192Z" fill="#14AE7D" />
                                    <path d="M42.9065 65.3697C42.4949 65.7413 41.8616 65.7144 41.4825 65.3097L28.388 51.3257C27.9399 50.7662 27.7229 50.0613 27.7805 49.3524C27.8379 48.6428 28.1661 47.9821 28.699 47.5007C29.232 47.0196 29.9305 46.754 30.6547 46.7568C31.3791 46.7595 32.0761 47.0306 32.6067 47.5164L42.0438 57.5945C42.2962 57.8642 42.7186 57.8817 42.9929 57.6338L62.7848 39.7624C63.3538 39.323 64.0716 39.1108 64.7935 39.1689C65.5157 39.2267 66.1891 39.5496 66.6798 40.0742C67.1705 40.5977 67.4422 41.2844 67.4404 41.9959C67.4386 42.7073 67.1635 43.3912 66.6699 43.9117L42.9065 65.3697Z" fill="white" />
                                    <path d="M20.8339 15.3315C20.1737 12.8808 18.6051 9.63085 14.8838 7.56372" stroke="#FF6E83" strokeWidth="2.1428" strokeLinecap="round" />
                                    <path d="M16.6433 86.9876C15.9247 87.1068 14.8846 87.0464 13.4198 86.725C5.11064 84.901 12.5078 92.0955 12.5078 92.0955C12.5078 92.0955 14.4019 95.8136 10.7775 94.9028" fill="#AD8FE6" />
                                    <path d="M16.6433 86.9876C15.9247 87.1068 14.8846 87.0464 13.4198 86.725C5.11064 84.901 12.5078 92.0955 12.5078 92.0955C12.5078 92.0955 14.4019 95.8136 10.7775 94.9028" stroke="#AD8FE6" strokeWidth="2.02662" strokeLinecap="round" />
                                    <path d="M83.1266 11.4814C85.4041 10.6507 88.0768 11.4743 90.6678 16.5082C95.5503 25.9944 84.0269 24.0607 84.6969 18.1475" stroke="#FFB636" strokeWidth="1.83232" strokeLinecap="round" />
                                </svg>
                            </span>
                            <div className="space-y-2 flex flex-col gap-4 items-center justify-center ">
                                <h1 className="text-2xl md:text-4xl font-semibold text-[#222222] text-center mb-2">Password reset successfully</h1>
                                <p className="text-sm sm:text-[1rem] text-center max-w-md text-[#626262]">
                                    Your password has been successfully reset. You can now sign in with your new password
                                </p>
                            </div>
                            <Button className="w-44 bg-[#0d9488] cursor-pointer hover:bg-[#0b5f5a] text-white font-semibold shadow-none py-6 rounded-lg mb-4 disabled:opacity-50" size="lg">
                                <Link href='/auth/login' className="w-full flex items-center justify-center gap-2">Sign In</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page