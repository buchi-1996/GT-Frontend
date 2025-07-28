// components/settings-section.tsx
"use client"

import { UseFormReturn } from "react-hook-form"
import { FormField, FormItem, FormControl } from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"

interface SettingsSectionProps {
  form: UseFormReturn<any>
}

export function SettingsSection({ form }: SettingsSectionProps) {
  return (
    <div className="grid gap-6 border py-6 px-4 md:px-6 rounded-lg">
      <h3 className="font-semibold text-[#222222]">Other Settings</h3>

      <FormField
        control={form.control}
        name="settings.profileVisibility"
        render={({ field }) => (
          <FormItem>
            <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center justify-between">
              <div>
                <h4 className="font-medium text-md text-[#222222]">Everyone can view my profile</h4>
                <p className="text-sm text-[#626262]">Turning off means only selected user will see your profile</p>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="data-[state=checked]:bg-[#14ae7d] data-[state=checked]:data-[slot=thumb]:bg-white"
                />
              </FormControl>
            </div>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="settings.twoFactorAuth"
        render={({ field }) => (
          <FormItem>
            <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center justify-between">
              <div>
                <h4 className="font-medium text-md text-[#222222]">2FA authentication</h4>
                <p className="text-sm text-[#626262]">This will add an extra layer of security to your account</p>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="data-[state=checked]:bg-[#14ae7d]"
                />
              </FormControl>
            </div>
          </FormItem>
        )}
      />
    </div>
  )
}