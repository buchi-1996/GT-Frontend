
import Verify from "@/components/auth/Verify"


const VerifyAccount = () => {
    return (

        <div className='flex-1 flex flex-col py-6'>
            <div className="container h-full mx-auto py-0 md:py-6 px-6">
                <div className="grid justify-center min-h-[calc(100vh_-_100px)] gap-10 xl:gap-32 ">
                    <div className='w-full min-h-full  flex flex-col md:py-24'>
                        <div className="w-full flex-[0.5] flex flex-col justify-end mb-10 space-y-6">
                            <div className="space-y-2 text-center">
                                <h1 className="text-2xl md:text-4xl font-bold text-[#222222] mb-4">Verify your account</h1>
                                <p className="text-sm sm:text-[1rem] text-[#626262]">
                                    Enter the verification code sent to mm***@gmail.com
                                </p>
                            </div>
                        </div>
                        <Verify />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default VerifyAccount