"use client"

import Notification from '@/components/shared/Notification'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

const interestCategories = [
    {
        id: "food-and-groceries",
        title: "Food and Groceries",
        icon: "🍎"
    },
    {
        id: "clothing-and-accessories",
        title: "Clothing and Accessories",
        icon: "👕"
    },
    {
        id: "books-and-media",
        title: "Books and Media",
        icon: "📚"
    },
    {
        id: "sports-and-recreation",
        title: "Sports and Recreation",
        icon: "⚽️"
    },
    {
        id: "electronics",
        title: "Electronics",
        icon: "📱"
    },
    {
        id: "toys-and-games",
        title: "Toys and Games",
        icon: "🧸"
    },
    {
        id: "health-and-beauty",
        title: "Health and Beauty",
        icon: "💄"
    },
    {
        id: "garden-and-outdoor",
        title: "Garden and Outdoor",
        icon: "🌻"
    },
    {
        id: "pet-supplies",
        title: "Pet Supplies",
        icon: "🐶"
    },
    {
        id: "tools-and-hardware",
        title: "Tools and Hardware",
        icon: "🔧"
    },
    {
        id: "furniture-and-home",
        title: "Furniture and Home",
        icon: "🪑"
    },
    {
        id: "automotive",
        title: "Automotive",
        icon: "🚗"
    }
]
const InterestCategoriesView = () => {
    const [selectedInterstCategories, setSelectedInterestCategories] = React.useState<string[]>([])

    const handleToggleCategory = (categoryId: string) => {
        if (selectedInterstCategories.includes(categoryId)) {
            setSelectedInterestCategories(selectedInterstCategories.filter(id => id !== categoryId))
        } else {
            setSelectedInterestCategories([...selectedInterstCategories, categoryId])
        }
    }


    return (
        <div className='p-4 md:p-6 rounded-lg border'>
            <div className='grid hidden lg:block pb-6'>
                <h4 className='text-md sm:text-[1.2rem] font-semibold text-[#222222]'>Interest Categories</h4>
                <p className='text-gray-500 text-sm'>Select categories you&apos;re interested in to get personalised recommendations</p>
            </div>
            <div className='@container'>
                <div className='grid grid-cols-1 gap-4 @md:grid-cols-2 @2xl:grid-cols-3 py-6 border-t-0 lg:border-t'>
                    {interestCategories.map((category) => (
                        <Card onClick={() => handleToggleCategory(category.id)} key={category.id} className={`hover:scale-[0.95] cursor-pointer transition-all duration-200 ease-in-out shadow-none ${selectedInterstCategories.includes(category.id) ? 'bg-green-bg text-green-text border-green-text' : 'border bg-none'}`}>
                            <CardContent>
                                <div className='flex items-center gap-4'>
                                    <span className=''>{category.icon}</span>
                                    <h4 className='text-sm'>{category.title}</h4>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Notification
                    type="info"
                    notice="Based on your selected interests, we&apos;ll prioritize showing you relevant items and send notifications about new listings in these categories."
                    label="Personalised Recommendations:"
                />
            </div>
            <div className="flex justify-end">
                <Button
                    variant="primary"
                    type="submit"
                    className="py-6 mt-8 w-full md:w-auto"
                >
                    Save Preferences
                </Button>
            </div>
        </div>
    )
}

export default InterestCategoriesView