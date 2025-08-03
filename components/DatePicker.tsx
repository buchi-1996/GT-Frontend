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
            className="w-full [&_button[data-selected-single=true]]:bg-[#0D9488] [&_button[data-selected-single=true]]:text-white [&_button[data-selected-single=true]]:rounded-md [&_button[data-selected-single=true]]:font-semibold [&_button[data-selected-single=true]]:hover:bg-[#0D9488]"
            mode="single"
            selected={date}
            onSelect={(selectedDate) => {
              onSelect(selectedDate)
              setOpen(false) // Close immediately when date is selected
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
            }}
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}