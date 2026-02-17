"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import appStore from "@/public/images/app-Store.png";
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
          className="flex flex-col items-center gap-4 px-8 pt-32 text-center text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold leading-tight"
          >
            Your Delivery & Financial Lifestyle App — All In One Place
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-white/80"
          >
            Get fast deliveries, send packages, pay with your wallet, earn referral
            rewards, and unlock micro-loans when you need them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#">
              <Image
                src={appStore}
                alt="Download App"
                className="w-auto transition h-14 hover:scale-105"
              />
            </a>
          </motion.div>
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={iphone}
              alt="SuddenGo App"
              className="w-40 p-3 mt-20 md:w-96 drop-shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
