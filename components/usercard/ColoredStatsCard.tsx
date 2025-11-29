import React, { ReactElement } from 'react'
import { Card, CardContent } from '../ui/card';
import Link from 'next/link';


interface ColoredStatsCardProps {
    count: number;
    href: string;
    title: string;
    Icon: ReactElement;
    bgColor?: string;
}

const ColoredStatsCard = ({ count, href, title, Icon, bgColor }: ColoredStatsCardProps) => {
    return (
        <Link href={href} className='w-full hover:scale-[0.95] transition-all duration-200 ease-in-out'>
            <Card className={`h-auto py-4 sm:py-6 bg-[${bgColor}] shadow-none border-none`}>
                <CardContent className='flex items-start justify-between'>
                    <div className='grid gap-2'>
                        <h4 className='text-[1.2rem] sm:text-2xl xl:text-[1.5rem] 2xl:text-4xl font-bold text-[#383838]'>{count}</h4>
                        <p className='text-[#5B5B5B] text-xs sm:text-sm'>{title}</p>
                    </div>
                    <span>
                        {Icon}
                    </span>
                </CardContent>
            </Card>
        </Link>
    )
}

export default ColoredStatsCard