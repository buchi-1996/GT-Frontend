// components/basic-info-section.tsx
"use client"

import { UseFormReturn } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from 'lucide-react'
import { PhoneInput } from "@/components/PhoneInput"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { CompleteProfileFormData } from "@/lib/schema"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useUIState } from "@/hooks/useAppState"

interface BasicInfoSectionProps {
  form: UseFormReturn<CompleteProfileFormData>
}

export function BasicInfoSection({ form }: BasicInfoSectionProps) {
    const { setVerificationModalOpen } = useUIState()

  

  return (
    <div className="@container grid gap-8 border py-6 px-4 md:px-6 rounded-lg">
      <div className='@container flex items-center border-b pb-4 justify-between'>
        <div className='flex gap-4 md:gap-6 items-center w-fit'>
          <div className='relative min-w-fit'>
            <Avatar className="w-18 md:w-24 h-18 md:h-24">
              <AvatarImage src="/assets/5d1e58c8086fe7ad86b64a6151f47a2a2aa8357a.png" />
              <AvatarFallback className="bg-[#0d9488] text-white">SJ</AvatarFallback>
            </Avatar>
            <span className='absolute right-0 bottom-0 flex items-center justify-center bg-gray-50 p-1 rounded-full w-[28px] h-[28px]'>
              <svg className="size-8" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.4912 19.0039H19.5007M19.4912 19.0039C18.8685 19.6214 17.74 19.4676 16.9486 19.4676C15.9772 19.4676 15.5094 19.6576 14.8161 20.3509C14.2258 20.9413 13.4344 22.0039 12.5007 22.0039C11.567 22.0039 10.7756 20.9413 10.1853 20.3509C9.49201 19.6576 9.02422 19.4676 8.05279 19.4676C7.26141 19.4676 6.13291 19.6214 5.51022 19.0039C4.88254 18.3815 5.03701 17.2483 5.03701 16.4518C5.03701 15.4453 4.81689 14.9825 4.10011 14.2657C3.03387 13.1995 2.50075 12.6663 2.50073 12.0039C2.50074 11.3414 3.03385 10.8083 4.10008 9.74207C4.73993 9.10223 5.03701 8.46819 5.03701 7.55597C5.03701 6.76456 4.88322 5.63605 5.50073 5.01335C6.12316 4.38569 7.25633 4.54017 8.05281 4.54017C8.965 4.54017 9.59905 4.24311 10.2389 3.60328C11.3051 2.53703 11.8382 2.00391 12.5007 2.00391C13.1632 2.00391 13.6963 2.53703 14.7625 3.60328C15.4022 4.24298 16.0362 4.54017 16.9486 4.54017C17.74 4.54017 18.8686 4.38638 19.4913 5.00391C20.1189 5.62634 19.9644 6.7595 19.9644 7.55597C19.9644 8.56249 20.1846 9.02528 20.9013 9.74207C21.9676 10.8083 22.5007 11.3414 22.5007 12.0039C22.5007 12.6663 21.9676 13.1995 20.9013 14.2657C20.1845 14.9825 19.9644 15.4453 19.9644 16.4518C19.9644 17.2483 20.1189 18.3815 19.4912 19.0039Z" stroke="#14AE7D" strokeWidth="1.5" />
                <path d="M9.49976 12.8968L11.2998 14.5039L15.4998 9.50391" stroke="#14AE7D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
          <div className="flex flex-col items-start gap-3">
            <p className="text-sm font-semibold">Upload a new profile picture</p>
            <Input id="picture" type="file" className='w-[20px] sr-only' />
            <div className='flex gap-4 items-center'>
              <Button variant="secondary" size="sm" id="picture" asChild>
                <Label htmlFor="picture" >Browse...</Label>
              </Button>
              <p className='text-xs md:text-sm text-gray-500'>No file choosen</p>
            </div>
          </div>
        </div>
        <Button onClick={() => setVerificationModalOpen(true)} className='hidden md:@lg:block' variant="secondary">Verify account</Button>
      </div>
      <h3 className="font-semibold text-[#222222]">Basic Information</h3>

      <div className="grid grid-cols-2 xl:grid-cols-3 items-baseline gap-x-3 md:@sm:gap-x-6 gap-y-8">
        <FormField
          control={form.control}
          name="profile.firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-500">First Name</FormLabel>
              <FormControl>
                <Input {...field} className="py-6 rounded-lg shadow-none" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="profile.lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-500">Last Name</FormLabel>
              <FormControl>
                <Input {...field} className="py-6 rounded-lg shadow-none" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="profile.username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-500">Username (optional)</FormLabel>
              <FormControl>
                <Input {...field} className="py-6 rounded-lg shadow-none" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="profile.dateOfBirth"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-500">Date of Birth</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input {...field} placeholder="DD/MM/YY" className="py-6 rounded-lg shadow-none" />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#626262]" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="profile.gender"
          render={({ field }) => (
            <FormItem className="col-span-2 lg:col-auto">
              <FormLabel className="text-gray-500">Gender (optional)</FormLabel>
              <Select onValueChange={field.onChange} value={field.value || ""}>
                <FormControl>
                  <SelectTrigger className="py-6 w-full shadow-none">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="shadow-xl w-full border-none px-1 py-2">
                  <SelectItem value="male" className="py-3 px-4">Male</SelectItem>
                  <SelectItem value="female" className="py-3 px-4">Female</SelectItem>
                  <SelectItem value="other" className="py-3 px-4">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="profile.accountRole"
          render={({ field }) => (
            <FormItem className="col-span-2 lg:col-auto">
              <FormLabel className="text-gray-500">Account Role</FormLabel>
              <Select onValueChange={field.onChange} value={field.value || ""}>
                <FormControl>
                  <SelectTrigger className="py-6 w-full shadow-none">
                    <SelectValue placeholder="Receiver only" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="shadow-xl w-full border-none px-1 py-2">
                  <SelectItem value="receiver" className="py-3 px-4">Receiver only</SelectItem>
                  <SelectItem value="giver" className="py-3 px-4">Giver only</SelectItem>
                  <SelectItem value="both" className="py-3 px-4">Both</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="profile.email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-500">Email Address</FormLabel>
              <FormControl>
                <Input {...field} type="email" className="py-6 rounded-lg shadow-none" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="profile.phone"
          render={({ field }) => (
            <FormItem className="col-span-2 xl:col-auto order-4 xl:order-0">
              <FormLabel className="text-gray-500">Phone Number</FormLabel>
              <FormControl>
                <PhoneInput placeholder="+31" defaultCountry="NL" countries={["GB", "DE", "BE", "NL"]} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="profile.language"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-500">Preferred Language</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="py-6 w-full shadow-none">
                    <SelectValue placeholder="English" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="shadow-xl w-full border-none px-1 py-2">
                  <SelectItem value="en" className="py-3 px-4">English</SelectItem>
                  <SelectItem value="nl" className="py-3 px-4">Dutch</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="profile.aboutMe"
          render={({ field }) => (
            <FormItem className="order-8 xl:order-0 col-span-2 xl:col-span-3">
              <FormLabel className="text-gray-500">About me</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Provide details about you" className="min-h-[100px] shadow-none" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <Button onClick={() => setVerificationModalOpen(true)} className='block md:@lg:hidden py-4 h-12' variant="secondary">Verify ID</Button>
      
    </div>
  )
}