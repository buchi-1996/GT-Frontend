// components/address-section.tsx
"use client"

import { UseFormReturn, useFieldArray } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface AddressSectionProps {
  form: UseFormReturn<any>
}

export function AddressSection({ form }: AddressSectionProps) {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "profile.addresses"
  })

  const addAddress = () => {
    append({
      address: "",
      city: "",
      province: "",
      postalCode: "",
      isDefault: false
    })
  }

  const provinces = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Northwest Territories",
    "Nova Scotia",
    "Nunavut",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Yukon",
  ]

  return (
    <div className="grid gap-8 border py-6 px-4 md:px-6 rounded-lg">
      <h3 className="font-semibold text-[#222222]">Pick up address</h3>

      {/* Display existing addresses (read-only) */}
      <RadioGroup className=' grid gap-6 overflow-y-auto scrollbar-hide'>

        <label htmlFor="address-1" className="bg-[#f9fafb] p-4 md:p-6 rounded-lg flex items-center justify-between gap-3 text-gray-500">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="address-1" className="ring ring-app-primary  text-app-primary" id="address-1" />
            <h4 className='text-sm md:text-md text-gray-800'>38 Gebied Rotterdam Street, South Holland, 3011AD</h4>
          </div>
          <div className="flex items-center gap-2">
            <button className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path stroke="#0D9488" strokeLinejoin="round" strokeWidth="1.5" d="m16.925 4.605.99-.99a2.1 2.1 0 0 1 2.97 2.97l-.99.99m-2.97-2.97-6.66 6.66a3.96 3.96 0 0 0-1.041 1.84L8.5 16l2.896-.724a3.96 3.96 0 0 0 1.84-1.042l6.659-6.659m-2.97-2.97 2.97 2.97" /><path stroke="#0D9488" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 13.5c0 3.288 0 4.931-.908 6.038a3.996 3.996 0 0 1-.554.554C16.93 21 15.288 21 12 21h-.5c-3.771 0-5.657 0-6.828-1.172C3.5 18.657 3.5 16.771 3.5 13v-.5c0-3.287 0-4.931.908-6.038.166-.202.352-.388.554-.554C6.07 5 7.712 5 11 5" /></svg>
            </button>
            <button className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path stroke="#C00F0C" strokeLinecap="round" strokeWidth="1.5" d="m20 5.5-.62 10.025c-.158 2.561-.237 3.842-.88 4.763a4 4 0 0 1-1.2 1.128C16.343 22 15.06 22 12.494 22c-2.57 0-3.855 0-4.814-.585a3.999 3.999 0 0 1-1.2-1.13c-.642-.922-.72-2.205-.874-4.77L5 5.5M3.5 5.5h18m-4.944 0-.683-1.408c-.453-.936-.68-1.403-1.071-1.695a1.994 1.994 0 0 0-.275-.172C14.094 2 13.574 2 12.535 2c-1.066 0-1.599 0-2.04.234a2 2 0 0 0-.278.18c-.395.303-.616.788-1.058 1.757L8.553 5.5M10 16.5v-6M15 16.5v-6" /></svg>
            </button>
          </div>
        </label>
      </RadioGroup>

      {fields.map((field, index) => (
        <div key={field.id} className="space-y-4 p-4 border border-[#ededed] rounded-lg">
          <div className="grid grid-cols-2 xl:grid-cols-3 items-baseline gap-6">
            <FormField
              control={form.control}
              name={`profile.addresses.${index}.province`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-app-black">Province</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value || ""}>
                    <FormControl>
                      <SelectTrigger className="py-6 w-full shadow-none">
                        <SelectValue placeholder="Select a province" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="shadow-xl w-full border-none px-1 py-2">
                      {provinces.map((province) => (
                        <SelectItem key={province} value={province} className="py-3 px-4">
                          {province}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`profile.addresses.${index}.city`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-app-black">City</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value || ""}>
                    <FormControl>
                      <SelectTrigger className="py-6 w-full shadow-none">
                        <SelectValue placeholder="Select City" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="shadow-xl w-full border-none px-1 py-2">
                      {provinces.map((province) => (
                        <SelectItem key={province} value={province} className="py-3 px-4">
                          {province}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={`profile.addresses.${index}.postalCode`}
              render={({ field }) => (
                <FormItem className="col-span-2 xl:col-auto">
                  <FormLabel className="text-app-black">Zip Code</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="000-000"
                      {...field}
                      value={field.value || ""}
                      className="py-6 rounded-lg shadow-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`profile.addresses.${index}.address`}

              render={({ field }) => (
                <FormItem className="col-span-2 xl:col-span-3">
                  <FormLabel className="text-app-black">Address (only selected receipients can view)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g 3B Oakland, Apartment 4"
                      {...field}
                      value={field.value || ""}
                      className="py-6 rounded-lg shadow-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end mt-8 gap-2">
            <Button variant="destructive" size="sm" type="button" onClick={() => remove(index)}>
              Remove
            </Button>
            <Button variant="secondary" size="sm" type="button">
              Save Address
            </Button>

          </div>
        </div>
      ))}


      <Button
        variant="ghost"
        className="text-gray-500 bg-transparent w-fit cursor-pointer"
        type="button"
        onClick={addAddress}
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Address
      </Button>
    </div>
  )
}