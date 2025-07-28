// components/password-section.tsx
"use client"

import { useState } from "react"
import { UseFormReturn } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from 'lucide-react'
import { CompleteProfileFormData } from "@/lib/schema"

interface PasswordSectionProps {
  form: UseFormReturn<CompleteProfileFormData>
}

export function PasswordSection({ form }: PasswordSectionProps) {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="grid gap-8 border py-6 px-4 md:px-6 rounded-lg">
        <h3 className="font-semibold text-[#222222]">Change Password</h3>

        <FormField
          control={form.control}
          name="password.currentPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-500">Current Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    type={showCurrentPassword ? "text" : "password"}
                    id="password"
                    className="py-6 rounded-lg shadow-none pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#757575] hover:text-[#383838]"
                  >
                    {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4">
          <FormField
            control={form.control}
            name="password.newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-500">New Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type={showNewPassword ? "text" : "password"}
                      id="password"
                      className="py-6 rounded-lg shadow-none pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#757575] hover:text-[#383838]"
                    >
                      {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password.confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-500">Confirm New Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type={showConfirmPassword ? "text" : "password"}
                      id="password"
                      className="py-6 rounded-lg shadow-none pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#757575] hover:text-[#383838]"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
  )
}