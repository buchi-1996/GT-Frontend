import AuthScreenBanner from '@/components/auth/AuthScreenBanner'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const VerifyNotice = () => {
    return (
        <main className='py-5'>
            <div className="container mx-auto p-6">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 xl:gap-32">
                    <div className='lg:col-span-2'>
                        <AuthScreenBanner />
                    </div>
                    <div className='w-full lg:col-span-3 md:py-10'>
                        <div className="w-full max-w-3xl">
                            <div className="w-full mb-10 space-y-6">
                            <div className="space-y-2">
                                <h1 className="text-2xl md:text-4xl font-bold text-[#222222] mb-2">Verify your account</h1>
                                <p className="text-[#626262]">
                                    We&apos;ll send a verification code to your email.{" "}
                                    <Link href="#" className="text-[#0d9488] underline hover:underline">
                                        Switch to phone number
                                    </Link>
                                </p>
                            </div>
                        </div>
                        {/* Email info */}
                        <div className="flex border-[#F1F1F1] items-center border-2 gap-3 mb-6 px-4 py-6 bg-[#fafafa] rounded-lg">
                            <svg className="shrink-0 w-6 h-6" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.26781 19.3447C4.49269 21.015 5.87613 22.3235 7.55966 22.4009C8.97627 22.466 10.4153 22.5 12 22.5C13.5847 22.5 15.0237 22.466 16.4403 22.4009C18.1239 22.3235 19.5073 21.015 19.7322 19.3447C19.879 18.2547 20 17.1376 20 16C20 14.8624 19.879 13.7453 19.7322 12.6553C19.5073 10.985 18.1239 9.67649 16.4403 9.59909C15.0237 9.53397 13.5847 9.5 12 9.5C10.4153 9.5 8.97627 9.53397 7.55966 9.59909C5.87613 9.67649 4.49269 10.985 4.26781 12.6553C4.12104 13.7453 4 14.8624 4 16C4 17.1376 4.12104 18.2547 4.26781 19.3447Z" stroke="#626262" stroke-width="2" />
                                <path d="M7.5 9.5V7C7.5 4.51472 9.51472 2.5 12 2.5C14.4853 2.5 16.5 4.51472 16.5 7V9.5" stroke="#626262" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.9961 16H12.0051" stroke="#626262" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span className="text-[#222222]">We&apos;ll send a verification code to: mm***@gmail.com</span>
                        </div>
                        {/* Why verify info box */}
                        <div className="border-[#D4E6FF] bg-[#e7eff9] border-2 px-4 py-6 rounded-lg mb-8">
                            <div className="flex items-start gap-3">
                                <Image src="/assets/icons/security.svg" alt="Shield Icon" width={100} height={100} className="w-6 h-6" />
                                <div>
                                    <h3 className="font-semibold text-[#2563eb] mb-1">Why verify?</h3>
                                    <p className="text-[#2563eb] text-sm">
                                        Verification helps create trust in our community and protect all users.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Buttons */}
                        <div className="flex gap-4">
                            <Button variant="outline" asChild className="flex-1 shadow-none cursor-pointer hover:bg-[#f9f9f9] text-[#383838] py-6">
                                <Link href="/auth/giver/register">Go Back</Link>
                            </Button>
                            <Button className="flex-1 shadow-none cursor-pointer py-6 bg-[#0d9488] hover:bg-[#0b5f5a] text-white">Send Code</Button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default VerifyNotice