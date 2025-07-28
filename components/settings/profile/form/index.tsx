// components/profile-form.tsx
"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { CompleteProfileFormData, completeProfileSchema } from "@/lib/schema"
import { BasicInfoSection } from "./BasicInfo"
import { AddressSection } from "./AddressForm"
import { PasswordSection } from "./PasswordForm"
import { SettingsSection } from "./OtherSettings"


export function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(completeProfileSchema),
    defaultValues: {
      profile: {
        firstName: "John",
        lastName: "John",
        username: "John",
        email: "example@gmail.com",
        phone: "",
        dateOfBirth: "",
        gender: undefined,
        accountRole: "receiver",
        language: "en",
        aboutMe: "",
        addresses: []
      },
      password: {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
      otherSettings: {
        profileVisibility: true,
        twoFactorAuth: false,
      }
    }
  })

  const onSubmit = (data: CompleteProfileFormData) => {
    console.log("All form data:", data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <BasicInfoSection form={form} />
        <AddressSection form={form} />
        <PasswordSection form={form} />
        <SettingsSection form={form} />

        <div className="flex justify-end">
          <Button
          variant="primary"
            type="submit"
            className="py-6"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </Form>
  )
}