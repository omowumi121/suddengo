"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import iphone from "@/public/images/iphone.png";

export default function Hero() {
  return (
    <section
      style={{ backgroundImage: "url('/images/hero.png')" }}
      className="min-h-screen bg-center bg-cover"
    >
      <div className="grid items-center w-full max-w-6xl gap-10 mx-auto md:grid-cols-2">

        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-4 px-8 pt-10 text-white tex2t-center md:items-start md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-semibold leading-tight"
          >
            Your Delivery & <br />
            Financial Lifestyle <br />
             App — All In One Place
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-md text-sm text-white/80"
          >
            Get fast deliveries, send packages, pay with your wallet, earn referral
            rewards, and unlock micro-loans when you need them.
          </motion.p>

          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col gap-4 mt-2 sm:flex-row"
          >
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-6 py-3 transition-all duration-300 bg-white shadow-lg cursor-pointer rounded-2xl hover:bg-gray-100 hover:scale-105 hover:shadow-xl active:scale-95 group"
            >
              <FaGooglePlay className="text-[#fe5722] w-6 h-6 transition-transform group-hover:scale-110" />
              <div className="text-[#440906] text-sm font-bold whitespace-nowrap">
                Download on Google Play
              </div>
            </motion.div>

            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-6 py-3 transition-all duration-300 bg-white shadow-lg cursor-pointer rounded-2xl hover:bg-gray-100 hover:scale-105 hover:shadow-xl active:scale-95 group"
            >
              <FaApple className="text-[#fe5722] w-6 h-6 transition-transform group-hover:scale-110" />
              <div className="text-[#440906] text-sm font-bold whitespace-nowrap">
                Download on App Store
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

      
            <Image
              src={iphone}
              alt="SuddenGo App"
              className="p-3 mt-20 w-30 md:w-96 drop-shadow-2xl"
              priority
            />
          

      </div>
    </section>
  );
}
