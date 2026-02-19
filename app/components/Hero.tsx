"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import iphone from "@/public/images/iphone.png";

export default function Hero() {
  return (
    <section className="bg-[url('/images/hero.png')] bg-cover bg-center md:h-screen">
      <div className="grid items-center max-w-6xl min-h-screen gap-12 px-4 mx-auto md:grid-cols-2">

      
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white md:text-left md:ml-20 w-lg"
        >
          <h1 className="text-4xl font-bold text-left mt-30 sm:text-3xl md:text-center md:font-semibold md:text-4xl">
            Your Delivery & 
            Financial Lifestyle 
            App — All In One Place
          </h1>

          <p className="max-w-md mx-auto mt-4 text-sm md:text-center md:text-xs sm:text-left text-white/80 md:mx-0">
            Get fast deliveries, send packages, pay with your wallet, earn referral
            rewards, and unlock micro-loans when you need them.
          </p>

          <div className="flex flex-col gap-4 mt-6 mr-50 sm:flex-row md:justify-start">
            <div className="flex gap-3 px-6 py-3 bg-white rounded-sm shadow-lg cursor-pointer items-centerm md:ml-16 md:py-2 md:px-2">
              
              <FaGooglePlay className="w-3 h-4  text-[#22ddfe]" />
              <span className="text-[#440906] text-xs font-semibold whitespace-nowrap">
                Download on Google Play
              </span>
              </div>
            
             <div  className="flex gap-3 px-6 py-3 py-4 bg-white rounded-sm shadow-lg cursor-pointer items-centerm md:ml-16 md:py-2 md:px-2">
              <FaApple className="w-3 h-4 text-[#440906]" />
              <span className="text-[#ab7674] text-xs font-semibold whitespace-nowrap">
                Download on App Store
              </span>
              </div>
               </div>
        </motion.div>

            <Image
              src={iphone}
              alt="SuddenGo App"
              className="mt-20 ml-16 md:ml-30 w-105 sm:w-60 md:w-60 drop-shadow-2xl"
              priority
            />
          </div>
    </section>
  );
}
