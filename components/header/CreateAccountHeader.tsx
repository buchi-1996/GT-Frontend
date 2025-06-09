import React from 'react'
import Link from 'next/link'

const CreateAccountHeader = () => {
    return (
        <header className="border-b">
            <nav className="container mx-auto flex justify-between items-center p-6">
                <Link href="/">
                    <div className="text-2xl font-bold text-[#0d9488]">GT</div>
                </Link>
                <Link href="/auth/giver/login">
                    <p className='text-gray-500 text-sm font-normal'>Do you want to switch role? <span className="text-[#0d9488] font-bold">Click here</span></p>
                </Link>
            </nav>
        </header>
    )
}

export default CreateAccountHeader