"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"

interface DatePickerProps {
  date?: Date
  onSelect: (date: Date | undefined) => void
  placeholder?: string
  disablePastDates?: boolean
}

export function DatePicker({ date, onSelect, placeholder = "Pick a date", disablePastDates = false }: DatePickerProps) {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full shadow-none justify-between text-left font-normal py-6 px-4">
          <span className="text-gray-500">{date ? format(date, "MM/dd/yy") : placeholder}</span>
          <Calendar className="h-4 w-4 text-gray-400" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="shadow-xl w-82 p-0" align="end">
        <div className="p-4">
          <CalendarComponent
            className="w-full data-[selected-single=true]:text-white data-[selected-single=true]:bg-[#0D9488] data-[selected-single=true]:rounded-full data-[selected-single=true]:font-semibold"
            mode="single"
            selected={date}
            onSelect={(selectedDate) => {
              onSelect(selectedDate)
              // Don't close immediately - let user click OK
            }}
            disabled={(date) => (disablePastDates ? date < new Date() : false)}
            
            modifiersStyles={{
              today: {
                backgroundColor: "rgba(13, 148, 136, 0.1)",
                color: "#0D9488",
                border: "1px solid #0D9488",
                borderRadius: "50%",
                fontWeight: "500",
              },
              selected: {
                backgroundColor: "#0D9488 !important",
                color: "white !important",
                borderRadius: "50% !important",
                fontWeight: "500 !important",
              },
            }}
          />
          <div className="flex justify-end space-x-2 mt-4 pt-4 border-t">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setOpen(false)}
              className="text-red-500 hover:text-red-600 hover:bg-red-50 cursor-pointer">
              Cancel
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setOpen(false)} className="cursor-pointer">
              OK
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
