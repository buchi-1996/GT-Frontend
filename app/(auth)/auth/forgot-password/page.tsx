import ForgotPassword from '@/components/auth/ForgotPassword'
import React from 'react'

const page = () => {
    return (
        <div className='py-5'>
            <div className="container mx-auto p-6">
                <div className="grid max-w-2xl mx-auto">
                    <div className='w-full'>
                        <div className="w-full mb-10 space-y-6">
                            <div className="space-y-2 flex flex-col items-center sm:items-start">
                                <h1 className="text-2xl md:text-4xl font-bold text-[#222222] mb-2">Reset Password</h1>
                                <p className="text-sm sm:text-[1rem] text-[#626262]">
                                    Enter the email address associated with your account
                                </p>
                            </div>
                        </div>
                        <ForgotPassword />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page