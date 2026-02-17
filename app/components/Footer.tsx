"use client";

import { motion } from "framer-motion";
import { FaTiktok, FaGooglePlay, FaApple } from "react-icons/fa";

// Motion variants
const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <motion.footer
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-[#fe5722] py-3 text-white"
    >
      <div className="max-w-5xl px-4 mt-8 mx-30 sm:px-6 lg:px-8">

        {/* MAIN CONTAINER */}
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:items-start">

          {/* SOCIAL LINKS */}
          <motion.div
            variants={item}
            className="grid w-full grid-cols-2 gap-x-8 gap-y-6 sm:gap-x-12 sm:gap-y-8 sm:w-auto"
          >
            {[ 
              { label: "X / Twitter", icon: "𝕏" },
              { label: "Instagram", custom: true },
              { label: "TikTok", iconComponent: <FaTiktok className="w-5 h-5 sm:w-6 sm:h-6" /> },
              { label: "LinkedIn", linkedin: true },
            ].map((social, i) => (
              <motion.a
                key={i}
                href="#"
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 transition-opacity hover:opacity-80"
              >
                {/* ICON LOGIC */}
                {social.icon && (
                  <span className="text-xl font-bold sm:text-2xl">{social.icon}</span>
                )}

                {social.custom && (
                  <div className="flex items-center justify-center w-5 h-5 border-2 border-white rounded-md sm:w-6 sm:h-6">
                    <div className="w-2 h-2 bg-white rounded-full sm:w-3 sm:h-3" />
                  </div>
                )}

                {social.iconComponent && social.iconComponent}

                {social.linkedin && (
                  <div className="flex items-center justify-center w-5 h-5 bg-white rounded sm:w-6 sm:h-6">
                    <span className="text-[#fe5722] font-bold text-xs sm:text-sm">in</span>
                  </div>
                )}

                <span className="text-lg font-bold sm:text-xl whitespace-nowrap">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* DOWNLOAD BUTTONS */}
          <motion.div
            variants={item}
            className="flex flex-col items-center w-full gap-4 lg:items-end lg:w-auto"
          >
            <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2">

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-6 py-3 shadow-lg cursor-pointer bg-[#FFF4ED] rounded-2xl"
              >
                <FaGooglePlay className="text-[#34A853] w-6 h-6" />
                <div className="text-[#440906] text-sm font-bold whitespace-nowrap">
                  Download on Google Play
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-6 py-3 shadow-lg cursor-pointer bg-[#FFF4ED] rounded-2xl"
              >
                <FaApple className="w-6 h-6 text-black" />
                <div className="text-[#440906] text-sm font-bold whitespace-nowrap">
                  Download on App Store
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* CONTACT INFO */}
        <motion.div
          variants={item}
          className="w-full mt-2 text-center lg:text-right"
        >
          <p className="mb-2 text-lg font-black leading-tight sm:text-sm">
            Email: Info@SuddenGo.com
            <span className="hidden mx-2 sm:inline">|</span>
            Contact: +234 708 796 0006
          </p>
          <p className="text-base font-medium sm:text-lg opacity-85">
            © All Rights Reserved. 2025, SuddenGo
          </p>
        </motion.div>

      </div>
    </motion.footer>
  );
}
