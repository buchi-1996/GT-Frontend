import React from 'react'
import { Card, CardContent } from '../ui/card'
import Link from 'next/link';
import Image from 'next/image';

interface UserCardProps {
    title: string;
    description: string;
    imageIcon: string; // should be a string path or StaticImport
    href: string;
    color: string;
}


const UserCard = ({ title, description, imageIcon, href, color }: UserCardProps) => {
    
    return (
        <Link href={href} className="w-full min-h-full">
            <Card className="bg-[#ffffff] shadow-none border cursor-pointer">
                <CardContent className="flex gap-4 md:flex-col  items-center md:items-start  md:p-8">
                    <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center md:mb-4`}>
                        <Image src={imageIcon} alt="gift icon" width={100} height={100} className="w-8 h-8" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#222222] mb-2">{title}</h3>
                        <p className="text-[#626262] text-sm">{description}</p>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}

export default UserCard