"use client"

import React, {useRef, useState } from 'react'
import { toast } from 'sonner'
import ResponsiveModal from '../modal/ResponsiveModal'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { StarIcon } from 'lucide-react'
import FeedbackReceivedAlert from '../pickup/FeedbackReceivedAlert'
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks'
import { showRatingModal } from '@/redux/slices/modalSlice'

const positiveFeedbackOptions = [
    {
        id: 'grateful',
        title: "Grateful",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none"><path stroke="#0D9488" d="M1.667 8.5c0-2.986 0-4.479.927-5.406.928-.928 2.42-.928 5.406-.928 2.986 0 4.479 0 5.406.928.928.927.928 2.42.928 5.405 0 2.986 0 4.479-.928 5.406-.927.928-2.42.928-5.406.928-2.985 0-4.478 0-5.406-.928-.927-.927-.927-2.42-.927-5.406Z" /><path stroke="#0D9488" strokeLinecap="round" strokeLinejoin="round" d="M5.333 9.667s1.067.608 1.6 1.5c0 0 1.6-3.5 3.733-4.667" /></svg>
    },
    {
        id: 'polite',
        title: "Polite",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none"><path stroke="#B36ADD" stroke-linejoin="round" d="M14.666 8.212c0 3.522-2.985 6.378-6.666 6.378a6.94 6.94 0 0 1-1.29-.12c-.306-.057-.46-.086-.566-.07-.107.017-.258.097-.561.258a4.333 4.333 0 0 1-2.816.438c.365-.45.615-.988.725-1.566.066-.353-.099-.696-.346-.947-1.124-1.141-1.813-2.679-1.813-4.371C1.333 4.69 4.318 1.834 8 1.834c3.681 0 6.666 2.856 6.666 6.378Z" /><path stroke="#B36ADD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="M7.997 8.5h.006m2.657 0h.006m-5.333 0h.006" /></svg>

    },
    {
        id: 'prompt-response',
        title: "Promt response",
        icon: <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.75242 8.94907H5.44644C4.45729 8.94907 3.96271 8.94907 3.7519 8.62293C3.54108 8.29687 3.74195 7.84253 4.14368 6.93389L5.35144 4.20215C5.7167 3.376 5.89934 2.96292 6.25364 2.73146C6.60794 2.5 7.05759 2.5 7.95699 2.5H9.34992C10.4425 2.5 10.9887 2.5 11.1947 2.8569C11.4008 3.2138 11.1298 3.69059 10.5877 4.64415L9.87312 5.90125C9.60366 6.3753 9.46892 6.61233 9.47079 6.80635C9.47326 7.0585 9.60732 7.2908 9.82392 7.418C9.99059 7.51593 10.2621 7.51593 10.8053 7.51593C11.4919 7.51593 11.8352 7.51593 12.014 7.6348C12.2463 7.7892 12.3679 8.06547 12.3253 8.34213C12.2925 8.55507 12.0615 8.8104 11.5997 9.32113L7.90959 13.4015C7.18479 14.203 6.82239 14.6037 6.57904 14.4769C6.33568 14.3501 6.45254 13.8215 6.68626 12.7641L7.14412 10.6931C7.32206 9.888 7.41106 9.48547 7.19706 9.21727C6.98306 8.94907 6.57284 8.94907 5.75242 8.94907Z" stroke="#3B82F6" strokeLinejoin="round" />
        </svg>
    },
    {
        id: 'trustworthy',
        title: "Trustworthy",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none"><path stroke="#E8B931" strokeLinecap="round" strokeLinejoin="round" d="M14.666 5h-1.859c-.4 0-.601 0-.79-.058-.189-.057-.356-.168-.69-.39-.5-.334-1.07-.714-1.353-.8-.284-.086-.584-.086-1.185-.086-.818 0-1.345 0-1.712.152-.368.152-.657.442-1.235 1.02l-.509.508c-.13.13-.195.196-.235.26a.667.667 0 0 0 .04.766c.048.06.12.117.263.233.53.427 1.295.384 1.776-.1L8 5.679h.666l4 4.024c.368.37.368.97 0 1.341a.939.939 0 0 1-1.333 0L11 10.708m0 0L9 8.696m2 2.012c.368.37.368.97 0 1.34a.939.939 0 0 1-1.334 0L9 11.379m0 0c.368.37.368.971 0 1.342a.939.939 0 0 1-1.334 0l-1-1.006M9 11.378l-1.334-1.333m-1 1.669-.333-.336m.333.336c.369.37.369.97 0 1.34a.939.939 0 0 1-1.333 0l-1.882-1.92c-.387-.396-.58-.593-.828-.697-.248-.104-.525-.104-1.077-.104h-.213" /><path stroke="#E8B931" strokeLinecap="round" d="M14.667 10.334H13M5.666 5H1.333" /></svg>
    },
    {
        id: 'patience-and-understanding',
        title: "Patience and understanding",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none"><path stroke="#14AE7D" strokeLinecap="round" strokeLinejoin="round" d="M8 15.167A6.667 6.667 0 1 0 8 1.834a6.667 6.667 0 0 0 0 13.333Z" /><path stroke="#14AE7D" stroke-linecap="round" stroke-linejoin="round" d="M5.333 10.5A3.328 3.328 0 0 0 8 11.833c1.09 0 2.058-.523 2.666-1.333" /><path stroke="#14AE7D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="M5.339 6.5h-.006m5.333 0h-.006" /></svg>
    },
    {
        id: 'leave-a-comment',
        title: "Leave a comment",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none"><path stroke="#989F42" strokeLinecap="round" strokeLinejoin="round" d="M1.667 8.5c0-2.986 0-4.479.927-5.406.928-.928 2.42-.928 5.406-.928 2.986 0 4.479 0 5.406.928.928.927.928 2.42.928 5.405 0 2.986 0 4.479-.928 5.406-.927.928-2.42.928-5.406.928-2.985 0-4.478 0-5.406-.928-.927-.927-.927-2.42-.927-5.406ZM8 5.834v5.333m2.666-2.666H5.333" /></svg>
    }
]



