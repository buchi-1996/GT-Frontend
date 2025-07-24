import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { StarIcon } from 'lucide-react';
import Image from 'next/image';

interface ContributorListItemProps {
    id: number;
    userName: string;
    profileImage: string;
    giveCount: number;
    highestGiver: boolean


}

const ContributorListItem = ({ id, userName, profileImage, giveCount, highestGiver }: ContributorListItemProps) => {
    return (
        <li className={`flex items-start xl:items-center justify-between p-5 ${highestGiver && 'bg-[#F1F3DE]'}`}>
            <div className='flex items-center gap-4 flex-1'>
                <p className='font-bold text-gray-500'>{id}</p>
                <div className='flex gap-2 sm:gap-4 flex-row items-start'>
                    <Avatar className="w-10 md:w-12 h-10 md:h-12">
                        <AvatarImage src={profileImage} />
                        <AvatarFallback className="bg-[#0d9488] text-white">SJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <div className="flex flex-col mb-1">
                            <h3 className="text-sm md:text-[1rem] font-semiboldtext-[#222222]">{userName}</h3>
                            <div className='flex items-center gap-2'>
                                <p className='text-xs  md:text-sm text-gray-500'>{giveCount} items given</p>
                                <span className='text-gray-500 text-sm'>•</span>
                                <div className="flex items-center gap-1 mr-1">
                                    <StarIcon className="w-4 h-4 stroke-0 fill-amber-300 text-[#E8B931]" />
                                    <span className="text-xs md:text-sm font-medium">5.0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Image
                src={"/assets/cup.png"}
                alt="cup"
                width={100}
                height={100}
                className={`${highestGiver ? 'block' : 'hidden'} w-10 h-auto shrink-0`}
            />
        </li>
    )
}

export default ContributorListItem