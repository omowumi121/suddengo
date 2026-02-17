"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import Image from "next/image";

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function Footer() {
  return (
    <motion.footer
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="px-4 py-6 bg-[#FE5722] text-white"
    >
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

        
          <motion.div
            variants={item}
            className="flex gap-4 text-xl"
          >
            {[SiTiktok, FaInstagram, FaTwitter, FaLinkedinIn].map(
              (Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="transition"
                >
                  <Icon />
                </motion.a>
              )
            )}
          </motion.div>

        
          <motion.div
            variants={item}
            className="flex gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/images/ppp.png"
                alt="Google Play"
                width={140}
                height={40}
                className="w-auto h-auto"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/images/ppn.png"
                alt="App Store"
                width={140}
                height={40}
                className="w-auto h-auto"
              />
            </motion.div>
          </motion.div>

        </div>

        
        <motion.div
          variants={item}
          className="mt-6 text-xs text-right text-white/90"
        >
          <p>
            Email:{" "}
            <a href="mailto:info@suddengo.com" className="underline">
              info@suddengo.com
            </a>{" "}
            | Contact:{" "}
            <a href="tel:+2347087960006" className="underline">
              +234 708 796 0006
            </a>
          </p>

          <p className="mt-1">
            © All Rights Reserved. 2025, SuddenGo
          </p>
        </motion.div>

      </div>
    </motion.footer>
  );
}