const negativeFeedbackOptions = [
    {
        id: 'no-follow-up',
        title: "No follow-up/no-show",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none"><path stroke="#0D9488" d="M1.667 8.5c0-2.986 0-4.479.927-5.406.928-.928 2.42-.928 5.406-.928 2.986 0 4.479 0 5.406.928.928.927.928 2.42.928 5.405 0 2.986 0 4.479-.928 5.406-.927.928-2.42.928-5.406.928-2.985 0-4.478 0-5.406-.928-.927-.927-.927-2.42-.927-5.406Z" /><path stroke="#0D9488" strokeLinecap="round" strokeLinejoin="round" d="M5.333 9.667s1.067.608 1.6 1.5c0 0 1.6-3.5 3.733-4.667" /></svg>
    },
    {
        id: 'poor-communication',
        title: "Poor communication",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none"><path stroke="#B36ADD" stroke-linejoin="round" d="M14.666 8.212c0 3.522-2.985 6.378-6.666 6.378a6.94 6.94 0 0 1-1.29-.12c-.306-.057-.46-.086-.566-.07-.107.017-.258.097-.561.258a4.333 4.333 0 0 1-2.816.438c.365-.45.615-.988.725-1.566.066-.353-.099-.696-.346-.947-1.124-1.141-1.813-2.679-1.813-4.371C1.333 4.69 4.318 1.834 8 1.834c3.681 0 6.666 2.856 6.666 6.378Z" /><path stroke="#B36ADD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="M7.997 8.5h.006m2.657 0h.006m-5.333 0h.006" /></svg>

    },
    {
        id: 'entitled-behaviour',
        title: "Entitled behaviour",
        icon: <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.75242 8.94907H5.44644C4.45729 8.94907 3.96271 8.94907 3.7519 8.62293C3.54108 8.29687 3.74195 7.84253 4.14368 6.93389L5.35144 4.20215C5.7167 3.376 5.89934 2.96292 6.25364 2.73146C6.60794 2.5 7.05759 2.5 7.95699 2.5H9.34992C10.4425 2.5 10.9887 2.5 11.1947 2.8569C11.4008 3.2138 11.1298 3.69059 10.5877 4.64415L9.87312 5.90125C9.60366 6.3753 9.46892 6.61233 9.47079 6.80635C9.47326 7.0585 9.60732 7.2908 9.82392 7.418C9.99059 7.51593 10.2621 7.51593 10.8053 7.51593C11.4919 7.51593 11.8352 7.51593 12.014 7.6348C12.2463 7.7892 12.3679 8.06547 12.3253 8.34213C12.2925 8.55507 12.0615 8.8104 11.5997 9.32113L7.90959 13.4015C7.18479 14.203 6.82239 14.6037 6.57904 14.4769C6.33568 14.3501 6.45254 13.8215 6.68626 12.7641L7.14412 10.6931C7.32206 9.888 7.41106 9.48547 7.19706 9.21727C6.98306 8.94907 6.57284 8.94907 5.75242 8.94907Z" stroke="#3B82F6" strokeLinejoin="round" />
        </svg>
    },
    {
        id: 'leave-a-comment',
        title: "Leave a comment",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none"><path stroke="#989F42" strokeLinecap="round" strokeLinejoin="round" d="M1.667 8.5c0-2.986 0-4.479.927-5.406.928-.928 2.42-.928 5.406-.928 2.986 0 4.479 0 5.406.928.928.927.928 2.42.928 5.405 0 2.986 0 4.479-.928 5.406-.927.928-2.42.928-5.406.928-2.985 0-4.478 0-5.406-.928-.927-.927-.927-2.42-.927-5.406ZM8 5.834v5.333m2.666-2.666H5.333" /></svg>
    }

]


