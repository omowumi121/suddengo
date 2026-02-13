"use client"
import Image from "next/image"
import Sudden from '@/public/Sudden-Logo.png'



export default function Navbar() {

    return(
        <header className="absolute top-0 left-0 w-full px-4 pt-6 z-20">
          <div className="flex items-center">
            <Image
            src={Sudden}
            alt="SuddenGo"
            width={120}
            height={40}
            priority
            />
          </div>
        </header>


    )

}