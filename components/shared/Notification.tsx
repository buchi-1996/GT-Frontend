import React from 'react'


interface NotificationProps {
    notice: string
    label?: string
    type?: 'info' | 'success' | 'warning' | 'danger'
    className?: string
}



const Notification = ({ notice, label, type = 'info', className }: NotificationProps) => {

    const getNotificationStyles = () => {
        const baseStyles = 'px-4 md:px-6 py-4 rounded-lg border mt-6 relative'
        
        switch (type) {
            case 'success':
                return `${baseStyles} bg-green-50 border-green-200 text-green-800`
            case 'warning':
                return `${baseStyles} bg-yellow-50 border-yellow-200 text-yellow-800`
            case 'danger':
                return `${baseStyles} bg-[#F9EEE7] border-red-200 text-[#F97311]`
            case 'info':
                return `${baseStyles} bg-[#E7EFF9] border-blue-200 text-[#2563EB]`
            default:
                return `${baseStyles} bg-blue-50 border-blue-200 text-blue-800`
        }
    }


    return (
        <div className={`${getNotificationStyles()} ${className}`}>
            <p className="text-sm leading-6"><span className='font-semibold'>{label}</span> {notice}</p>
        </div>
    )
}

export default Notification