import AuthScreenBanner from '@/components/auth/AuthScreenBanner'
import Register from '@/components/auth/Register'
import Link from 'next/link'
import React from 'react'

const Signup = () => {
    return (
        <div className='py-5'>
            <div className="container mx-auto p-6">
                <div className="grid max-w-2xl mx-auto">
                    <div className='w-full'>
                        <div className="w-full mb-10 space-y-6">
                            <div className="space-y-2 flex flex-col items-center sm:items-start">
                                <h1 className="text-2xl md:text-4xl font-bold text-[#222222] mb-2">Create an account</h1>
                                <p className="text-sm sm:text-[1rem] text-[#626262]">
                                    Already have an account?{" "}
                                    <Link href="/auth/login" className="text-[#0d9488] hover:underline">
                                        Sign In
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <Register />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup