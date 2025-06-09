
import AuthScreenBanner from "@/components/auth/AuthScreenBanner"
import Verify from "@/components/auth/Verify"


const VerifyAccount = () => {
    return (

        <main className='flex-1 flex flex-col py-6'>
            <div className="container h-full mx-auto py-0 md:py-6 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[calc(100vh_-_100px)] gap-10 xl:gap-32 ">
                    <div className='hidden lg:block lg:col-span-2'>
                        <AuthScreenBanner />
                    </div>
                    <div className='w-full min-h-full max-w-3xl flex flex-col  lg:col-span-3 md:py-24'>
                        <div className="w-full flex-[0.5] flex flex-col justify-end mb-10 space-y-6">
                            <div className="space-y-2 text-center">
                                <h1 className="text-2xl md:text-4xl font-bold text-[#222222] mb-4">Verify your account</h1>
                                <p className="text-[#626262]">
                                    Enter the verification code sent to mm***@gmail.com
                                </p>
                            </div>
                        </div>
                        <Verify />
                    </div>
                </div>
            </div>
        </main>

    )
}

export default VerifyAccount