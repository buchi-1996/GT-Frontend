"use client"

import React, { useState } from 'react'
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import { Badge } from '../ui/badge';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { FilterIcon } from 'lucide-react';
import { Button } from '../ui/button';
import ResponsiveModal from '../modal/ResponsiveModal';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from 'next/link';



interface SaveItemProps {
    id: string;
    title: string;
    image: string;
    availability: string;
    condition: string;
    location: string;
    category: string;
}


const tabs = [
    { id: "available", label: "Available" },
    { id: "unavailable", label: "Unavailable" },
    { id: "expiring", label: "Expiring Soon" },
]


const getStatusColor = (condition: string) => {
    switch (condition) {
        case "new":
            return "bg-white text-[#8E6ADD]"
        case "good":
            return "bg-white text-[#F97311]"
        case "fair":
            return "bg-white text-[#8E6ADD]"
        case "needs-repair":
            return "bg-white text-[#ED110E]"
        default:
            return "bg-gray-100 text-gray-800"
    }
}

const getStatusText = (condition: string) => {
    switch (condition) {
        case "new":
            return "New"
        case "good":
            return "Good"
        case "fair":
            return "Fair"
        case "needs-repair":
            return "Needs Repair"
        default:
            return condition
    }
}



const SavedItemsView = () => {


    const savedItems: SaveItemProps[] = [
        {
            id: "1",
            title: "Wooden Dining Table",
            image: "/assets/pickup-items/4238693ee6ba2a233895d815749f8745323d13ed.png",
            category: "Furniture",
            availability: "available",
            condition: "fair",
            location: "Capitol Hill, Seattle",
        },
        {
            id: "2",
            title: "Mountain Bike",
            image: "/assets/pickup-items/4238693ee6ba2a233895d815749f8745323d13ed.png",
            category: "Sports",
            availability: "unavailable",
            condition: "needs-repair",
            location: "Capitol Hill, Seattle",
        },
        {
            id: "3",
            title: "Leather Jacket",
            image: "/assets/pickup-items/4238693ee6ba2a233895d815749f8745323d13ed.png",
            category: "Clothing",
            availability: "available",
            condition: "needs-repair",
            location: "Capitol Hill, Seattle",
        },
        {
            id: "4",
            title: "Electric Guitar",
            image: "/assets/pickup-items/4238693ee6ba2a233895d815749f8745323d13ed.png",
            category: "Electronics",
            availability: "available",
            condition: "good",
            location: "Capitol Hill, Seattle",
        },
        {
            id: "5",
            title: "Ceramic Vase",
            image: "/assets/pickup-items/4238693ee6ba2a233895d815749f8745323d13ed.png",
            category: "Home & Garden",
            availability: "unavailable",
            condition: "fair",
            location: "Capitol Hill, Seattle",
        },
        {
            id: "6",
            title: "Cookbook Collection",
            image: "/assets/pickup-items/4238693ee6ba2a233895d815749f8745323d13ed.png",
            category: "Books",
            availability: "expiring",
            condition: "good",
            location: "Capitol Hill, Seattle",
        },
        {
            id: "7",
            title: "Running Shoes",
            image: "/assets/pickup-items/4238693ee6ba2a233895d815749f8745323d13ed.png",
            category: "Sports",
            availability: "expiring",
            condition: "new",
            location: "Capitol Hill, Seattle",
        }
    ]

    const [activeTab, setActiveTab] = useState("available")

    const categories = ["Electronics", "Furniture", "Clothing", "Books", "Sports", "Home & Garden"]
    const [selectedCategory, setSelectedCategory] = useState("")
    const [filterModalOpen, setFilterModal] = useState(false)
    const [filteredQuery, setFilteredQuery] = useState({category: "", sortBy: ""})

        const saveFilterAndSortSettings = () => {
            setSelectedCategory(filteredQuery.category)
            setFilterModal(false)
        }

    // const filteredItems = savedItems.filter((item) => {
    //     // if (activeTab === "available") return true
    //     return item.availability === activeTab
    // })

    const filteredItems = savedItems.filter((item) => {
        const tabMatch = activeTab === "all" ? true : item.availability === activeTab;
        const categoryMatch = !selectedCategory || selectedCategory === "all"
            ? true
            : item.category.toLowerCase() === selectedCategory.toLowerCase();
        return tabMatch && categoryMatch;
    })

    // const getTabCount = (tabId: string) => {
    //     if (tabId === "all") return savedItems.length
    //     return savedItems.filter((item) => item.availability === tabId).length
    // }

    const getTabCount = (tabId: string) => {
        const categoryMatch = (item: SaveItemProps) =>
            !selectedCategory || selectedCategory === "all"
                ? true
                : item.category.toLowerCase() === selectedCategory.toLowerCase();

        if (tabId === "all") return savedItems.filter(categoryMatch).length;

        return savedItems.filter((item) => item.availability === tabId && categoryMatch(item)).length;
    }

    const getActionButtonsForCard = (availability: string) => {
        switch (availability) {
            case "available":
                return (
                    <div className='grid grid-cols-2 w-full gap-3'>
                        <Button variant="secondary" className='py-5 w-full'>View Details</Button>
                        <Button variant="primary" className='py-5 w-full'>Request Item</Button>
                    </div>
                )
            case "unavailable":
                return (
                    <Button variant="secondary" className='py-5 w-full'>Remove</Button>
                    // <div className='rounded-lg bg-gray-50 text-xs md:text-[0.8rem] p-3 text-gray-500'>Item successfully received by recipient</div>
                )
            case "expiring":
                return (
                    <Button variant="secondary" className='py-5 w-full'>Remove</Button>
                )
            default:
                return null
        }
    }



    return (
        <div className="min-h-screen">
            <div className="w-full grid gap-10">
                <div className="flex items-center gap-4 justify-between overflow-hidden">
                    <ScrollArea className="w-full overflow-auto">
                        <div className="flex gap-2 md:gap-6 bg-white rounded-lg">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-4 text-[0.9rem] py-2 whitespace-nowrap rounded-md font-medium transition-colors flex items-center gap-2   ${activeTab === tab.id ? "bg-green-bg text-green-text" : "text-gray-500 hover:text-gray-900"
                                        } `}
                                >
                                    {tab.label}
                                    <Badge variant="secondary" className={`text-gray-600 text-xs ${activeTab === tab.id ? "bg-white text-app-black" : "text-gray-400"}`}>
                                        {getTabCount(tab.id)}
                                    </Badge>
                                </button>
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-4">
                            <Select onValueChange={setSelectedCategory} value={selectedCategory}>
                                <SelectTrigger className="w-auto shadow-none">
                                    <SelectValue placeholder="All Categories" />
                                </SelectTrigger>
                                <SelectContent className="shadow-xl border-none px-1 py-2">
                                    <SelectItem value="all">All Categories</SelectItem>
                                    {categories.map((category) => (
                                        <SelectItem key={category} value={category.toLowerCase()}>{category}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-auto shadow-none">
                                    <SelectValue placeholder="Recently Saved" />
                                </SelectTrigger>
                                <SelectContent className="shadow-xl border-none px-1 py-2">
                                    <SelectItem value="recent">Recently Saved</SelectItem>
                                    <SelectItem value="oldest">Oldest First</SelectItem>
                                    <SelectItem value="nearest">Nearest</SelectItem>
                                    <SelectItem value="alphabetical">Alphabetical</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button className='flex md:hidden' onClick={() => setFilterModal(true)} variant="ghost" size="icon"><FilterIcon /></Button>

                        <Button className='font-semibold' variant="primary" asChild>
                            <Link href="#" >Browse</Link>
                        </Button>
                    </div>
                </div>
            </div>
            {/* Items Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 my-8">
                {filteredItems.length === 0 && (<p className='h-[60vh] grid place-items-center text-center w-full col-span-3 text-gray-500'>No saved items found.</p>)}
                {filteredItems.map((item) => (
                    <div key={item.id} className="w-full border rounded-lg overflow-hidden">
                        <div className='relative'>
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={1000}
                                height={1000}
                                className="w-full h-48 object-cover"
                            />
                            <Badge className={`absolute top-5 right-5 font-semibold text-[#626262] ${getStatusColor(item.condition)} py-1 border-none lg:py-1 px-2 lg:px-3 rounded-full text-[0.8rem] lg:text-sm`}>{getStatusText(item.condition)}</Badge>
                            {activeTab === 'expiring' && <Badge className={`absolute bottom-5 right-5 font-semibold text-[#FF514E] bg-[#FFE8E8] py-1 border-none lg:py-1 px-2 lg:px-3 rounded-full text-[0.8rem] lg:text-sm`}>Expires in 3 hours</Badge>}
                        </div>
                        <div className='flex flex-col p-4'>
                            <h4 className='font-[500px] text-md'>{item.title}</h4>
                            <div className='flex gap-2 border-b pb-3 flex-row items-center'>
                                <Avatar className="w-6 h-6">
                                    <AvatarImage src="/placeholder.svg?height=48&width=48" />
                                    <AvatarFallback className="bg-[#0d9488] text-xs text-white">SJ</AvatarFallback>
                                </Avatar>
                                <div className='flex items-baseline  justify-between w-full'>
                                    <h3 className="font-normal text-xs capitalize text-nowrap text-gray-500 flex gap-2 ">From Sarah Johnson</h3>
                                    {item.availability === "available" && (<Button variant="ghost" className='text-[#C00F0C] h-0 cursor-pointer  p-0 bg-none hover:bg-none'>Remove</Button>)}
                                    {item.availability === "expiring" && (<Button variant="ghost" className='text-[#C00F0C] h-0 cursor-pointer  p-0 bg-none hover:bg-none'>Remove</Button>)}
                                </div>
                            </div>
                            <div className='grid gap-2 my-3'>
                                <div className="flex items-center gap-2">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none">
                                            <path
                                                stroke="#626262"
                                                strokeLinecap="round"
                                                d="M12 12.836c.83.283 1.333.655 1.333 1.062 0 .886-2.387 1.605-5.333 1.605-2.945 0-5.333-.719-5.333-1.605 0-.407.503-.78 1.333-1.062"
                                            ></path>
                                            <path stroke="#626262" d="M10 7.17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path>
                                            <path
                                                stroke="#626262"
                                                d="M8 2.17c2.706 0 5 2.285 5 5.058 0 2.817-2.332 4.793-4.485 6.137a1.03 1.03 0 0 1-1.03 0C5.335 12.008 3 10.055 3 7.228 3 4.455 5.294 2.17 8 2.17Z"
                                            ></path>
                                        </svg>
                                    </span>
                                    <p className="text-xs text-gray-500">Capoitol Hill, Seattle</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>
                                        <svg className="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none">
                                            <path
                                                stroke="currentColor"
                                                d="M8 15.503A6.667 6.667 0 1 0 8 2.17a6.667 6.667 0 0 0 0 13.333Z"
                                            ></path>
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m6.333 7.17 2.334 2.333m2-3.333L7.333 9.503"
                                            ></path>
                                        </svg>
                                    </span>
                                    <p className="text-xs">Saved 3 days ago</p>
                                </div>
                            </div>
                            {/* action buttons */}
                            <div className='mt-auto'>
                                {getActionButtonsForCard(item.availability)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <ResponsiveModal open={filterModalOpen} close={() => setFilterModal(false)} className="max-w-full md:max-w-[500px] md:min-h-auto pb-10 px-6">
                <h4 className='text-xl mb-4 md:text-2xl font-semibold'>Filter By</h4>
                <RadioGroup
                    value={filteredQuery.category}
                    // onValueChange={setFilteredQuery.bind(null, { ...filteredQuery, category: "" })}
                    onValueChange={(value: string)=> setFilteredQuery({ ...filteredQuery, category: value })}
                    className='py-1 grid gap-4 overflow-y-auto mb-4 scrollbar-hide'
                >
                    <div className="flex items-center justify-between w-full gap-3 mb-4">
                                <Label htmlFor="all" className="leading-5 text-gray-500">
                                    All Categories
                                </Label>
                                <RadioGroupItem
                                    value="all"
                                    className="ring ring-app-primary mr-1 text-app-primary"
                                    id={filteredQuery.category}
                                />
                            </div>
                    {categories.map((cat) => (
                            <div key={cat.toLowerCase()} className="flex items-center justify-between w-full gap-3 mb-4">
                                <Label htmlFor={cat.toLowerCase()} className="leading-5 text-gray-500">
                                    {cat}
                                </Label>
                                <RadioGroupItem
                                    value={cat.toLowerCase()}
                                    className="ring ring-app-primary mr-1 text-app-primary"
                                    id={cat.toLowerCase()}
                                />
                            </div>
                    ))}
                </RadioGroup>
                <Button variant="primary" className="w-full py-3" onClick={saveFilterAndSortSettings}>Save</Button>
            </ResponsiveModal>
        </div>
    )
}



export default SavedItemsView