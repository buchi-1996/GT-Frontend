import Image from 'next/image'
import React from 'react'

const AuthScreenBanner = () => {
    return (
        <div className='hidden lg:block w-full overflow-hidden rounded-lg bg-gradient-to-br from-[#CCECE9] to-[#E4E9CF]'>
            <div className='mb-10 grid gap-10 pt-20 pb-24 lg:pb-0 lg:pt-24 px-8 lg:px-10 xl:px-14'>
                <Image
                    src="/assets/icons/quote-icon.svg"
                    alt="quote icon"
                    width={100}
                    height={100}
                    className="w-20 h-auto"
                />
                <h4 className='text-2xl lg:text-3xl xl:text-4xl text-app-primary font-semibold'>Give new life to what you no longer need. Receive what you do.</h4>
            </div>
            <Image
                src="/assets/backgrounds/cropped-view-delivery-girl-giving-box-package-customer-isolated-pink-space 1.png"
                alt="cropped-view-delivery-girl"
                width={500}
                height={500}
                className="w-full lg:-mt-44 h-auto object-cover"
                priority
            />
        </div>
    )
}

export default AuthScreenBanner