"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from "swiper/modules";



const features = [
    {
        title:"Micro-Loans & Financial Access",
        text: "Unlock quick,flexible micro-loans through SuddenGo's in-app loan system.",
        image: "/images/features1.png"
    },
     {
        title:"Trusted Riders, Safe Service",
        text: "Every delivery is handled by verifield riders for your safety and peace of mind.",
        image: "/images/features2.png"
    },
     {
        title:"Affordable & Transparent Pricing",
        text: "Enjoy fair delivery fees with no hidden charges. what you see is what you pay.",
        image: "/images/features3.png"
    },
     {
        title:"Fast Delivery You Can Rely On",
        text: "Get your food and essentials delivered in minutes- no delays, no stress.",
        image: "/images/features4.png"
    },

];


export default function Features() {
    
    return(
        <section className="py-20 px-4 bg-amber-100 dark:bg-amber-700">
          
          <div className="max-w-6xl mx-auto text-left space-y-4">
            <h2 className="text-4xl md:text-4xl font-bold text-amber-700 dark:text-white">
               Why People Love
            </h2>

            <p className=" text-4xl md:text-4xl font-bold text-amber-700 dark:text-white">
                Using SuddenGo
            </p>
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
             breakpoints={{
                640: {slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
             }}
             className="max-w-6xl mx-auto mt-12"
             >
                {features.map((feature,i) => (
                    <SwiperSlide key={i}>
                         <FeatureCard {...feature} />
                    </SwiperSlide>
                ))}

          </Swiper>
        </section>

    );
}

function FeatureCard({title, text, image}: {title:string; text:string; image:string}){
    return (
        <div className="p-4 rounded-2xl bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition">
          
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-left">
            {title}
          </h3>

          <p className="">
            {text}
          </p>

          <div className="mb-4 flex justify-center">
            <Image
                src={image}
                alt={title}
                width={200}
                height={200}/>

          </div>
        </div>
    )
}