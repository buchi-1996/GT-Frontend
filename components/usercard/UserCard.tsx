import React from 'react'
import { Card, CardContent } from '../ui/card'
import Link from 'next/link';
import Image from 'next/image';

interface UserCardProps {
    title: string;
    description: string;
    imageIcon: string; // should be a string path or StaticImport
    href: string;
    color?: string;
}


const UserCard = ({ title, description, imageIcon, href }: UserCardProps) => {
    
    return (
        <Link href={href} className="w-full min-h-full hover:scale-105 transition-transform duration-300 ease-in-out">
            <Card className="bg-[#ffffff] py-6 shadow-none border cursor-pointer">
                <CardContent className="flex items-center gap-6">
                        <Image src={imageIcon} alt="gift icon" width={100} height={100} className="w-8 h-8" />
                    <div className='flex items-center-safe gap-2'>
                        <h3 className="text-[1rem] font-semibold text-[#222222]">{title}</h3>
                        <span>-</span>
                        <p className="text-[#626262] text-sm">{description}</p>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}

export default UserCard