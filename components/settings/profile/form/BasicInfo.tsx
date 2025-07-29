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
import { useState } from "react"
import ResponsiveModal from "@/components/modal/ResponsiveModal"
import VerifyIdForm from "./VerifyIdForm"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface BasicInfoSectionProps {
  form: UseFormReturn<CompleteProfileFormData>
}

export function BasicInfoSection({ form }: BasicInfoSectionProps) {

  const [verificationModalOpen, setVerificationModalOpen] = useState(false)
  const [verifyInProgressModal, setVerifyInProgressModal] = useState(false)

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
      <Button onClick={() => setVerificationModalOpen(true)} className='block md:@lg:hidden py-4 h-12' variant="secondary">Verify account</Button>
      {/* Verify Modal */}
      <ResponsiveModal open={verificationModalOpen} close={() => setVerificationModalOpen(false)} className="p-4 min-h-[90%] md:min-h-auto">
        <div className='flex flex-col items-start gap-3 justify-center text-center p-2 md:p-6'>
          <h4 className='text-xl md:text-2xl font-semibold mb-4'>Verify ID</h4>

          <VerifyIdForm setVerifyInProgressModal={setVerifyInProgressModal} setVerificationModalOpen={setVerificationModalOpen} />

        </div>
      </ResponsiveModal>
      <ResponsiveModal open={verifyInProgressModal} close={() => setVerifyInProgressModal(false)} className="p-4">
        <div className="flex flex-col items-center justify-center text-center space-y-4 py-12">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="110" height="111" fill="none"><rect width="82.687" height="109.9" x=".778" y=".551" fill="url(#a)" rx="8.373" /><rect width="30.353" height="4.187" x="19.095" y="74.863" fill="#C9D377" rx="1.047" /><path fill="#C9D377" d="M51.542 74.863h13.607v4.187H51.542z" /><rect width="46.053" height="4.187" x="19.095" y="83.238" fill="#C9D377" rx="1.047" /><rect width="46.053" height="4.187" x="19.095" y="91.609" fill="#C9D377" rx="1.047" /><rect width="55" height="43" x="16.747" y="21.828" fill="#C9D377" rx="8" /><path stroke="#7C843D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m37.247 47.163 3.725-3.725a1.51 1.51 0 0 1 2.134 0l3.308 3.308m0 0 1.25 1.25m-1.25-1.25 1.641-1.641a1.509 1.509 0 0 1 2.134 0l2.058 2.058M47.664 40.493a.417.417 0 0 0 0-.833m0 .834a.417.417 0 0 1 0-.834m0 .834v-.834" /><path stroke="#7C843D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M37.829 50.283c-.998-1.169-.998-2.931-.998-6.456 0-3.525 0-5.287.998-6.456.142-.166.296-.32.462-.463 1.17-.998 2.931-.998 6.456-.998 3.525 0 5.287 0 6.456.998.166.142.32.297.463.463.998 1.169.998 2.931.998 6.456 0 3.525 0 5.287-.998 6.456-.142.166-.297.32-.463.462-1.169.998-2.931.998-6.456.998-3.525 0-5.287 0-6.456-.998a4.162 4.162 0 0 1-.462-.462Z" /><g clipPath="url(#b)"><rect width="38.493" height="5.309" x="18.044" y="53.406" fill="#E9EBED" rx="1.327" /></g><rect width="33.493" height="33.493" x="51.956" y="53.262" stroke="#B6CC5E" strokeWidth="1.047" rx="16.747" /><path fill="#F1F3DE" stroke="#7C843D" strokeWidth=".386" d="m86.751 93.622 5.278-5.465a1.459 1.459 0 0 1 2.062-.037l12.622 12.189a3.109 3.109 0 0 1 .076 4.396l-2.984 3.09a3.108 3.108 0 0 1-4.396.077L86.787 95.684a1.458 1.458 0 0 1-.036-2.062Z" /><mask id="c" fill="#fff"><path d="m80.363 87.453 5.353-5.543 6.308 6.092-5.353 5.543-6.308-6.092Z" /></mask><path fill="#989F42" d="m80.363 87.453 5.353-5.543 6.308 6.092-5.353 5.543-6.308-6.092Z" /><path fill="#7C843D" d="m85.716 81.91-.268.278 6.308 6.092.268-.278.268-.277-6.308-6.092-.268.277Zm.956 11.635.268-.278-6.309-6.091-.268.277-.268.278 6.308 6.092.268-.278Z" mask="url(#c)" /><mask id="d" fill="#fff"><path d="M90.592 70.224c0 11.97-9.703 21.672-21.673 21.672-11.97 0-21.673-9.703-21.673-21.672 0-11.97 9.703-21.673 21.673-21.673 11.97 0 21.673 9.703 21.673 21.673Zm-38.496 0c0 9.29 7.532 16.823 16.823 16.823s16.823-7.532 16.823-16.823c0-9.292-7.532-16.824-16.823-16.824s-16.823 7.532-16.823 16.824Z" /></mask><path fill="#F1F3DE" stroke="#7C843D" stroke-width=".772" d="M90.592 70.224c0 11.97-9.703 21.672-21.673 21.672-11.97 0-21.673-9.703-21.673-21.672 0-11.97 9.703-21.673 21.673-21.673 11.97 0 21.673 9.703 21.673 21.673Zm-38.496 0c0 9.29 7.532 16.823 16.823 16.823s16.823-7.532 16.823-16.823c0-9.292-7.532-16.824-16.823-16.824s-16.823 7.532-16.823 16.824Z" mask="url(#d)" /><defs><linearGradient id="a" x1="42.122" x2="42.122" y1=".551" y2="110.451" gradientUnits="userSpaceOnUse"><stop stopColor="#CCECE9" /><stop offset="1" stopColor="#E4E9CF" /></linearGradient><clipPath id="b"><rect width="34.54" height="34.54" x="51.433" y="52.738" fill="#fff" rx="17.27" /></clipPath></defs></svg>
          </span>
          <h3 className="text-xl my-4 font-semibold text-gray-900 max-w-md">ID verification in progress...</h3>
          <p className="text-gray-600">
            We’ll notify you once your ID has been verified
          </p>

          <div className="pt-4">
            <Button variant="primary" onClick={() => setVerifyInProgressModal(false)} className="py-6 w-full sm:w-44">
              Got it
            </Button>
          </div>
        </div>
      </ResponsiveModal>
    </div>
  )
}