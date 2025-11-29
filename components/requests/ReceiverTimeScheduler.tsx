"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Clock } from "lucide-react"
import { showReceiverTimeSchedulerModal, showScheduleSuccessModal } from "@/redux/slices/modalSlice"
import { useAppDispatch } from "@/hooks/redux-hooks"





const ReceiverTimeScheduler = () => {
    const [selectedDay, setSelectedDay] = useState(3) // Wednesday
    const [selectedTimeIndex, setSelectedTimeIndex] = useState(1) // 10:00 AM
    const [weekOffset, setWeekOffset] = useState(0)
    const dispatch = useAppDispatch()

    const baseDate = new Date(2025, 7, 3) // August 3, 2025 (Sunday)
    baseDate.setDate(baseDate.getDate() + weekOffset * 7)

    const dates = Array.from({ length: 7 }, (_, i) => {
        const date = new Date(baseDate)
        date.setDate(date.getDate() + i)
        return date.getDate()
    })

    // Get the selected date
    const selectedDateObj = new Date(baseDate)
    selectedDateObj.setDate(selectedDateObj.getDate() + selectedDay)

    const timeSlots = [
        "9:00 AM - 10:00AM",
        "10:00 AM - 11:00AM",
        "1:00 PM - 2:00PM",
        "2:00 PM - 3:00PM",
        "4:00 PM - 5:00PM",
    ]
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const dateString = selectedDateObj.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",

    })


    const handleScheduleSave = () => {
        // Logic to save the scheduled time
        console.log(`Scheduled for ${dateString} at ${timeSlots[selectedTimeIndex]}`);
        dispatch(showReceiverTimeSchedulerModal(false));
        dispatch(showScheduleSuccessModal(true));
    }


    return (
        <div className="rounded-lg md:px-4">
            {/* Header */}
            <div className="border-b pb-4 flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Schedule Availability</h2>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#FB923C" strokeLinecap="round" strokeLinejoin="round" stroke-width="1.5" d="M16 2v4M8 2v4M13 4h-2C7.229 4 5.343 4 4.172 5.172 3 6.343 3 8.229 3 12v2c0 3.771 0 5.657 1.172 6.828C5.343 22 7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172C21 19.657 21 17.771 21 14v-2c0-3.771 0-5.657-1.172-6.828C18.657 4 16.771 4 13 4ZM3 10h18" /><path stroke="#FB923C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.995 14h.01m-.01 4h.01m3.986-4H16m-8 0h.009M8 18h.009" /></svg>
                </span>
            </div>

            {/* Week Navigation */}
            <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-[1rem] font-medium text-gray-700">This week</span>
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => setWeekOffset(weekOffset - 1)}
                            className="p-1 hover:bg-gray-100 rounded transition-colors"
                        >
                            <ChevronLeft size={18} className="text-gray-600" />
                        </button>
                        <button
                            onClick={() => setWeekOffset(weekOffset + 1)}
                            className="p-1 hover:bg-gray-100 rounded transition-colors"
                        >
                            <ChevronRight size={18} className="text-gray-600" />
                        </button>
                    </div>
                </div>

                {/* Day Selector */}
                <div className="flex items-center justify-between gap-2">
                    {days.map((day, index) => (
                        <div
                            key={day}
                            className={`flex gap-4 flex-col items-center`}
                        >
                            <span className="font-medium text-sm text-gray-500">{day}</span>
                            <button onClick={() => setSelectedDay(index)} className={`text-sm w-10 grid place-items-center h-10 rounded-full  ${selectedDay === index ? 'bg-app-primary text-white' : 'bg-transparent text-gray-500'}`}>{dates[index]}</button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Date Display */}
            <p className="text-sm text-gray-600 mb-4">{dateString}</p>

            {/* Time Slots */}
            <div className="space-y-2 mb-6 max-h-64 overflow-y-auto">
                {timeSlots.map((slot, index) => (
                    <div
                        key={slot}
                        onClick={() => setSelectedTimeIndex(index)}
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${selectedTimeIndex === index
                            ? "bg-teal-50 border border-teal-200"
                            : "bg-gray-50 border border-transparent hover:bg-gray-100"
                            }`}
                    >
                        <Clock size={18} className="text-gray-400 flex-shrink-0" />
                        <span className="text-sm text-gray-700 flex-1">{slot}</span>
                        {selectedTimeIndex === index && (
                            <span className="inline-block px-2 py-1 text-xs font-medium text-white bg-teal-600 rounded-full">
                                Selected
                            </span>
                        )}
                    </div>
                ))}
            </div>

            {/* Save Button */}
            <button
                onClick={handleScheduleSave}
                className="w-full py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
            >
                Save
            </button>
        </div>
    )
}

export default ReceiverTimeScheduler