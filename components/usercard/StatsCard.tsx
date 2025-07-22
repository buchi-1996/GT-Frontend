import React, { ReactElement } from 'react'
import { Card, CardContent } from '../ui/card'
import { StarIcon } from 'lucide-react';


interface StatsCardProps {
    title: string;
    count: number;
    rating?: number;
    reviews?: number;
    isPercent?: boolean;
    weeklyStats?: string;
    Icon?: ReactElement
    badgeColor: string
}

const StatsCard = ({ title, isPercent, weeklyStats, reviews, count, rating, Icon, badgeColor }: StatsCardProps) => {
    return (
        <Card className="h-auto py-4 sm:py-6 bg-[#ffffff] shadow-none border border-gray-200">
            <CardContent className="px-3">
                <div className="flex gap-4 items-start justify-between">
                    <div>
                        <div className="flex flex-col gap-4 h-full">
                        <span className="text-[#626262] text-xs sm:text-sm">{title}</span>
                        <div className="mt-auto flex items-center gap-3">
                            {rating && <StarIcon className="w-8 h-8 stroke-0 fill-amber-300 text-[#E8B931]" />}
                            <div className="text-2xl sm:text-4xl font-bold text-[#222222]">
                                {rating ? `${rating} (${reviews})` : `${count} ${isPercent ? '%' : ''}`}
                                </div>
                        </div>
                    </div>
                        {weeklyStats && <span className="text-xs text-[#626262]">{weeklyStats}</span>}
                    </div>

                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${badgeColor} rounded-lg flex shrink-0 items-center justify-center`}>
                        <span className="w-5 h-5">{Icon}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default StatsCard