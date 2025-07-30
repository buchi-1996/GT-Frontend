"use client"

import React from 'react'
import { ProfileForm } from './form'

const ProfileView = () => {



    return (
        <>
            <div className='grid hidden lg:block mb-4'>
                <h4 className='text-md sm:text-[1.2rem] font-semibold text-[#222222]'>Profile</h4>
                <p className='text-gray-500 text-sm'>Manage your personal information and account security</p>
            </div>
            <ProfileForm />

        </>
    )
}

export default ProfileView