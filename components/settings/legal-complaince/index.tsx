"use client"

import Notification from '@/components/shared/Notification'
import { Switch } from '@/components/ui/switch'
import Link from 'next/link'
import React, { useState } from 'react'

const LegalAndComplianceView = () => {

    const [analyticsDataSharing, setAnalyticsDataSharing] = useState(true)
    const [marketingCommunications, setMarketingCommunications] = useState(true)
    const [functionalCookies, setFunctionalCookies] = useState(true)
    const [performanceCookies, setPerformanceCookies] = useState(true)
    const [targetCookies, setTargetCookies] = useState(true)

    return (
        <div className='p-4 md:p-6 rounded-lg border'>
            <div className='grid hidden lg:block pb-6'>
                <h4 className='text-md sm:text-[1.2rem] font-semibold text-[#222222]'>Legal & Compliance</h4>
                <p className='text-gray-500 text-sm'>Review legal documents and manage your data sharing preferences</p>
            </div>
            <div className='@container py-6 border-t-0 lg:border-t  border-b '>
                <h3 className="font-semibold text-[#222222] mb-8">Legal Documents</h3>
                <div className='grid grid-cols-1 md:@md:grid-cols-2 xl:@xl:grid-cols-3 gap-4 items-stretch'>
                    <Link href="#">
                        <div className='bg-gray-50 rounded-lg p-6 grid gap-4'>
                            <div className='flex items-center justify-between gap-4'>
                                <div className='flex items-center gap-4'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none"><path stroke="#6B21A8" strokeLinecap="round" d="M14.5 7.454V5.52c0-1.093 0-1.64-.27-1.997-.269-.356-.878-.53-2.096-.876a16.383 16.383 0 0 1-2.152-.782c-.8-.355-1.2-.532-1.482-.532-.283 0-.682.177-1.482.532-.586.26-1.32.545-2.152.782-1.218.346-1.827.52-2.097.876C2.5 3.88 2.5 4.426 2.5 5.52v1.935c0 3.75 3.375 6 5.063 6.891.404.214.607.32.937.32.33 0 .533-.106.937-.32 1.688-.89 5.063-3.14 5.063-6.89ZM8.5 4.668v1.333" /></svg>
                                    </span>
                                    <h4 className='text-sm font-semibold'>Privacy Policy</h4>
                                </div>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none"><path stroke="#757575" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M16.333 10.835v.833c0 2.75 0 4.125-.854 4.98-.854.853-2.23.853-4.979.853H8.833c-2.75 0-4.124 0-4.979-.854C3 15.793 3 14.417 3 11.668v-1.667c0-2.75 0-4.124.854-4.979.855-.854 2.23-.854 4.98-.854h.833M12.166 2.5h3.333c1.179 0 1.768 0 2.134.366C18 3.232 18 3.821 18 5v3.333m-.833-5-7.5 7.5" /></svg>
                                </span>
                            </div>
                            <p className='text-[0.95rem] text-gray-500'>How we collect and protect your personal information.</p>
                            <span className='text-xs text-gray-400'>Last updated: 15/01/2024</span>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className='bg-gray-50 rounded-lg p-6 grid gap-4'>
                            <div className='flex items-center justify-between gap-4'>
                                <div className='flex items-center gap-4'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none"><path stroke="#3B82F6" strokeLinecap="round" strokeLinejoin="round" d="M6.168 11.332h5.333M6.168 8.668h2.667M9.5 1.665V2c0 1.885 0 2.828.586 3.414.586.586 1.528.586 3.414.586h.333m.334 1.104v2.229c0 2.514 0 3.771-.781 4.552-.781.781-2.038.781-4.553.781-2.514 0-3.77 0-4.552-.78-.781-.782-.781-2.039-.781-4.553v-3.03c0-2.163 0-3.244.59-3.977.12-.148.255-.283.403-.402.733-.591 1.814-.591 3.978-.591.47 0 .705 0 .92.076.045.016.09.034.132.055.206.098.372.264.705.597l3.158 3.158c.385.385.578.578.68.823.1.245.1.517.1 1.062Z" /></svg>
                                    </span>
                                    <h4 className='text-sm font-semibold'>Terms of Use</h4>
                                </div>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none"><path stroke="#757575" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M16.333 10.835v.833c0 2.75 0 4.125-.854 4.98-.854.853-2.23.853-4.979.853H8.833c-2.75 0-4.124 0-4.979-.854C3 15.793 3 14.417 3 11.668v-1.667c0-2.75 0-4.124.854-4.979.855-.854 2.23-.854 4.98-.854h.833M12.166 2.5h3.333c1.179 0 1.768 0 2.134.366C18 3.232 18 3.821 18 5v3.333m-.833-5-7.5 7.5" /></svg>
                                </span>
                            </div>
                            <p className='text-[0.95rem] text-gray-500'>The rules and guidelines for using GT.</p>
                            <span className='text-xs text-gray-400'>Last updated: 15/01/2024</span>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className='bg-gray-50 rounded-lg p-6 grid gap-4'>
                            <div className='flex items-center justify-between gap-4'>
                                <div className='flex items-center gap-4'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none"><path stroke="#F97311" d="M8.205 14.665a6.698 6.698 0 0 0 6.59-5.427c.171-.908-.233-.86-1.088-1.01-.607-.106-1.174-.518-1.385-1.17-.143-.445-.197-.463-.665-.482-.966-.04-1.74-1.065-1.355-1.893.144-.31.14-.345-.13-.555-.472-.366-.692-1.052-.607-1.712.091-.711.145-.968-.608-1.048C5.137.962 1.5 4.012 1.5 7.995c0 3.684 3.002 6.67 6.705 6.67Z" /><path stroke="#F97311" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="M7.504 8h-.006M4.17 6.668h-.006M8.17 12h-.006" /><path stroke="#F97311" strokeLinecap="round" strokeLinejoin="round" d="m6.833 4-.667.667M11.499 9.332l-.667.667M4.832 10l.667.667" /></svg>
                                    </span>
                                    <h4 className='text-sm font-semibold'>Cookie Policy</h4>
                                </div>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none"><path stroke="#757575" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M16.333 10.835v.833c0 2.75 0 4.125-.854 4.98-.854.853-2.23.853-4.979.853H8.833c-2.75 0-4.124 0-4.979-.854C3 15.793 3 14.417 3 11.668v-1.667c0-2.75 0-4.124.854-4.979.855-.854 2.23-.854 4.98-.854h.833M12.166 2.5h3.333c1.179 0 1.768 0 2.134.366C18 3.232 18 3.821 18 5v3.333m-.833-5-7.5 7.5" /></svg>
                                </span>
                            </div>
                            <p className='text-[0.95rem] text-gray-500'>Information about cookies and tracking technologies we use.</p>
                            <span className='text-xs text-gray-400'>Last updated: 15/01/2024</span>
                        </div>
                    </Link>


                </div>

            </div>

            <div className='py-6 border-b'>
                <h3 className="font-semibold text-[#222222] mb-8">Data Sharing Preferences</h3>
                <div className="grid gap-6">

                    <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                        <div>
                            <h4 className="font-semibold text-sm text-[#222222] mb-1">Analytics Data Sharing</h4>
                            <p className="text-sm text-[#626262]">Allow anonymous usage data to help improve GiveForward</p>
                        </div>
                        <Switch
                            checked={analyticsDataSharing}
                            onCheckedChange={setAnalyticsDataSharing}
                            className="data-[state=checked]:bg-[#14ae7d]"
                        />
                    </div>
                    <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                        <div>
                            <h4 className="font-semibold text-sm text-[#222222] mb-1">Marketing Communications</h4>
                            <p className="text-sm text-[#626262]">Receive promotional emails and updates about new features</p>
                        </div>
                        <Switch
                            checked={marketingCommunications}
                            onCheckedChange={setMarketingCommunications}
                            className="data-[state=checked]:bg-[#14ae7d]"
                        />
                    </div>


                </div>


            </div>
            <div className='py-6 border-b'>
                <h3 className="font-semibold text-[#222222] mb-8">Cookie Preferences</h3>
                <div className="grid gap-6">

                    <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                        <div>
                            <h4 className="font-semibold text-sm text-[#222222] mb-1">Functional Cookies</h4>
                            <p className="text-sm text-[#626262]">Enable basic website functionality and user preferences</p>
                        </div>
                        <Switch
                            checked={functionalCookies}
                            onCheckedChange={setFunctionalCookies}
                            className="data-[state=checked]:bg-[#14ae7d]"
                        />
                    </div>
                    <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                        <div>
                            <h4 className="font-semibold text-sm text-[#222222] mb-1">Performance Cookies</h4>
                            <p className="text-sm text-[#626262]">Help us understand how you use our website to improve performance</p>
                        </div>
                        <Switch
                            checked={performanceCookies}
                            onCheckedChange={setPerformanceCookies}
                            className="data-[state=checked]:bg-[#14ae7d]"
                        />
                    </div>
                    <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                        <div>
                            <h4 className="font-semibold text-sm text-[#222222] mb-1">Targeting Cookies</h4>
                            <p className="text-sm text-[#626262]">Used to deliver personalized content and advertisements</p>
                        </div>
                        <Switch
                            checked={targetCookies}
                            onCheckedChange={setTargetCookies}
                            className="data-[state=checked]:bg-[#14ae7d]"
                        />
                    </div>


                </div>


            </div>
            <Notification
                type="danger"
                notice="Functional cookies are required for the website to work properly and cannot be  disabled. You can adjust other cookie preferences at any time."
            />

        </div>
    )
}

export default LegalAndComplianceView