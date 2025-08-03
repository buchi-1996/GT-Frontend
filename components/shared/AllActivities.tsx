import React from 'react'

const AllActivities = () => {
    return (
        <div>
            <div className="mb-8 md:mb-10 flex items-center  justify-between text-md sm:text-[1rem] text-[#222222]">
                <span className='text-md md:text-xl font-medium'>Recent Activities</span>
                <button className="cursor-pointer text-sm font-medium text-app-primary">Clear All</button>
            </div>
            <div className="grid gap-6 divide-y">
                <div className="flex gap-4 items-start pb-4">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#009975" strokeLinecap="round" strokeWidth="1.5" d="M8 5h12" /><path stroke="#009975" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5h.009M4 12h.009M4 19h.009" /><path stroke="#009975" strokeLinecap="round" strokeWidth="1.5" d="M8 12h12M8 19h12" /></svg>
                    </span>
                    <div className="grid gap-1">
                        <h4 className="text-sm text-gray-700 font-medium">You listed “Vintage Desk Lamp”</h4>
                        <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start pb-4">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#8E6ADD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22c-.818 0-1.6-.33-3.163-.99C4.946 19.366 3 18.543 3 17.16V7m9 15c.818 0 1.6-.33 3.163-.99C19.054 19.366 21 18.543 21 17.16V7m-9 15V11.355M8.326 9.691 5.405 8.278C3.802 7.502 3 7.114 3 6.5c0-.614.802-1.002 2.405-1.778l2.92-1.413C10.13 2.436 11.03 2 12 2c.97 0 1.871.436 3.674 1.309l2.921 1.413C20.198 5.498 21 5.886 21 6.5c0 .614-.802 1.002-2.405 1.778l-2.92 1.413C13.87 10.564 12.97 11 12 11c-.97 0-1.871-.436-3.674-1.309ZM6 12l2 1M17 4 7 9" /></svg>
                    </span>
                    <div className="grid gap-1">
                        <h4 className="text-sm text-gray-700 font-medium">You marked “Baby Crib” as picked up</h4>
                        <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start pb-4">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#F97311" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.5 20v-2.03c0-1.242-.56-2.46-1.69-2.975C13.431 14.366 11.778 14 10 14c-1.778 0-3.431.366-4.81.995-1.13.515-1.69 1.733-1.69 2.975V20M20.5 20.001v-2.03c0-1.242-.56-2.46-1.69-2.975-.26-.12-.53-.229-.81-.328M10 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM15 4.145a3.502 3.502 0 0 1 0 6.71" /></svg>
                    </span>
                    <div className="grid gap-1">
                        <h4 className="text-sm text-gray-700 font-medium">You selected Sarah to receive “Kitchen Blender”</h4>
                        <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start pb-4">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#009975" strokeLinecap="round" strokeWidth="1.5" d="M8 5h12" /><path stroke="#009975" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5h.009M4 12h.009M4 19h.009" /><path stroke="#009975" strokeLinecap="round" strokeWidth="1.5" d="M8 12h12M8 19h12" /></svg>
                    </span>
                    <div className="grid gap-1">
                        <h4 className="text-sm text-gray-700 font-medium">You listed “Vintage Desk Lamp”</h4>
                        <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllActivities