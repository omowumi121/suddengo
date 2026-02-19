"use client";

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.5,
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
      className="bg-[#fe5722] text-white"
    >
      <div className="flex flex-col items-center max-w-6xl gap-6 px-4 py-8 mx-auto">

  
        <motion.div
          variants={item}
          className="gap-6 text-sm colitems-center sm:gap-8"
        >
          <FooterLink label="X" href="#" />
          <FooterLink label="Instagram" href="#" icon={<FaInstagram />} />
          <FooterLink label="TikTok" href="#" icon={<FaTiktok />} />
          <FooterLink label="LinkedIn" href="#" icon={<FaLinkedinIn />} />
        </motion.div>

        
        <motion.div
          variants={item}
          className="text-sm font-medium text-center"
        >
          Email: Info@suddengo.com | Contact: +234 708 796 0006
        </motion.div>

      
        <motion.div
          variants={item}
          className="text-sm text-center opacity-90"
        >
          © All Rights Reserved. 2025, SuddenGo
        </motion.div>

      </div>
    </motion.footer>
  );
}


function FooterLink({ label, href, icon }: any) {
  return (
    <a
      href={href}
      className="flex items-center gap-1 transition-opacity hover:opacity-80"
    >
      {icon ? icon : null}
      <span>{label}</span>
    </a>
  );
}
