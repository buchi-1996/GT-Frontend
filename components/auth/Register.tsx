"use client"
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
import { registerGiverData, registerGiverSchema } from "@/lib/schema";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const router = useRouter()

    const form = useForm({
        resolver: zodResolver(registerGiverSchema),
        mode: "onChange", // ensures validation happens as user types
        defaultValues: {
            fullName: "",
            email: "",
            phoneNumber: "",
            password: "",
        },
    })


    const onSubmit = async (data: registerGiverData) => {
        setIsSubmitting(true)
        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000))
            console.log("Form submitted:", data)
            // Handle successful submission
            alert("Account created successfully!")
            router.push('/auth/verify-notice')
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
                    <div className="space-y-4 lg:space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-baseline">
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-500">Full Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="text"
                                                id="fullName"
                                                placeholder="Full Name"
                                                className="py-6 rounded-lg shadow-none"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-500">Email Address</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="email"
                                                id="email"
                                                placeholder="Email Address"
                                                className="py-6 rounded-lg shadow-none"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-baseline">
                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-500">Phone Number</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="tel"
                                                id="phoneNumber"
                                                placeholder="Phone Number"
                                                className="py-6 rounded-lg shadow-none"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-500">Password - <span className="text-gray-400">Must be up to 8 digits</span></FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    {...field}
                                                    type={showPassword ? "text" : "password"}
                                                    id="password"
                                                    placeholder="Password"
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
                        </div>
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting || !form.formState.isValid}
                        className={`w-full text-white py-6 cursor-pointer my-4 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed ${form.formState.isValid ? "bg-[#0d9488] hover:bg-[#0d9488]/90" : "bg-[#85c9c3] hover:bg-[#85c9c3]"
                            }`}
                    >
                        {isSubmitting ? "Creating Account..." : "Continue"}
                    </Button>

                </form>
            </Form>
            <p className="text-center text-sm text-[#626262] mt-4">
                By continuing, you agree to our{" "}
                <Link href="#" className="text-[#0d9488] hover:underline">
                    Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-[#0d9488] hover:underline">
                    Privacy Policy
                </Link>
                .
            </p>
            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-[#626262]">Or</span>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <Button
                    type="button"
                    variant="outline"
                    className="border shadow-none cursor-pointer hover:bg-[#f9f9f9] text-[#383838] py-6"
                    disabled={isSubmitting}
                >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                    </svg>
                    <span className="hidden md:block">Continue with Google</span>
                </Button>
                <Button
                    type="button"
                    variant="outline"
                    className="border shadow-none cursor-pointer hover:bg-[#f9f9f9] text-[#383838] py-6"
                    disabled={isSubmitting}
                >
                    <svg className="text-2xl" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.25 11C21.25 16.796 16.5512 21.5 10.75 21.5C4.94875 21.5 0.25 16.796 0.25 11C0.25 5.19875 4.94875 0.5 10.75 0.5C16.5512 0.5 21.25 5.19875 21.25 11Z" fill="#333333" />
                        <path d="M15.6716 8.34304C15.6143 8.37646 14.2503 9.08186 14.2503 10.6459C14.3146 12.4296 15.9716 13.0551 16 13.0551C15.9716 13.0885 15.7498 13.9072 15.093 14.7654C14.5717 15.5047 13.9932 16.25 13.1146 16.25C12.2789 16.25 11.9789 15.7573 11.0146 15.7573C9.97902 15.7573 9.68601 16.25 8.89315 16.25C8.01458 16.25 7.39315 15.4647 6.84345 14.7324C6.12932 13.7739 5.52233 12.2698 5.5009 10.8256C5.48646 10.0603 5.64392 9.30802 6.04361 8.66904C6.60774 7.77699 7.61489 7.17143 8.71473 7.15146C9.55744 7.12498 10.3074 7.6906 10.8217 7.6906C11.3146 7.6906 12.236 7.15146 13.2786 7.15146C13.7286 7.1519 14.9286 7.27822 15.6716 8.34304ZM10.7505 6.99866C10.6005 6.29978 11.0146 5.60089 11.4003 5.15508C11.8932 4.61594 12.6716 4.25 13.3429 4.25C13.3857 4.94889 13.1141 5.63432 12.6287 6.13352C12.1932 6.67266 11.4432 7.07853 10.7505 6.99866Z" fill="white" />
                    </svg>
                    <span className="hidden md:block">Continue with Apple</span>
                </Button>
            </div>
        </div>
    )
}

export default Register