const Review = () => {
    const dispatch = useAppDispatch()
    const {rating} = useAppSelector((state) => state.modal);
    const {ratingModalOpen, currentRatingItemId} = rating;
    console.log("Review component rendered with id:", currentRatingItemId);


    const [ratingCount, setRatingCount] = useState(0)
    const [feedback, setFeedback] = useState<string[]>([]);
    const commentRef = useRef<string>('');
    const [hoveredRating, setHoveredRating] = useState(0)
    const [feedbackReceivedModal, setFeedbackReceivedModal] = useState(false)

    const suitableFeedbackOptions = () => {
        return ratingCount <= 2 ? negativeFeedbackOptions : positiveFeedbackOptions;
    }

    const handleFeedbackModalClose = () => {
        setFeedbackReceivedModal(false)
        setRatingCount(0)
        setHoveredRating(0)
    }

    const handleFeedbackSubmit = () => {
        if (feedback.length === 0) {
            toast.error("Please select at least one feedback option.")
            return
        }
        if (ratingCount === 0) {
            toast.error("Please select a rating.")
            return
        }

        if (feedback.includes('leave-a-comment')) {
            if (commentRef.current.trim().length < 10) {
                toast.error("Comment must be at least 10 characters long.")
                return;
            }
        }

        console.log("Feedback submitted:", { feedback, comment: commentRef.current, rating })
        dispatch(showRatingModal(false))
        setFeedbackReceivedModal(true)
        // setRating(0)
        setHoveredRating(0)
        commentRef.current = '';
        // Here you can add logic to save the feedback
    }

    return (
        <>
            <ResponsiveModal open={ratingModalOpen} close={() => dispatch(showRatingModal(false))} className='min-h-[90%] md:min-h-auto py-6 w-full md:w-[500px]'>
                <div className='flex flex-col items-center gap-3 justify-center text-center p-4'>

                    <h4 className="text-lg font-normal text-[#222222] mb-2">How was your experience?</h4>

                    {/* Star Rating */}
                    <div className="flex justify-center gap-1 mb-2 border-b border-transparent w-full">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                className="p-1 cursor-pointer "
                                onMouseEnter={() => setHoveredRating(star)}
                                onMouseLeave={() => setHoveredRating(0)}
                                onClick={() => setRatingCount(star)}
                            >
                                <StarIcon
                                    className={`w-8 h-8 stroke-none ${star <= (hoveredRating || ratingCount) ? "fill-[#FACC15] text-[#e8b931]" : "text-[#ededed] fill-gray-100"
                                        }`}
                                />
                            </button>
                        ))}
                    </div>
                    {ratingCount ? <div className='border-0  border-t w-full py-4'>
                        <h4 className="text-md font-normal text-[#222222] mb-6">Leave feedback</h4>
                        <div className='flex flex-wrap items-center gap-3 mb-4'>
                            {suitableFeedbackOptions().map((option) => (
                                <button
                                    key={option.id}
                                    className={`border rounded-full flex items-center gap-2 py-2 px-4 cursor-pointer ${feedback.includes(option.id) ? "bg-[#E6F8F4]/40 border-[#85C9C3] text-app-black" : "text-gray-500 bg-transparent hover:bg-[#F9F9F9] hover:text-app-black"
                                        }`}
                                    onClick={() => {
                                        setFeedback((prev) =>
                                            prev.includes(option.id)
                                                ? prev.filter((id) => id !== option.id)
                                                : [...prev, option.id]
                                        );
                                    }}
                                >
                                    {option.icon}
                                    <span className='text-xs md:text-sm'>{option.title}</span>
                                </button>
                            ))}


                            <Textarea defaultValue="" onChange={(e) => { commentRef.current = e.target.value }} rows={7} id="comment" placeholder="Leave a comment" className={feedback.includes('leave-a-comment') ? "" : "hidden"} />


                        </div>
                    </div> : ''}

                    <Button onClick={handleFeedbackSubmit} disabled={feedback.length === 0} variant="primary" className='w-full py-6 px-6'>Submit</Button>
                    {/* Product Info */}
                    <div className="w-full flex items-center gap-3 p-3 bg-[#f9fafb] rounded-lg mt-2">
                        <Image
                            src="/assets/giver-items/Frame 2087328010-2.png"
                            width={400}
                            height={400}
                            alt="Vintage Desk Lamp"
                            className="w-20 h-16 rounded-lg object-cover"
                        />
                        <div className="text-left grid gap-1">
                            <div className="font-medium text-[#222222]">Vintage Desk Lamp</div>
                            <div className="text-sm text-[#878686]">Picked up by Sarah Johnson</div>
                        </div>
                    </div>
                </div>
            </ResponsiveModal>
            <FeedbackReceivedAlert
                subtext='Thank you for taking out time to give a feedback for receiver'
                open={feedbackReceivedModal}
                onClose={handleFeedbackModalClose}
                buttonText='Ok'
            />
        </>
    )
}

export default Review