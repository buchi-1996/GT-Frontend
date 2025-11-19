import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { StarIcon } from 'lucide-react';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { showRatingModal } from '@/redux/slices/modalSlice';


interface ReviewCardProps {
    itemTitle?: string;
    giverName?: string;
    receiverName?: string;
    reviewText?: string;
    rating?: number;
    date?: string;
    isGiver?: boolean
    className?: string
}



const ReviewCard = ({ itemTitle, giverName, receiverName, reviewText, isGiver, className }: ReviewCardProps) => {
const dispatch = useAppDispatch();
    const avatarFallback = (giverName?.charAt(0)?.toUpperCase() ?? '') + (giverName?.split(' ')[1].charAt(0)?.toUpperCase() ?? '') || (receiverName?.charAt(0)?.toUpperCase() ?? '') + (receiverName?.split(' ')[1].charAt(0)?.toUpperCase() ?? '')


    const handleRating = () => {
        // Open the rating modal
        // setRatingModal(true)
        dispatch(showRatingModal(true));


    }


    return (
        <div className={`@container py-6 ${className}`}>
            <div className="flex flex-col justify-between sm:@md:flex-row items-start gap-4 mb-4">
                <div className='flex gap-2 sm:gap-4 flex-row items-start'>
                    <Avatar className="w-10 md:w-12 h-10 md:h-12">
                        <AvatarImage src="/placeholder.svg?height=48&width=48" />
                        <AvatarFallback className="bg-[#0d9488] text-white">{avatarFallback}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <div className="flex flex-col mb-1">
                            <h3 className="text-sm md:text-[1rem] font-semiboldtext-[#222222]">{giverName || receiverName}</h3>
                            <p className='text-xs md:text-sm text-gray-500'>For: {itemTitle}</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-[#626262]">
                    <div className='flex flex-col items-end gap-2'>
                        <div className="flex items-center gap-1">
                            <div className='flex items-center-safe gap-1'>
                                <StarIcon className="w-4 h-4 stroke-none fill-[#FACC15] text-[#e8b931]" />
                                <StarIcon className="w-4 h-4 stroke-none fill-[#FACC15] text-[#e8b931]" />
                                <StarIcon className="w-4 h-4 stroke-none fill-[#FACC15] text-[#e8b931]" />
                                <StarIcon className="w-4 h-4 stroke-none fill-[#FACC15] text-[#e8b931]" />
                                <StarIcon className="w-4 h-4 stroke-none fill-[#FACC15] text-[#e8b931]" />
                            </div>
                            <span className="text-xs md:text-sm text-nowrap"> • 2 days ago</span>
                        </div>
                        {isGiver && <button onClick={handleRating} className="hidden sm:@md:block cursor-pointer text-app-primary">Add Review</button>}
                    </div>
                </div>
            </div>
            <p className="text-[#383838] text-sm">{reviewText}</p>
            {isGiver && <button onClick={handleRating} className="block sm:@md:hidden text-sm mt-4 cursor-pointer text-app-primary">Add Review</button>}
            
        </div>
    )
}

export default ReviewCard