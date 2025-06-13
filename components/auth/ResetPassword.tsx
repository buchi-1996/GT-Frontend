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
import { resetPasswordData, resetPasswordSchema } from "@/lib/schema";
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';


const ResetPassword = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const router = useRouter()


    const form = useForm({
        resolver: zodResolver(resetPasswordSchema),
        mode: "onChange", // ensures validation happens as user types
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    })

    const onSubmit = async (data: resetPasswordData) => {
        setIsSubmitting(true)
        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000))
            console.log("Form submitted:", data)

            router.push('/auth/reset-password/success')
            // Handle successful submission
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
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-500">Password</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    {...field}
                                                    type={showPassword ? "text" : "password"}
                                                    id="password"
                                                    className="py-6 rounded-lg shadow-none pr-10"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#757575] hover:text-[#383838]"
                                                >
                                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                                </button>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-500">Confirm Password</FormLabel>
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

export default ResetPassword