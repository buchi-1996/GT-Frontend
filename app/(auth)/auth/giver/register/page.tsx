import AuthScreenBanner from '@/components/auth/AuthScreenBanner'
import Register from '@/components/auth/Register'
import Link from 'next/link'
import React from 'react'

const Signup = () => {
    return (
        <main className='py-5'>
            <div className="container mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10 xl:gap-32">
                    <div className='lg:col-span-2'>
                        <AuthScreenBanner />
                    </div>
                    <div className='w-full lg:col-span-3 md:py-10'>
                        <div className="w-full mb-10 space-y-6">
                            <div className="space-y-2">
                                <h1 className="text-2xl md:text-4xl font-bold text-[#222222] mb-2">Create your Giver&apos;s account</h1>
                                <p className="text-[#626262]">
                                    Already have an account?{" "}
                                    <Link href="#" className="text-[#0d9488] hover:underline">
                                        Log In
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <Register />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Signup