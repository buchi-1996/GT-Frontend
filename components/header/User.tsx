"use client"
import { useMediaQuery } from '@/hooks/use-media-query'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const User = ({className}: {className: string}) => {
    const mobile = useMediaQuery('768px')
    return (
        <div className={`${mobile ? 'border-0 pl-0': `${className} border-l pl-4`} flex items-center gap-3 `}>
            <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback className="bg-[#3a66f5] text-white">JD</AvatarFallback>
            </Avatar>
            <div className="text-sm">
                <div className="font-medium text-[#222222]">Jane D.</div>
                <div className="text-[#626262]">Giver Account</div>
            </div>
        </div>
    )
}

export default User