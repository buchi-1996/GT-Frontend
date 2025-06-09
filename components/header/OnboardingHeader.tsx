import React from 'react'
import { Button } from '../ui/button'
import { X } from 'lucide-react'
import Link from 'next/link'

const OnboardingHeader = () => {
  return (
    <header className="border-b">
      <nav className="container mx-auto flex justify-between items-center p-6">
        <Link href="/">
          <div className="text-2xl font-bold text-[#0d9488]">GT</div>
        </Link>
        <Button variant="ghost" size="icon" asChild className="text-[#626262] hover:bg-[#ededed]">
          <X className="w-5 h-5 text-gray-500" />
        </Button>
      </nav>
    </header>
  )
}

export default OnboardingHeader