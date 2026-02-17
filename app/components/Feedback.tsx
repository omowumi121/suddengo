"use client";

import { motion } from "framer-motion";
import { FaGooglePlay, FaApple } from "react-icons/fa";

export default function Feedback() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="px-4 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2">

          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl aspect-4/5 md:aspect-3/4"
          >
          
            <img
              src="/images/feedback1.jpg"
              alt="Smiling client"
              className="object-cover w-full h-full"
            />

            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute inset-0 flex flex-col items-start gap-6 p-6 pt-10 bg-black/30"
            >
              
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="max-w-md text-3xl font-bold text-white md:text-4xl"
              >
                Food, Groceries & Essentials Delivered the Easy Way.
              </motion.h2>

              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex gap-4"
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
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl aspect-4/5 md:aspect-3/4"
          >
            <img
              src="/images/feedback2.jpg"
              alt="App Preview"
              className="object-cover w-full h-full"
            />
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
