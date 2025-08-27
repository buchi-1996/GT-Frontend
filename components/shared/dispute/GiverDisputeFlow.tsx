"use client"

import React, { useState } from 'react'
import ResponsiveModal from '@/components/modal/ResponsiveModal'
import { useUIState } from '@/hooks/useAppState'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { GiverNoshowReasons } from '@/lib/data'
import { Label } from '@/components/ui/label'
import FeedbackReceivedAlert from '@/components/pickup/FeedbackReceivedAlert'

const GiverDisputeFlow = () => {

    const { giverDisputeModal, setGiverDisputeModal, setDisputeModalOpen } = useUIState()
    const { giveReasonModal, setReasonModal } = useUIState()
    const [selectedValue, setSelectedValue] = useState("")
    const [reasonReceivedModal, setReasonReceivedModal] = useState(false)
    const [disputeFeedbackReceived, setDisputeFeedbackReceived] = useState(false)
    const [doNextValue, setDoNextValue] = useState("")



    const handleSubmitAndNext = () => {
        setReasonReceivedModal(true)
        setGiverDisputeModal(false);
        setReasonModal(false);
    }

    const handleDisputeModal = () => {
        setDisputeModalOpen(true)
        setGiverDisputeModal(false)
    }

    const handleDoNext = () => {
        setDisputeFeedbackReceived(true)
        setReasonReceivedModal(false)
        console.log("Do next action submitted with value:", doNextValue);
    }

    const handleGiveReason = () => {
        setGiverDisputeModal(false)
        setReasonModal(true)

    }


    return (
        <>
            <ResponsiveModal open={giverDisputeModal} close={setGiverDisputeModal} className='px-4 md:px-6 py-6 md:py-20'>
                <div className='grid gap-4 place-items-center'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none"><rect width="80" height="80" fill="#F1F3DE" rx="40" /><path stroke="#989F42" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M59 41.873v-2.746c0-3.27 0-4.905-.609-6.375-.609-1.47-1.765-2.626-4.077-4.938l-1.628-1.628c-2.312-2.312-3.468-3.468-4.938-4.077-1.47-.609-3.105-.609-6.375-.609h-2.746c-3.27 0-4.905 0-6.375.609-1.47.609-2.626 1.765-4.938 4.077l-1.628 1.628c-2.312 2.312-3.468 3.468-4.077 4.938C21 34.222 21 35.857 21 39.127v2.746c0 3.27 0 4.905.609 6.375.609 1.47 1.765 2.626 4.077 4.938l1.628 1.628c2.312 2.312 3.468 3.468 4.938 4.077 1.47.609 3.105.609 6.375.609h2.746c3.27 0 4.905 0 6.375-.609 1.47-.609 2.626-1.765 4.938-4.077l1.628-1.628c2.312-2.312 3.468-3.468 4.077-4.938.609-1.47.609-3.105.609-6.375ZM40 48.5v-9" /><path stroke="#989F42" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.6" d="M40 32.524v-.02" /></svg>
                    </span>
                    <h4 className='text-xl font-semibold'>Dispute Raised</h4>
                    <p className="text-sm text-gray-500 text-center sm:max-w-sm">The receiver has disputed your pickup confirmation. They stated they did not receive the item. <span className="font-medium text-gray-700 block mt-4">Did you drop the item?</span></p>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 max-w-md gap-4 mt-6'>
                        <Button onClick={handleGiveReason} variant="secondary" className='py-6 px-6 cursor-pointer w-full'>No, give reason</Button>
                        <Button onClick={handleDisputeModal} variant="primary" className='py-6 px-6 w-full'>Yes, counter dispute</Button>
                    </div>
                </div>
            </ResponsiveModal>
            <ResponsiveModal open={giveReasonModal} close={setReasonModal} className="pb-10 px-4 md:px-6">
                <h4 className='font-bold text-xl pb-6 md:pb-0'>Reason for not showing up</h4>

                <RadioGroup
                    value={selectedValue}
                    onValueChange={setSelectedValue}
                    className='h-96 overflow-y-auto mb-4 scrollbar-hide'
                >
                    {GiverNoshowReasons.map((option) => (
                        <Label
                            key={option.value}
                            htmlFor={option.value}
                            className={`${option.hasTextarea ? 'w-full' : ''} flex items-start bg-gray-50 rounded-lg py-6 px-4 space-x-2`}
                        >
                            <RadioGroupItem
                                value={option.value}
                                className="mt-1 ring ring-app-primary text-app-primary"
                                id={option.value}
                            />
                            <div className={`${option.hasTextarea ? 'w-full' : ''} grid gap-2 items-start`}>
                                <h4 className='font-[500px] text-sm sm:text-[1rem] leading-6'>
                                    {option.label}
                                </h4>

                                {option.hasTextarea && (
                                    <textarea
                                        rows={7}
                                        className='placeholder:text-gray-400 p-2 mt-1 min-w-full bg-white shadow-none border-none'
                                        placeholder='Provide details about your reason for not showing up.'
                                    />
                                )}
                            </div>
                        </Label>
                    ))}
                </RadioGroup>
                <Button
                    onClick={handleSubmitAndNext}
                    disabled={!selectedValue}
                    variant="primary"
                    className='py-6 w-full'>Next</Button>
            </ResponsiveModal>
            {/* Reason received modal */}
            <ResponsiveModal open={reasonReceivedModal} close={setReasonReceivedModal} className="max-w-full md:max-w-[500px] min-h-[86%] md:min-h-auto pb-10 px-6">
                <div className='flex flex-col py-6 gap-3'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="88" height="85" fill="none"><rect width="80.497" height="80.496" y=".5" fill="#F1F3DE" rx="40.248" /><path stroke="#989F42" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M42.26 61c-1.637 0-3.2-.682-6.326-2.047-3.65-1.593-6.443-2.812-8.381-3.953H20.26m22 6c1.636 0 3.2-.682 6.326-2.047C56.369 55.556 60.26 53.857 60.26 51V30m-18 31V39m-18-9v6" /><path stroke="#989F42" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m34.912 36.383-5.843-2.827c-3.206-1.552-4.81-2.327-4.81-3.556s1.604-2.004 4.81-3.556l5.843-2.827C38.517 21.872 40.32 21 42.26 21c1.94 0 3.742.872 7.348 2.617l5.842 2.827c3.207 1.552 4.81 2.328 4.81 3.556 0 1.229-1.603 2.004-4.81 3.556l-5.842 2.827C46.002 38.128 44.199 39 42.26 39c-1.94 0-3.743-.872-7.348-2.617ZM52.533 25.031 31.994 34.97M20.26 43h6M20.26 49h6" /><path fill="#14AE7D" stroke="#fff" strokeWidth="3.019" d="M64.395 39.74c11.948 0 21.634 9.686 21.634 21.634s-9.686 21.634-21.633 21.634c-11.948 0-21.634-9.686-21.634-21.634S52.448 39.74 64.395 39.74Z" /><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.887" d="M76.795 53.315c.537 1.39-.216 2.34-1.673 3.277-1.176.756-2.674 1.575-4.262 2.976-1.556 1.372-3.075 3.025-4.425 4.653a68.764 68.764 0 0 0-3.294 4.324c-.522.743-1.25 1.852-1.25 1.852-.513.812-1.436 1.304-2.426 1.291-.99-.012-1.899-.526-2.39-1.351-1.256-2.11-2.225-2.943-2.67-3.242-1.191-.8-2.59-.919-2.59-2.785 0-1.482 1.252-2.683 2.795-2.683 1.09.04 2.103.469 3 1.072.574.386 1.182.895 1.814 1.567a72.235 72.235 0 0 1 2.639-3.388c1.455-1.755 3.173-3.637 5.015-5.262 1.811-1.597 3.905-3.093 6.125-3.883 1.447-.516 3.055.193 3.592 1.582Z" /></svg>
                    </span>
                    <h4 className='text-xl md:text-2xl font-semibold'>Feedback Received</h4>
                </div>
                <div className="bg-gray-50 rounded-lg pt-5 mb-6 md:mb-auto overflow-y-auto scrollbar-hide">
                    <RadioGroup value={doNextValue} onValueChange={setDoNextValue} className='py-1 grid gap-6 px-6 overflow-y-auto mb-4 scrollbar-hide'>
                        <h4 className='font-semibold text-sm'>What would you like to do next?</h4>
                        <div className="flex items-start gap-3">
                            <RadioGroupItem value="reschedule with the same person" className="ring ring-app-primary  text-app-primary" id="reschedule" />
                            <Label htmlFor="reschedule" className="text-gray-500 grid gap-2">
                                <h4 className='text-gray-800'>Reschedule with the same person</h4>
                                <p className='text-gray-500 text-xs'>Give them another chance</p>
                            </Label>
                        </div>

                        <div className="flex items-start gap-3">
                            <RadioGroupItem value="offer to other people" className="ring ring-app-primary  text-app-primary" id="offer-to-others" />
                            <Label htmlFor="offer-to-others" className="text-gray-500 grid gap-2">
                                <h4 className='text-gray-800'>Offer to other people</h4>
                                <p className='text-gray-500 text-xs'>Make available to new receivers</p>
                            </Label>
                        </div>
                        <div className="flex items-start gap-3">
                            <RadioGroupItem value="remove item listing" className="ring ring-app-primary  text-app-primary" id="remove-item-listing" />
                            <Label htmlFor="remove-item-listing" className="text-gray-500 grid gap-2">
                                <h4 className='text-gray-800'>Remove item listing</h4>
                                <p className='text-gray-500 text-xs'>Take down the listing</p>
                            </Label>
                        </div>
                    </RadioGroup>

                </div>
                <Button
                    onClick={handleDoNext}
                    disabled={!doNextValue}
                    variant="primary"
                    className='py-6 w-full'>Done</Button>
            </ResponsiveModal>

            {/* Feedback Received - Counter Dispute */}
            <FeedbackReceivedAlert
                subtext='Recipient will choose a new availability and get back to you.'
                open={disputeFeedbackReceived}
                onClose={() => setDisputeFeedbackReceived(false)}
                buttonText='Ok'
            />
        </>
    )
}

export default GiverDisputeFlow