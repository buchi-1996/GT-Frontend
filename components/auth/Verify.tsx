"use client"

import React, {useState } from 'react'
import { Button } from '../ui/button'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const Verify = () => {
  const [value, setValue] = useState("")

  const router = useRouter()

  const handleVerifyCode = () => {
    toast.success("Verification successful", {
      id: "Verification-sucess"
    })

    router.push('/dashboard/overview')
  }

  return (
    <div className='w-full flex flex-1 lg:flex-0 flex-col'>
      <div className="flex justify-center mb-8">
        <InputOTP maxLength={6} value={value} onChange={(value) => setValue(value)}>
          <InputOTPGroup className="gap-2 sm:gap-4">
            <InputOTPSlot
              index={0}
              className="w-12 sm:w-18 h-12 sm:h-18 shadow-none text-sm sm:text-xl font-semibold border focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488] focus:ring-offset-2 rounded-lg"
            />
            <InputOTPSlot
              index={1}
              className="w-12 sm:w-18 h-12 sm:h-18 shadow-none text-sm sm:text-xl font-semibold border focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488] focus:ring-offset-2 rounded-lg"
            />
            <InputOTPSlot
              index={2}
              className="w-12 sm:w-18 h-12 sm:h-18 shadow-none text-sm sm:text-xl font-semibold border focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488] focus:ring-offset-2 rounded-lg"
            />
            <InputOTPSlot
              index={3}
              className="w-12 sm:w-18 h-12 sm:h-18  shadow-none text-sm sm:text-xl font-semibold border focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488] focus:ring-offset-2 rounded-lg"
            />
            <InputOTPSlot
              index={4}
              className="w-12 sm:w-18 h-12 sm:h-18 shadow-none text-sm sm:text-xl font-semibold border focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488] focus:ring-offset-2 rounded-lg"
            />
            <InputOTPSlot
              index={5}
              className="w-12 sm:w-18 h-12 sm:h-18 shadow-none text-sm sm:text-xl font-semibold border focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488] focus:ring-offset-2 rounded-lg"
            />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div className='w-full max-w-md mx-auto mt-auto md:mt-0 pb-4'>
        <Button onClick={handleVerifyCode}
          className="w-full bg-[#0d9488] cursor-pointer hover:bg-[#0b5f5a] text-white font-semibold shadow-none py-6 rounded-lg mb-4 disabled:opacity-50"
          size="lg"
          disabled={value.length !== 6}
        >
          Verify Code
        </Button>

        <div className="text-center">
          <button className="text-[#0d9488] cursor-pointer hover:text-[#0b5f5a] font-medium">Resend Code</button>
        </div>
      </div>
    </div>
  )
}

export default Verify