"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import iphone from "@/public/images/iphone.png";

export default function Hero() {
  return (
    <section className="bg-[url('/images/hero.png')] bg-cover bg-center">
      
      <div className="grid items-center max-w-6xl min-h-screen grid-cols-1 gap-10 px-4 mx-auto md:grid-cols-2">
        
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white md:text-left"
        >
          <h1 className="mt-20 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Your Delivery & <br />
            Financial Lifestyle <br />
            App — All In One Place
          </h1>

          <p className="max-w-md mx-auto mt-4 text-sm text-white/80 sm:text-base md:mx-0">
            Get fast deliveries, send packages, pay with your wallet, earn referral
            rewards, and unlock micro-loans when you need them.
          </p>

          
          <div className="flex flex-col gap-4 mt-6 sm:flex-row sm:justify-center md:justify-start">
            
            <div className="flex items-center gap-3 px-5 py-3 bg-white shadow-lg cursor-pointer rounded-xl">
              <FaGooglePlay className="w-5 h-5 text-[#fe5722]" />
              <span className="text-[#440906] text-sm font-semibold whitespace-nowrap">
                Download on Google Play
              </span>
            </div>

            <div className="flex items-center gap-3 px-5 py-3 bg-white shadow-lg cursor-pointer rounded-xl">
              <FaApple className="w-5 h-5 text-black" />
              <span className="text-[#440906] text-sm font-semibold whitespace-nowrap">
                Download on App Store
              </span>
            </div>

          </div>
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src={iphone}
            alt="SuddenGo App"
            className="w-64 mt-20 mr-15 sm:w-80 md:w-96 drop-shadow-2xl"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}
