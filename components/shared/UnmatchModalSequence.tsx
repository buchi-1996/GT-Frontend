"use client"

import React, { useState } from 'react'
import ResponsiveModal from '../modal/ResponsiveModal'
import { Button } from '../ui/button'
import ResponsiveAlert from '../modal/ResponsiveAlert'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks'
import { showUnmatchModal } from '@/redux/slices/modalSlice'


const unmatchOptions = [
    {
        value: "item not available",
        title: "Item No Longer Available",
        description: "The item was damaged, lost, or otherwise became unavailable before collection.",
        id: "item-not-available"
    },
    {
        value: "receiver unresponsive",
        title: "Receiver Unresponsive",
        description: "No response to confirmation messages or failure to confirm collection details.",
        id: "receiver-unresponsive"
    },
    {
        value: "receiver missed communication",
        title: "Receiver Missed Communication Window",
        description: "Collection information or response not provided within the agreed communication period.",
        id: "receiver-missed-communication"
    },
    {
        value: "changed decision personal",
        title: "Changed Decision – Personal Reasons",
        description: "Item reconsidered for giving away due to personal or emotional attachment.",
        id: "changed-decision-personal"
    },
    {
        value: "item re-evaluated",
        title: "Item Re-evaluated for Use",
        description: "A new personal use or need for the item was found.",
        id: "item-re-evaluated"
    },
    {
        value: "item donated elsewhere",
        title: "Item Donated Elsewhere",
        description: "Item donated through another platform, organization, or in person before confirmation.",
        id: "item-donated-elsewhere"
    },
    {
        value: "logistical constraints",
        title: "Logistical Constraints",
        description: "Collection arrangements became unfeasible (e.g., unavailability of someone to hand over the item).",
        id: "logistical-constraints"
    },
    {
        value: "health emergency",
        title: "Health or Emergency Issues",
        description: "Personal or family emergency, illness, or another urgent issue made the transfer impossible.",
        id: "health-emergency"
    },
    {
        value: "trust concerns",
        title: "Suspicion or Trust Concerns",
        description: "Discomfort due to suspicious or inappropriate communication.",
        id: "trust-concerns"
    },
    {
        value: "incorrect listing",
        title: "Incorrect Listing Details",
        description: "Key information in the listing (item type, condition, availability) was inaccurate and needs correction.",
        id: "incorrect-listing"
    },
    {
        value: "receiver attempted payment",
        title: "Receiver Attempted Negotiation or Payment",
        description: "Money or barter was offered, which is against GT's core values.",
        id: "receiver-attempted-payment"
    },
    {
        value: "receiver missed appointment",
        title: "Receiver Missed an Earlier Collection Appointment",
        description: "No show at a prior agreed-upon time without reasonable justification.",
        id: "receiver-missed-appointment"
    },
    {
        value: "policy conflict",
        title: "Community or Neighbourhood Policy Conflict",
        description: "Local rules or building policies do not allow handover at the specified location.",
        id: "policy-conflict"
    },
    {
        value: "incomplete or misleading",
        title: "Receiver's Profile Incomplete or Misleading",
        description: "Inconsistencies or missing critical information identified in profile.",
        id: "incomplete-or-misleading"
    },
    {
        value: "other",
        title: "Other (please Specify)",
        description: "",
        id: "other",
        hasTextarea: true
    }
];





