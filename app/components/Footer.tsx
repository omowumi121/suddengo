"use client";

import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-4 py-6 bg-[#FE5722] text-white">
      <div className="max-w-6xl mx-auto">

        {/* TOP ROW */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* SOCIALS */}
          <div className="flex gap-4 text-xl">
            <a href="#" className="transition hover:scale-110">
              <SiTiktok />
            </a>
            <a href="#" className="transition hover:scale-110">
              <FaInstagram />
            </a>
            <a href="#" className="transition hover:scale-110">
              <FaTwitter />
            </a>
            <a href="#" className="transition hover:scale-110">
              <FaLinkedinIn />
            </a>
          </div>

          {/* STORE BUTTONS */}
          <div className="flex gap-3">
            <Image
              src="/images/google-play.webp"
              alt="Google Play"
              width={140}
              height={40}
              className="w-auto h-auto"
            />
            <Image
              src="/images/app-store.webp"
              alt="App Store"
              width={140}
              height={40}
              className="w-auto h-auto"
            />
          </div>

        </div>

        {/* TEXT */}
        <div className="mt-3 text-xs text-right text-white/90">
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
        </div>

      </div>
    </footer>
  );
}
