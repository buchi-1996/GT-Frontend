import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {




  return (
    <div className="min-h-screen bg-gradient-to-b from-[#CCECE9] to-[#E4E9CF]">
      <div className="container">
        <div className="pt-30 h-full grid place-items-center">
          <div className="grid place-items-center gap-3">
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
              <Avatar>
                <AvatarImage src="/assets/avatars/89051a52d05fe3c133e045a433d902704a3a36b0.jpg" alt="user" className="object-cover" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/assets/avatars/025b2128cc0250d37d3c563c2cb95df2ca13eae5.jpg" alt="user" className="object-cover" />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/assets/avatars/632733034e729a48c12548bfd5d3b388519d991f.jpg" alt="user" className="object-cover" />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/assets/avatars/7b268e8c2d618201281c74e4e3600cb4fd9e079d.jpg" alt="user" className="object-cover" />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </div>
            <p className="text-sm">2.7k People Helped</p>
          </div>
          <h1 className="mt-4 text-6xl md:text-8xl font-semibold text-center">Give Generously.<br /> Receive with Gratitude.</h1>
          <p className="mt-5 text-center text-gray-600">Join thousands of people sharing items, receiving <br />  items, and building stronger communities.</p>
          <div className="flex gap-4 mt-5">
            <Button variant="primary" className="py-6 px-6">List an Item</Button>
            <Button variant="secondary" className="py-6 px-6">Find free Items</Button>
          </div>
          <Image src="/assets/giver-illustration.png" width={500} height={1000} alt="givers" className="object-contain w-full h-auto max-w-3xl mt-10"/>
          {/* <div className="flex">
            <Image
              width={200}
              height={200}
              src="/assets/1a17ba04aed2e7c208d954ceb8198acf0b48f470.jpg"
              alt="illustration"
              className="rounded-lg md:rounded-xl border-3 border-white w-full md:w-[192px] h-[100px] md:h-[205px] object-cover"
            />
            <Image
              width={200}
              height={200}
              src="/assets/cd1cc4ae5196599e9b6564da4041da1a89c9581a.jpg"
              alt="illustration"
              className="transform rotate-[-2.88deg] -ml-2 rounded-lg md:rounded-xl border-3 border-white w-full md:w-[192px] h-[100px] md:h-[205px] object-cover"
            />
            <Image
              width={200}
              height={200}
              src="/assets/fb82f977ce51450e098621d56fe11faad1664c7f.jpg"
              alt="illustration"
              className="transform rotate-[5.42deg] -ml-2 rounded-lg md:rounded-xl border-3 border-white w-full md:w-[192px] h-[100px] md:h-[205px] object-cover"
            />
            <Image
              width={200}
              height={200}
              src="/assets/1ba24656e8d5765f2dbd98ba3562122e8951d0be.jpg"
              alt="illustration"
              className="transform rotate-[-1.59deg] -ml-2 rounded-lg md:rounded-xl border-3 border-white w-full md:w-[192px] h-[100px] md:h-[205px] object-cover"
            />
            <Image
              width={200}
              height={200}
              src="/assets/a49d1637cd04678f0c6d88703fbf04a25f7e3f91.jpg"
              alt="illustration"
              className="transform rotate-[-0.68deg] -mt-2 -ml-2 rounded-lg md:rounded-xl border-3 border-white w-full md:w-[192px] h-[100px] md:h-[205px] object-cover"
            />
            
          </div> */}
        </div>
      </div>
    </div>
  )
}



