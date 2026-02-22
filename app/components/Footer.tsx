"use client";

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaXTwitter,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#fe5722] text-white">
      <div className="max-w-6xl px-4 py-10 mx-auto">

        {/* Main Top Section */}
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between md:items-start">

          {/* LEFT - Social Links */}
         <div className="grid grid-cols-1 gap-4 text-base md:ml-50 md:gap-10 sm:grid-cols-2 md:grid-cols-2 justify-items-center md:justify-items-start">
  <FooterLink icon={<FaXTwitter className="w-6 h-6" />} label="X / Twitter" />
  <FooterLink icon={<FaInstagram className="w-6 h-6" />} label="Instagram" />
  <FooterLink icon={<FaTiktok className="w-6 h-6" />} label="Tiktok" />
  <FooterLink icon={<FaLinkedinIn className="w-6 h-6" />} label="LinkedIn" />
</div>

          {/* RIGHT - Download + Contact */}
          <div className="flex flex-col items-center gap-6 text-center md:items-end md:text-right">

            {/* Download Buttons */}
            <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-end md:mr-10 ">
              <DownloadBtn
                icon={<FaGooglePlay className="text-[#fe5722]" />}
                text="Download on Google Play"
              />
              <DownloadBtn
                icon={<FaApple className="text-black" />}
                text="Download on App Store"
              />
            </div>

            {/* Contact */}
            <div className="text-sm md:mr-32">
              Email: Info@suddengo.com | Contact: +234 708 796 0006
            </div>

            {/* Copyright */}
            <div className="text-sm opacity-90 md:mr-60">
              © All Rights Reserved. 2025, SuddenGo
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}

function FooterLink({ icon, label }: any) {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
      {icon}
      <span>{label}</span>
    </div>
  );
}

function DownloadBtn({ icon, text }: any) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 transition bg-white shadow-md cursor-pointer rounded-xl hover:scale-105">
      {icon}
      <span className="text-[#440906] text-sm font-semibold whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}