const UnmatchModalSequence = () => {
    const dispatch = useAppDispatch()
    const {unmatchModalOpen} = useAppSelector((state) => state.modal);
    const [reasonModal, setReasonModal] = useState(false)
    const [feedBackModal, setFeedBackModal] = useState(false)
    const [isRelisted, setIsRelisted] = useState(false)
    const [isArchived, setIsArchived] = useState(false)
    const [selectedValue, setSelectedValue] = useState('')



    


    const handleUnmatch = () => {
        console.log("Item un-matched successfully!");
        dispatch(showUnmatchModal(false));
        setReasonModal(true);
    }

    const handleReasonModalClose = () => {
        setReasonModal(false);
    }

    const handleReasonSubmit = () => {
        console.log('Submitted reason')
        setReasonModal(false)
        setFeedBackModal(true);
    }

    const handleArchive = () => {
        console.log('Archived')
        setFeedBackModal(false)
        setIsArchived(true)
    }

    const handleRelist = () => {
        console.log('Relisted')
        setFeedBackModal(false)
        setIsRelisted(true)
    }


    return (
        <>
            <ResponsiveModal open={unmatchModalOpen} close={() => dispatch(showUnmatchModal(false))} className='py-6 md:py-20' >
                <div className='flex flex-col items-center gap-3 justify-center text-center p-6'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="87" height="84" fill="none"><rect width="80" height="80" y=".25" fill="#F1F3DE" rx="40" /><path stroke="#989F42" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.219" d="M49.407 57.666v-4.355c0-2.666-1.2-5.28-3.626-6.386-2.959-1.348-6.507-2.134-10.322-2.134-3.815 0-7.364.786-10.323 2.134-2.425 1.106-3.625 3.72-3.625 6.386v4.355M57.99 57.668v-4.355c0-2.666-1.2-5.28-3.626-6.385a21.84 21.84 0 0 0-1.739-.703M35.459 38.355a7.51 7.51 0 1 0 0-15.021 7.51 7.51 0 0 0 0 15.02ZM46.188 23.643a7.514 7.514 0 0 1 0 14.398" /><circle cx="64" cy="60.75" r="21.5" fill="#D33737" stroke="#fff" stroke-width="3" /><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.143" d="M61.809 54.425c1.033 1.033 1.55 1.55 2.191 1.55.642 0 1.158-.517 2.191-1.55l2.192-2.191c.51-.51.765-.765 1.03-.918 1.333-.77 2.43-.006 3.353.917.924.924 1.687 2.022.918 3.354-.153.265-.408.52-.917 1.03l-2.192 2.191c-1.033 1.033-1.55 1.55-1.55 2.192 0 .642.517 1.158 1.55 2.191l2.191 2.192c.51.51.765.764.918 1.03.77 1.333.006 2.43-.918 3.353-.922.924-2.02 1.687-3.353.918-.265-.153-.52-.408-1.03-.918l-2.191-2.191c-1.033-1.033-1.55-1.55-2.192-1.55-.642 0-1.159.517-2.191 1.55l-2.192 2.191c-.51.51-.765.765-1.03.918-1.332.77-2.43.006-3.354-.918-.923-.923-1.686-2.02-.917-3.354.153-.265.408-.52.917-1.029l2.192-2.192c1.033-1.033 1.55-1.55 1.55-2.191 0-.642-.517-1.159-1.55-2.192l-2.192-2.191c-.51-.51-.764-.765-.917-1.03-.77-1.333-.006-2.43.917-3.354.924-.923 2.022-1.686 3.354-.917.265.153.52.408 1.03.917l2.192 2.192Z" /></svg>
                    </span>
                    <h4 className='text-xl font-semibold'>Are you sure?</h4>
                    <p className='text-sm text-gray-500 sm:max-w-sm'>Un-matching the recipient will automatically list the item as available to the public.</p>
                    <div className='flex items-center justify-center gap-4 mt-6'>
                        <Button onClick={() => dispatch(showUnmatchModal(false))} variant="secondary" className='py-6 px-6 cursor-pointer'>No, Cancel</Button>
                        <Button onClick={handleUnmatch} variant="primary" className='py-6 px-6'>Yes, Un-match</Button>
                    </div>
                </div>
            </ResponsiveModal >
            <ResponsiveModal open={reasonModal} close={handleReasonModalClose} className="pb-10 px-6">
                <h4 className='font-bold text-xl pb-6 md:pb-0'>Reason for Cancellation</h4>

                <RadioGroup
                    value={selectedValue}
                    onValueChange={setSelectedValue}
                    className='h-96 overflow-y-auto mb-4'
                >
                    {unmatchOptions.map((option) => (
                        <Label
                            key={option.value}
                            htmlFor={option.id}
                            className={`${option.hasTextarea ? 'w-full' : ''} flex items-start bg-gray-50 rounded-lg py-6 px-4 space-x-2`}
                        >
                            <RadioGroupItem
                                value={option.value}
                                className="mt-1 ring ring-app-primary text-app-primary"
                                id={option.id}
                            />
                            <div className={`${option.hasTextarea ? 'w-full' : ''} grid gap-2 items-start`}>
                                <h4 className='font-[500px] text-sm sm:text-[1rem] leading-6'>
                                    {option.title}
                                </h4>
                                {option.description && (
                                    <p className='text-gray-500 text-xs sm:text-sm leading-5'>
                                        {option.description}
                                    </p>
                                )}
                                {option.hasTextarea && (
                                    <Textarea
                                        rows={7}
                                        className='placeholder:text-gray-400 p-2 mt-1 min-w-full bg-white shadow-none border-none'
                                        placeholder='Provide details about your decision to un-match recipient.'
                                    />
                                )}
                            </div>
                        </Label>
                    ))}
                </RadioGroup>
                <Button
                    onClick={handleReasonSubmit}
                    disabled={!selectedValue}
                    variant="primary"
                    className='py-6 w-full'>Done</Button>
            </ResponsiveModal>



            <ResponsiveAlert open={feedBackModal} close={() => { }} className='py-6 md:py-20'>
                <div className='flex flex-col items-center gap-3 justify-center text-center p-6'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="89" height="85" fill="none"><rect width="80.497" height="80.496" x=".738" fill="#F1F3DE" rx="40.248" /><path stroke="#989F42" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.239" d="M50.448 57.773v-4.382c0-2.682-1.208-5.313-3.648-6.425-2.977-1.357-6.548-2.148-10.386-2.148-3.84 0-7.41.79-10.387 2.148-2.44 1.112-3.648 3.743-3.648 6.425v4.382M59.087 57.776v-4.382c0-2.682-1.207-5.312-3.648-6.425a21.966 21.966 0 0 0-1.75-.707M36.414 38.34a7.557 7.557 0 1 0 0-15.113 7.557 7.557 0 0 0 0 15.114ZM47.213 23.54a7.56 7.56 0 0 1 0 14.487" /><path fill="#14AE7D" stroke="#fff" stroke-width="3.019" d="M65.136 39.24c11.948 0 21.633 9.686 21.633 21.634s-9.685 21.634-21.633 21.634c-11.948 0-21.634-9.686-21.634-21.634S53.188 39.24 65.136 39.24Z" /><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.887" d="M77.535 52.815c.537 1.39-.216 2.34-1.674 3.277-1.176.756-2.674 1.575-4.262 2.976-1.556 1.372-3.075 3.025-4.424 4.653a68.725 68.725 0 0 0-3.295 4.324c-.521.743-1.25 1.852-1.25 1.852-.513.812-1.436 1.304-2.425 1.291-.99-.012-1.9-.526-2.39-1.351-1.256-2.11-2.225-2.943-2.67-3.242-1.192-.8-2.59-.919-2.59-2.785 0-1.482 1.251-2.683 2.795-2.683 1.09.04 2.102.469 3 1.072.574.386 1.181.895 1.813 1.567a72.302 72.302 0 0 1 2.639-3.388c1.455-1.755 3.173-3.637 5.016-5.262 1.81-1.597 3.904-3.093 6.124-3.883 1.447-.516 3.056.193 3.593 1.582Z" /></svg>
                    </span>
                    <h4 className='text-xl font-semibold'>Feedback Received</h4>
                    <p className='text-sm text-gray-500 sm:max-w-sm'>What would you like to do with the item.</p>
                    <div className='flex items-center justify-center gap-4 mt-6'>
                        <Button onClick={handleArchive} variant="secondary" className='w-auto md:w-44 py-6 px-6 cursor-pointer'>Archive</Button>
                        <Button onClick={handleRelist} variant="primary" className=' w-auto md:w-44 py-6 px-6'>Relist</Button>
                    </div>
                </div>
            </ResponsiveAlert>


            {/* Relisting success alert */}

            <ResponsiveAlert open={isRelisted} close={() => { }} className='py-6 md:py-20'>
                <div className='flex flex-col items-center gap-3 justify-center text-center p-6'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="89" height="85" fill="none"><rect width="80.497" height="80.496" x=".738" fill="#F1F3DE" rx="40.248" /><path stroke="#989F42" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M41 60c-1.636 0-3.2-.66-6.326-1.981C26.89 54.731 23 53.088 23 50.323V30m18 30c1.636 0 3.2-.66 6.326-1.981C55.11 54.731 59 53.088 59 50.323V30M41 60V38.71M33.652 35.383l-5.843-2.827C24.603 31.004 23 30.229 23 29s1.603-2.004 4.81-3.556l5.842-2.827C37.258 20.872 39.06 20 41 20c1.94 0 3.742.872 7.348 2.617l5.843 2.827C57.397 26.996 59 27.772 59 29c0 1.229-1.603 2.004-4.81 3.556l-5.842 2.827C44.742 37.128 42.94 38 41 38c-1.94 0-3.742-.872-7.348-2.617Z" /><path stroke="#989F42" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m29 40 4 2" /><path stroke="#989F42" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M51 24 31 34" /><path fill="#14AE7D" stroke="#fff" stroke-width="3.019" d="M65.136 39.24c11.948 0 21.633 9.686 21.633 21.634s-9.685 21.634-21.633 21.634c-11.948 0-21.634-9.686-21.634-21.634S53.188 39.24 65.136 39.24Z" /><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.887" d="M77.535 52.815c.537 1.39-.216 2.34-1.674 3.277-1.176.756-2.674 1.575-4.262 2.976-1.556 1.372-3.075 3.025-4.424 4.653a68.725 68.725 0 0 0-3.295 4.324c-.521.743-1.25 1.852-1.25 1.852-.513.812-1.436 1.304-2.425 1.291-.99-.012-1.9-.526-2.39-1.351-1.256-2.11-2.225-2.943-2.67-3.242-1.192-.8-2.59-.919-2.59-2.785 0-1.482 1.251-2.683 2.795-2.683 1.09.04 2.102.469 3 1.072.574.386 1.181.895 1.813 1.567a72.302 72.302 0 0 1 2.639-3.388c1.455-1.755 3.173-3.637 5.016-5.262 1.81-1.597 3.904-3.093 6.124-3.883 1.447-.516 3.056.193 3.593 1.582Z" /></svg>
                    </span>
                    <h4 className='text-xl font-semibold'>Item Re-listed</h4>
                    <p className='text-sm text-gray-500 sm:max-w-sm'>Your item has been listed to the public</p>
                    <div className='flex items-center justify-center gap-4 mt-6'>
                        <Button onClick={() => setIsRelisted(false)} variant="primary" className=' w-28 py-6 px-6'>Ok</Button>
                    </div>
                </div>
            </ResponsiveAlert>

            {/* Archived success alert */}
            <ResponsiveAlert open={isArchived} close={() => { }} className='py-6 md:py-20'>
                <div className='flex flex-col items-center gap-3 justify-center text-center p-6'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="89" height="84" fill="none"><rect width="80.497" height="80.496" x=".875" y=".25" fill="#F1F3DE" rx="40.248" /><path stroke="#989F42" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M41.137 60.25c-1.637 0-3.2-.66-6.326-1.981-7.783-3.288-11.674-4.931-11.674-7.696V30.25m18 30c1.636 0 3.2-.66 6.326-1.981 7.782-3.288 11.674-4.931 11.674-7.696V30.25m-18 30V38.96M33.789 35.633l-5.843-2.827c-3.206-1.552-4.81-2.327-4.81-3.556s1.604-2.004 4.81-3.556l5.843-2.827c3.605-1.745 5.408-2.617 7.348-2.617 1.94 0 3.742.872 7.348 2.617l5.842 2.827c3.206 1.552 4.81 2.328 4.81 3.556 0 1.229-1.604 2.004-4.81 3.556l-5.842 2.827c-3.606 1.745-5.409 2.617-7.348 2.617-1.94 0-3.743-.872-7.348-2.617Z" /><path stroke="#989F42" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m29.137 40.25 4 2" /><path stroke="#989F42" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m51.137 24.25-20 10" /><circle cx="65.123" cy="60.748" r="21.5" fill="#D33737" stroke="#fff" stroke-width="3" /><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.143" d="M62.932 54.423c1.033 1.033 1.55 1.55 2.191 1.55.642 0 1.158-.517 2.191-1.55l2.192-2.191c.51-.51.765-.765 1.03-.918 1.333-.77 2.43-.005 3.353.918.924.923 1.687 2.02.918 3.354-.153.264-.408.52-.917 1.029l-2.192 2.191c-1.033 1.033-1.55 1.55-1.55 2.192 0 .642.517 1.158 1.55 2.191l2.192 2.192c.509.51.764.765.917 1.03.77 1.333.006 2.43-.918 3.353-.922.924-2.02 1.687-3.353.918-.265-.153-.52-.408-1.03-.918l-2.191-2.191c-1.033-1.033-1.55-1.55-2.192-1.55-.642 0-1.159.517-2.192 1.55l-2.191 2.191c-.51.51-.765.765-1.03.918-1.332.77-2.43.006-3.353-.918-.924-.923-1.687-2.02-.918-3.353.153-.265.408-.52.918-1.03l2.191-2.192c1.033-1.033 1.55-1.55 1.55-2.19 0-.643-.517-1.16-1.55-2.193l-2.192-2.191c-.509-.51-.764-.765-.917-1.03-.77-1.333-.005-2.43.918-3.353s2.02-1.687 3.354-.918c.264.153.52.408 1.029.917l2.192 2.192Z" /></svg>
                    </span>
                    <h4 className='text-xl font-semibold'>Item Archived</h4>
                    <p className='text-sm text-gray-500 sm:max-w-sm'>Your item has be saved to draft and is not visible to the public</p>
                    <div className='flex items-center justify-center gap-4 mt-6'>
                        <Button onClick={() => setIsArchived(false)} variant="primary" className=' w-28 py-6 px-6'>Ok</Button>
                    </div>
                </div>
            </ResponsiveAlert>
        </>
    )
}

export default UnmatchModalSequence