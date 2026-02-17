"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from "swiper/modules";


import "swiper/css";
import features1 from "@/public/images/features1.png";
import features2 from "@/public/images/features2.png";
import features3 from "@/public/images/features3.png";
import features4 from "@/public/images/features4.png";
import { title } from "process";


const features = [
    {
        id: "01",
        title: "Micro-Loans & Financial Access",
        text: "Unlock quick, flexible micro-loans directly inside the app",
        image: features1,
    },
    {
        id: "02",
        title: "Trusted Riders, Safe Service",
        text: "verified riders ensure every delivery is secure and reliable.",
        image: features2
    },
    {
        id: "03",
        title: "Affordable & Transparent Pricing",
        text: "No hidden charges. what you see is what you pay.",
        image: features3
    },
    {
       id: "04",
       title: "Fast Delivery You Can Rely On",
       text: "Get your essentials delivered in minutes - stress free.",
       image: features4, 
    }
]



export default function Features() {
      return(
        <section className="px-4 py-20 dark:bg-amber-700 ">
          
          <div className="max-w-6xl mx-auto space-y-4 text-left">
            <h2 className="text-3xl font-bold md:text-4xl text-amber-700 dark:text-white">
               Why People Love
            </h2>

            <p className="text-4xl font-bold md:text-4xl text-amber-700 dark:text-white">
                Using SuddenGo
            </p>
          </div>

          <Swiper
  modules={[Autoplay]}
  spaceBetween={20}
  slidesPerView={1.1}
  loop 
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
  className="mt-12"
>
  {features.map((feature) => (
    <SwiperSlide
      key={feature.id}
      className="w-75 md:w-130"
    >
      <div className="grid grid-cols-1 overflow-hidden bg-white shadow-lg md:grid-cols-2 rounded-3xl">
        
        
        <div className="relative flex flex-col justify-center p-8 text-white bg-amber-600">
          <div className="absolute flex items-center justify-center w-10 h-10 text-sm font-semibold border border-white rounded-full top-4 left-4">
            {feature.id}
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-bold">
              {feature.title}
            </h3>

            <p className="mt-3 text-sm text-white/80">
              {feature.text}
            </p>
          </div>
        </div>

        
        <div className="h-[350px] overflow-hidden rounded-2xl">
          <Image
            src={feature.image}
            alt={feature.title}
            className="object-cover w-full h-full"
          />
        </div>

      </div>
    </SwiperSlide>
  ))}
</Swiper>


        </section>

    );
}


