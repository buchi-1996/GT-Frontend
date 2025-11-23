"use client"

import React, { useState } from 'react'
import ResponsiveModal from '@/components/modal/ResponsiveModal'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { ReceiverNoshowReasons } from '@/lib/data'
import { Label } from '@/components/ui/label'
import FeedbackReceivedAlert from '@/components/pickup/FeedbackReceivedAlert'
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks'
import { showGiverCounterDisputeModal, showGiverDisputeRaisedModal, showGiverDisputeReasonModal } from '@/redux/slices/modalSlice'

const ReceiverDisputeFlow = () => {
    const [selectedValue, setSelectedValue] = useState("")
    const [disputeFeedbackReceived, setDisputeFeedbackReceived] = useState(false)

    const dispatch = useAppDispatch();
    const { dispute } = useAppSelector((state) => state.modal)

    const { giverDisputeRaisedModalOpen, giverDisputeReasonModalOpen } = dispute

    const handleSubmitAndNext = () => {
        setDisputeFeedbackReceived(true)
        dispatch(showGiverDisputeRaisedModal(false))
        dispatch(showGiverDisputeReasonModal(false))
    }

    const handleDisputeModal = () => {
        dispatch(showGiverCounterDisputeModal(true))
        dispatch(showGiverDisputeRaisedModal(false))
    }


    const handleGiveReason = () => {
        dispatch(showGiverDisputeRaisedModal(false))
        dispatch(showGiverDisputeReasonModal(true))

    }


    return (
        <>
            <ResponsiveModal open={giverDisputeRaisedModalOpen} close={() => dispatch(showGiverDisputeRaisedModal(false))} className='px-4 md:px-6 py-6 md:py-20'>
                <div className='grid gap-4 place-items-center'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none"><rect width="80" height="80" fill="#F1F3DE" rx="40" /><path stroke="#989F42" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M59 41.873v-2.746c0-3.27 0-4.905-.609-6.375-.609-1.47-1.765-2.626-4.077-4.938l-1.628-1.628c-2.312-2.312-3.468-3.468-4.938-4.077-1.47-.609-3.105-.609-6.375-.609h-2.746c-3.27 0-4.905 0-6.375.609-1.47.609-2.626 1.765-4.938 4.077l-1.628 1.628c-2.312 2.312-3.468 3.468-4.077 4.938C21 34.222 21 35.857 21 39.127v2.746c0 3.27 0 4.905.609 6.375.609 1.47 1.765 2.626 4.077 4.938l1.628 1.628c2.312 2.312 3.468 3.468 4.938 4.077 1.47.609 3.105.609 6.375.609h2.746c3.27 0 4.905 0 6.375-.609 1.47-.609 2.626-1.765 4.938-4.077l1.628-1.628c2.312-2.312 3.468-3.468 4.077-4.938.609-1.47.609-3.105.609-6.375ZM40 48.5v-9" /><path stroke="#989F42" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.6" d="M40 32.524v-.02" /></svg>
                    </span>
                    <h4 className='text-xl font-semibold'>Dispute Raised</h4>
                    <p className="text-sm text-gray-500 text-center sm:max-w-sm">The giver has disputed your pickup confirmation. They stated you did not come for the item. <span className="font-medium text-gray-700 block mt-4">Did you drop the item?</span></p>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 max-w-md gap-4 mt-6'>
                        <Button onClick={handleGiveReason} variant="secondary" className='py-6 px-6 cursor-pointer w-full'>No, give reason</Button>
                        <Button onClick={handleDisputeModal} variant="primary" className='py-6 px-6 w-full'>Yes, counter dispute</Button>
                    </div>
                </div>
            </ResponsiveModal>
            <ResponsiveModal open={giverDisputeReasonModalOpen} close={() => dispatch(showGiverDisputeReasonModal(false))} className="pb-10 px-4 md:px-6">
                <h4 className='font-bold text-xl pb-6 md:pb-0'>Reason for not showing up</h4>

                <RadioGroup
                    value={selectedValue}
                    onValueChange={setSelectedValue}
                    className='h-96 overflow-y-auto mb-4 scrollbar-hide'
                >
                    {ReceiverNoshowReasons.map((option) => (
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
                    className='py-6 w-full'>Submit Dispute</Button>
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

export default ReceiverDisputeFlow