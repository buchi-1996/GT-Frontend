// components/settings-section.tsx
"use client"

import { UseFormReturn } from "react-hook-form"
import { FormField, FormItem, FormControl, FormLabel, FormMessage } from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"
import { CompleteProfileFormData } from "@/lib/schema"
import { usePathname } from "next/navigation"
import { Slider } from "@/components/ui/slider"

interface SettingsSectionProps {
  form: UseFormReturn<CompleteProfileFormData>
}

export function SettingsSection({ form }: SettingsSectionProps) {

  const pathname = usePathname()
  const isGiver = pathname.includes("/giver/")

  return (
    <div className="grid gap-6 border py-6 px-4 md:px-6 rounded-lg">
      <h3 className="font-semibold text-[#222222]">Other Settings</h3>

      <FormField
        control={form.control}
        name="otherSettings.profileVisibility"
        render={({ field }) => (
          <FormItem>
            <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center gap-4 justify-between">
              <div>
                <h4 className="font-semibold text-sm text-[#222222] mb-1">Everyone can view my profile</h4>
                <p className="text-sm text-[#626262]">Turning off means only selected user will see your profile</p>
              </div>
              <FormControl>
                <Switch
                  checked={!!field.value}
                  onCheckedChange={field.onChange}
                  className="data-[state=checked]:bg-[#14ae7d] data-[state=checked]:data-[slot=thumb]:bg-white"
                />
              </FormControl>
            </div>
          </FormItem>
        )}
      />

      {isGiver && <FormField
        control={form.control}
        name="otherSettings.twoFactorAuth"
        render={({ field }) => (
          <FormItem>
            <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
              <div>
                <h4 className="font-semibold text-sm text-[#222222] mb-1">2FA authentication</h4>
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
      />}
      {!isGiver && <div className='py-6 w-full'>
        <FormField
          control={form.control}
          name="otherSettings.preferredPickupRadius"
          render={({ field }) => (
            <FormItem className="grid gap-6 bg-[#f9fafb] p-4 rounded-lg">
              <FormLabel className="font-semibold text-sm text-[#222222] mb-1">Reminder Timing (hours before pickup)</FormLabel>
              <div className='flex items-center justify-between gap-6'>
                <Slider onValueChange={(value) => field.onChange(value[0])} defaultValue={[field.value ?? 0]} max={10} step={2} />
                <h4 className="font-semibold whitespace-nowrap">{field.value} miles</h4>
              </div>
              <p className='text-sm text-gray-500'>We&apos;ll show you items within this distance from your location</p>
              <FormMessage />
            </FormItem>
          )}
        />

      </div>}
    </div>
  )
}