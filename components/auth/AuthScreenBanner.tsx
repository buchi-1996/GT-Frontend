import Link from 'next/link'
import React from 'react'

const AuthScreenBanner = () => {
    return (
        <div className="hidden lg:block col-span-2 w-full bg-gradient-to-br from-[#CCECE9] to-[#E4E9CF] overflow-hidden">
            <div className="hidden h-full lg:flex flex-col w-full gradient-image-bg overflow-hidden">
                <nav className="container mx-auto p-6">
                    <Link href="/">
                        <div className="text-2xl font-bold text-[#0d9488]">GT</div>
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default AuthScreenBanner