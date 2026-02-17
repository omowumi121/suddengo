"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import download from "@/public/images/download.png";
import allinone from "@/public/images/allinone.png";

export default function AllInOne() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative z-10 px-4 -mt-32 md:-mt-48 lg:-mt-36 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl p-4 mx-auto">
        <div className="bg-[#FFF4ED] rounded-2xl p-6 md:p-10 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-16 border border-[#440906] leading-[1.1] mb-2">
          
          
          <div className="lg:w-1/2">
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl md:text-3xl font-black text-[#440906] mb-6"
            >
              Deliveries, Groceries, Wallet & Loans — All in One App
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              viewport={{ once: true }}
              className="text-sm text-[#440906] opacity-90 leading-relaxed mb-10 max-w-xl"
            >
              SuddenGo connects you to meals, essentials, courier services,
              digital payments, referral rewards, and micro-loans — all in one
              powerful super-app.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              <a href="#">
                <Image
                  src={download}
                  alt="Download App"
                  className="w-auto transition h-14 hover:scale-105"
                />
              </a>
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
