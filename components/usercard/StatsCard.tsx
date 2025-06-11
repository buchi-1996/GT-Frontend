import React, { ReactElement } from 'react'
import { Card, CardContent } from '../ui/card'
import { StarIcon } from 'lucide-react';


interface StatsCardProps {
    title: string;
    count: number;
    isRating?: boolean;
    Icon: ReactElement
    badgeColor: string
}

const StatsCard = ({title, count, isRating, Icon, badgeColor}: StatsCardProps) => {
    return (
        <Card className="h-auto bg-[#ffffff] shadow-none border border-gray-200">
            <CardContent className="">
                <div className="flex gap-4 items-start justify-between">
                    <div className="grid gap-3">
                        <span className="text-[#626262] text-sm">{title}</span>
                        <div className="flex items-center gap-3">
                            {isRating && <StarIcon className="w-8 h-8 stroke-0 fill-amber-300 text-[#E8B931]"/>}
                            <div className="text-4xl font-bold text-[#222222]">{count}</div>
                        </div>
                    </div>

                    <div className={`w-12 h-12 ${badgeColor} rounded-lg flex shrink-0 items-center justify-center`}>
                        <span>
                            {Icon}
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default StatsCard