"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { forgotPasswordData, forgotPasswordSchema } from "@/lib/schema";
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const ForgotPassword = () => {

    const [isSubmitting, setIsSubmitting] = useState(false)
        const router = useRouter()
    

     const form = useForm({
            resolver: zodResolver(forgotPasswordSchema),
            mode: "onChange", // ensures validation happens as user types
            defaultValues: {
                email: "",
            },
        })

        const onSubmit = async (data: forgotPasswordData) => {
                setIsSubmitting(true)
                try {
                    // Simulate API call
                    await new Promise((resolve) => setTimeout(resolve, 2000))
                    console.log("Form submitted:", data)
                    // Handle successSuccessfulful submission
                    toast.success("Link sent successfully", {
                        id: "link-sent-success"
                    })
                    router.push('/auth/reset-password')
                    form.reset()
                } catch (error) {
                    console.error("Submission error:", error)
                    alert("Something went wrong. Please try again.")
                } finally {
                    setIsSubmitting(false)
                }
            }
        
  return (
    <div className="w-full max-w-3xl">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid gap-2">
                        <div className="grid gap-8 items-baseline">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-500">Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="email"
                                                id="email"
                                                className="py-6 rounded-lg shadow-none"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button
                            type="submit"
                            disabled={isSubmitting || !form.formState.isValid}
                            className={`w-full text-white py-6 cursor-pointer my-4 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed ${form.formState.isValid ? "bg-[#0d9488] hover:bg-[#0d9488]/90" : "bg-[#85c9c3] hover:bg-[#85c9c3]"
                                }`}
                        >
                            {isSubmitting ? "Loading...." : "Send Reset Link"}
                        </Button>
                    </div>

                </form>
            </Form>

            
        </div>
  )
}

export default ForgotPassword