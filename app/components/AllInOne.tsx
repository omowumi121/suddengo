"use client";

import { motion } from "framer-motion";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import Image from "next/image";
import allinone from "@/public/images/allinone.png";

export default function AllInOne() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative z-10 px-4 -mt-32 md:-mt-20 lg:-mt-20 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#FFF4ED] rounded-2xl md:rounded-[4rem] p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-16 border border-[#440906] relative overflow-hidden ">

          
          <div className="lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xs md:text-xl font-black text-[#440906] mb-6"
            >
              Deliveries, Groceries, Wallet & Loans — All in One App
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              viewport={{ once: true }}
              className="text-sm text-[#440906] opacity-90 leading-relaxed mb-4 max-w-xl"
            >
              SuddenGo connects you to meals, essentials, courier services,
              digital payments, referral rewards, and micro-loans — all in one
              powerful super-app.
            </motion.p>

            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-2 py-2 transition-all duration-300 bg-transparent rounded-sm shadow-lg cusor-pointer hover:bg-gray-100 hover:scale-105 hover:shadow-xl active:scale-95 group"
              >
                <FaGooglePlay className="text-[#fe5722] w-6 h-6 transition-transform group-hover:scale-110" />
                <div className="text-[#440906] text-xs whitespace-nowrap">
                  Download on Google Play
                </div>
              </motion.div>

          
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-2 py-2 transition-all duration-300 bg-white rounded-none shadow-lg cursor-pointer hover:bg-gray-100 hover:scale-105 hover:shadow-xl active:scale-95 group"
              >
                <FaApple className="text-[#440906] w-3 h-4 transition-transform group-hover:scale-110" />
                <div className="text-[#440906] text-xs whitespace-nowrap">
                  Download on App Store
                </div>
              </motion.div>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mt-10"
            >
              <motion.div
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-12 h-10 bg-[#fe5722] rounded-2xl flex items-center justify-center text-white font-black italic shadow-lg shadow-[#fe5722]/20"
              >
                S
              </motion.div>

              <span className="text-2xl md:text-3xl font-black text-[#fe5722] tracking-tighter">
                SuddenGo
              </span>
            </motion.div>
          </div>

          
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative lg:w-2/5"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 transform translate-y-6 lg:scale-110 lg:translate-y-8"
            >
              <Image
                src={allinone}
                alt="Woman using SuddenGo App"
                className="object-contain w-full h-auto"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
