import { Button } from '@/components/ui/button'
import React from 'react'

const SecuritySettingsView = () => {
    return (
        <div className='p-4 md:p-6 rounded-lg border'>
            <div className='grid hidden lg:block pb-6'>
                <h4 className='text-md sm:text-[1.2rem] font-semibold text-[#222222]'>Security Settings</h4>
                <p className='text-gray-500 text-sm'>Manage your account security and authentication</p>
            </div>
            <div className='grid grid-cols-1 gap-4 py-6 border-t-0 border-b lg:border-t'>
                <h3 className="font-semibold text-[#222222] mb-8">Verified Devices</h3>
                {/* Add security settings components or options here */}
                <div className="flex items-center  gap-4 justify-between">
                    <div className="flex items-start gap-4">
                        <span className="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#757575" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12.668h.007" /><path stroke="#757575" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 1.332H7c-1.571 0-2.357 0-2.845.488s-.488 1.274-.488 2.845v6.667c0 1.571 0 2.357.488 2.845s1.274.488 2.845.488h2c1.572 0 2.357 0 2.845-.488.489-.488.489-1.274.489-2.845V4.665c0-1.571 0-2.357-.489-2.845-.488-.488-1.273-.488-2.845-.488Z" /></svg>
                        </span>
                        <div>
                            <h4 className="font-semibold text-sm text-[#222222] mb-1">iPhone 12 pro</h4>
                            <p className="text-sm text-[#626262]">Last used: 2 hours ago</p>
                        </div>
                    </div>
                    <Button variant="ghost" disabled className=' cursor-pointer py-5 text-green-text shadow-none'>Current</Button>
                </div>
                <div className="flex items-center  gap-4 justify-between">
                    <div className="flex items-start gap-4">
                        <span className="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#757575" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12.668h.007" /><path stroke="#757575" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 1.332H7c-1.571 0-2.357 0-2.845.488s-.488 1.274-.488 2.845v6.667c0 1.571 0 2.357.488 2.845s1.274.488 2.845.488h2c1.572 0 2.357 0 2.845-.488.489-.488.489-1.274.489-2.845V4.665c0-1.571 0-2.357-.489-2.845-.488-.488-1.273-.488-2.845-.488Z" /></svg>
                        </span>
                        <div>
                            <h4 className="font-semibold text-sm text-[#222222] mb-1">MacBook Pro</h4>
                            <p className="text-sm text-[#626262]">Last used: 1 day ago</p>
                        </div>
                    </div>
                    <Button variant="ghost" className=' cursor-pointer py-5 text-red-500 hover:text-red-500 shadow-none'>Remove</Button>
                </div>
            </div>
            <div className='py-6'>
                <h3 className="font-semibold text-[#222222] mb-8">Account Activity Log</h3>
                <div className="grid gap-6">
                    <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                        <div>
                            <h4 className="font-semibold text-sm text-[#222222] mb-1">Login</h4>
                            <p className="text-sm text-[#626262]">Flevoland</p>
                        </div>
                        <p className='text-gray-500 text-sm'>2 hours ago</p>
                    </div>  
                    <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                        <div>
                            <h4 className="font-semibold text-sm text-[#222222] mb-1">Profile Updated</h4>
                            <p className="text-sm text-[#626262]">Flevoland</p>
                        </div>
                        <p className='text-gray-500 text-sm'>1 day ago</p>
                    </div>  
                    <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                        <div>
                            <h4 className="font-semibold text-sm text-[#222222] mb-1">Login Attempt</h4>
                            <p className="text-sm text-[#626262]">Drenthe</p>
                        </div>
                        <p className='text-gray-500 text-sm'>1 day ago</p>
                    </div>  
                    
                </div>
                <div className="flex justify-end">
                                        <Button
                                            variant="primary"
                                            type="submit"
                                            className="py-6 mt-8"
                                        >
                                            Save Preferences
                                        </Button>
                                    </div>
            </div>
        </div>
    )
}

export default SecuritySettingsView