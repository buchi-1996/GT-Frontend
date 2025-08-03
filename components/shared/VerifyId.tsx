"use client"

import React, { useState } from 'react'
import ResponsiveModal from '../modal/ResponsiveModal'
import ResponsiveAlert from '../modal/ResponsiveAlert'
import VerifyIDForm from '../settings/profile/form/VerifyIdForm'
import { useUIState } from '@/hooks/useAppState'
import { Button } from '../ui/button'

const VerifyIdModal = () => {

    
    const [verifyInProgressModal, setVerifyInProgressModal] = useState(false)
    const {verificationModalOpen, setVerificationModalOpen} = useUIState()


    return (
        <>
            {/* Verify Modal */}
            <ResponsiveModal open={verificationModalOpen} close={() => setVerificationModalOpen(false)} className="p-4 min-h-[90%] md:min-h-auto">
                <div className='flex flex-col items-start gap-3 justify-center text-center p-2 md:p-6'>
                    <h4 className='text-xl md:text-2xl font-semibold mb-4'>Verify ID</h4>

                    <VerifyIDForm setVerifyInProgressModal={setVerifyInProgressModal} setVerificationModalOpen={setVerificationModalOpen} />

                </div>
            </ResponsiveModal>
            <ResponsiveAlert open={verifyInProgressModal} close={() => { }} className="p-4">
                <div className="flex flex-col items-center justify-center text-center space-y-4 py-12">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="110" height="111" fill="none"><rect width="82.687" height="109.9" x=".778" y=".551" fill="url(#a)" rx="8.373" /><rect width="30.353" height="4.187" x="19.095" y="74.863" fill="#C9D377" rx="1.047" /><path fill="#C9D377" d="M51.542 74.863h13.607v4.187H51.542z" /><rect width="46.053" height="4.187" x="19.095" y="83.238" fill="#C9D377" rx="1.047" /><rect width="46.053" height="4.187" x="19.095" y="91.609" fill="#C9D377" rx="1.047" /><rect width="55" height="43" x="16.747" y="21.828" fill="#C9D377" rx="8" /><path stroke="#7C843D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m37.247 47.163 3.725-3.725a1.51 1.51 0 0 1 2.134 0l3.308 3.308m0 0 1.25 1.25m-1.25-1.25 1.641-1.641a1.509 1.509 0 0 1 2.134 0l2.058 2.058M47.664 40.493a.417.417 0 0 0 0-.833m0 .834a.417.417 0 0 1 0-.834m0 .834v-.834" /><path stroke="#7C843D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M37.829 50.283c-.998-1.169-.998-2.931-.998-6.456 0-3.525 0-5.287.998-6.456.142-.166.296-.32.462-.463 1.17-.998 2.931-.998 6.456-.998 3.525 0 5.287 0 6.456.998.166.142.32.297.463.463.998 1.169.998 2.931.998 6.456 0 3.525 0 5.287-.998 6.456-.142.166-.297.32-.463.462-1.169.998-2.931.998-6.456.998-3.525 0-5.287 0-6.456-.998a4.162 4.162 0 0 1-.462-.462Z" /><g clipPath="url(#b)"><rect width="38.493" height="5.309" x="18.044" y="53.406" fill="#E9EBED" rx="1.327" /></g><rect width="33.493" height="33.493" x="51.956" y="53.262" stroke="#B6CC5E" strokeWidth="1.047" rx="16.747" /><path fill="#F1F3DE" stroke="#7C843D" strokeWidth=".386" d="m86.751 93.622 5.278-5.465a1.459 1.459 0 0 1 2.062-.037l12.622 12.189a3.109 3.109 0 0 1 .076 4.396l-2.984 3.09a3.108 3.108 0 0 1-4.396.077L86.787 95.684a1.458 1.458 0 0 1-.036-2.062Z" /><mask id="c" fill="#fff"><path d="m80.363 87.453 5.353-5.543 6.308 6.092-5.353 5.543-6.308-6.092Z" /></mask><path fill="#989F42" d="m80.363 87.453 5.353-5.543 6.308 6.092-5.353 5.543-6.308-6.092Z" /><path fill="#7C843D" d="m85.716 81.91-.268.278 6.308 6.092.268-.278.268-.277-6.308-6.092-.268.277Zm.956 11.635.268-.278-6.309-6.091-.268.277-.268.278 6.308 6.092.268-.278Z" mask="url(#c)" /><mask id="d" fill="#fff"><path d="M90.592 70.224c0 11.97-9.703 21.672-21.673 21.672-11.97 0-21.673-9.703-21.673-21.672 0-11.97 9.703-21.673 21.673-21.673 11.97 0 21.673 9.703 21.673 21.673Zm-38.496 0c0 9.29 7.532 16.823 16.823 16.823s16.823-7.532 16.823-16.823c0-9.292-7.532-16.824-16.823-16.824s-16.823 7.532-16.823 16.824Z" /></mask><path fill="#F1F3DE" stroke="#7C843D" stroke-width=".772" d="M90.592 70.224c0 11.97-9.703 21.672-21.673 21.672-11.97 0-21.673-9.703-21.673-21.672 0-11.97 9.703-21.673 21.673-21.673 11.97 0 21.673 9.703 21.673 21.673Zm-38.496 0c0 9.29 7.532 16.823 16.823 16.823s16.823-7.532 16.823-16.823c0-9.292-7.532-16.824-16.823-16.824s-16.823 7.532-16.823 16.824Z" mask="url(#d)" /><defs><linearGradient id="a" x1="42.122" x2="42.122" y1=".551" y2="110.451" gradientUnits="userSpaceOnUse"><stop stopColor="#CCECE9" /><stop offset="1" stopColor="#E4E9CF" /></linearGradient><clipPath id="b"><rect width="34.54" height="34.54" x="51.433" y="52.738" fill="#fff" rx="17.27" /></clipPath></defs></svg>
                    </span>
                    <h3 className="text-xl my-4 font-semibold text-gray-900 max-w-md">ID verification in progress...</h3>
                    <p className="text-gray-600">
                        We&apos;ll notify you once your ID has been verified
                    </p>

                    <div className="pt-4">
                        <Button variant="primary" onClick={() => setVerifyInProgressModal(false)} className="py-6 w-full sm:w-44">
                            Got it
                        </Button>
                    </div>
                </div>
            </ResponsiveAlert>
        </>
    )
}

export default VerifyIdModal