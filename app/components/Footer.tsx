import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-4 px-4 bg-amber-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8">

     <div className="flex gap-1 text-2xl">
          <a
            href="Tiktok"
            className="transition transform hover:scale-110 hover:text-pink-500"
            title="Tiktok"
          >
            <SiTiktok />
          </a>
          <a
            href="Instagram"
            className="transition transform hover:scale-110 hover:text-purple-500"
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="Twitter"
            className="transition transform hover:scale-110 hover:text-blue-500"
            title="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="Linkedin"
            className="transition transform hover:scale-110 hover:text-blue-700"
            title="Linkedin"
          >
            <FaLinkedinIn />
          </a>
        </div>

        <div className="text-sm md:text-right">
            <div className="flex flex-col items-end gap-4">
        <div className="w-32">
         <Image
             src="/images/footer.png"
             alt="SuddenGo Logo"
             width={200}
            height={120}
            className="h-auto w-full"
              />
          </div>
            </div>
            <p className="text-sm">
            Email: <a href="mailto:Info@suddengo.com">Info@suddengo.com</a><br/>
            Contact: <a href="tel:+2347087960006">+234 708 796 0006</a>
          </p>
          © All Rights Reserved. 2025, SuddenGo
        </div>

      </div>
    </footer>
  );
}
