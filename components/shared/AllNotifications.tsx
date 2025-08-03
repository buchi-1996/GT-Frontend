import React from 'react'

const AllNotifications = () => {
    return (
        <div>
            <div className="mb-8 md:mb-10 flex items-center  justify-between text-md sm:text-[1rem] text-[#222222]">
                <span className='text-md md:text-xl font-medium'>Notification</span>
                <button className="cursor-pointer text-sm font-medium text-app-primary">Clear All</button>
            </div>
            <div className="grid gap-6 divide-y">
                <div className="flex gap-4 items-start pb-4">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#FB923C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m13.728 3.444 1.76 3.549c.24.494.88.968 1.42 1.058l3.189.535c2.04.343 2.52 1.835 1.05 3.306l-2.48 2.5c-.42.424-.65 1.24-.52 1.826l.71 3.095c.56 2.45-.73 3.397-2.88 2.117l-2.99-1.785c-.54-.322-1.43-.322-1.98 0L8.019 21.43c-2.14 1.28-3.44.322-2.88-2.117l.71-3.095c.13-.585-.1-1.402-.52-1.825l-2.48-2.5C1.39 10.42 1.86 8.928 3.899 8.585l3.19-.535c.53-.09 1.17-.564 1.41-1.058l1.76-3.549c.96-1.925 2.52-1.925 3.47 0Z"/></svg>
                    </span>
                    <div className="grid gap-1">
                        <h4 className="text-sm text-gray-700 font-medium">You recieved a 5-star review from Alex</h4>
                        <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start pb-4">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#E8B931" strokeLinecap="round" strokeWidth="1.5" d="M3 5.113c0-.553 0-.83.043-1.06a2.51 2.51 0 0 1 1.996-2.01C5.267 2 5.542 2 6.09 2h11.82c.548 0 .823 0 1.051.043a2.51 2.51 0 0 1 1.996 2.01c.043.23.043.507.043 1.06 0 .542 0 .813-.032 1.065a4.035 4.035 0 0 1-1.603 2.744c-.202.15-.438.282-.908.545l-2.572 1.439C13.986 11.969 13.037 12.5 12 12.5s-1.986-.531-3.885-1.594l-2.572-1.44c-.47-.262-.705-.394-.908-.544a4.035 4.035 0 0 1-1.603-2.744C3 5.926 3 5.655 3 5.113ZM8 5v1m4-1v3m4-3v1"/><path stroke="#E8B931" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12.777 13.65.792 1.597a.978.978 0 0 0 .64.476l1.435.24c.917.155 1.133.826.472 1.489L15 18.577a.99.99 0 0 0-.234.82l.32 1.394c.252 1.102-.329 1.529-1.296.952l-1.345-.803c-.244-.145-.644-.145-.891 0l-1.346.803c-.963.577-1.548.146-1.296-.952l.32-1.393a.99.99 0 0 0-.234-.821l-1.116-1.125c-.657-.663-.445-1.334.472-1.488l1.436-.24a.98.98 0 0 0 .634-.477l.792-1.597c.432-.867 1.134-.867 1.561 0Z"/></svg>
                    </span>
                    <div className="grid gap-1">
                        <h4 className="text-sm text-gray-700 font-medium">You earned the “Giving Champion” badge</h4>
                        <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start pb-4">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#009975" strokeLinecap="round" strokeWidth="1.5" d="M8 5h12" /><path stroke="#009975" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5h.009M4 12h.009M4 19h.009" /><path stroke="#009975" strokeLinecap="round" strokeWidth="1.5" d="M8 12h12M8 19h12" /></svg>
                    </span>
                    <div className="grid gap-1">
                        <h4 className="text-sm text-gray-700 font-medium">Sarah is interested in your “Kitchen Blender”</h4>
                        <p className="text-sm text-gray-500">5 Days ago</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllNotifications