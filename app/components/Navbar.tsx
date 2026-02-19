"use client"
import Image from "next/image"
import Sudden from '@/public/Sudden-Logo.png'



export default function Navbar() {

    return(
        <header className="absolute top-0 left-0 z-20 w-full">
        <div className="flex max-w-6xl py-8 pt-6 mx-auto items-right mr-30 md:ml-30">
    <Image
      src={Sudden}
      alt="SuddenGo"
      width={130}
      height={110}
      priority
    />
       </div>
      </header>


    )

}