"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
            className="relative overflow-hidden rounded-3xl h-[420px] md:h-[520px]"
          >
            <Image
              src="/images/feedback1.jpg"
              alt="Smiling client"
              width={600}
              height={700}
              className="object-cover w-full h-full"
            />

          
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute inset-0 flex flex-col justify-end p-6 bg-black/40"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-6 text-3xl font-bold text-white md:text-4xl"
              >
                Food, Groceries & Essentials Delivered the Easy Way.
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55 }}
                viewport={{ once: true }}
                className="w-32"
              >
                <Image
                  src="/images/google-play.png"
                  alt="Google Play"
                  width={200}
                  height={80}
                  className="w-full h-auto transition hover:scale-105"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl h-[420px] md:h-[520px]"
          >
            <Image
              src="/images/feedback2.jpg"
              alt="App Preview"
              width={600}
              height={700}
              className="object-cover w-full h-full"
            />
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
