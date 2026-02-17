"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Tracking() {
  const previews = [
    "/images/preview1.png",
    "/images/preview2.png",
    "/images/preview3.png",
    "/images/preview4.png",
  ];

  return (
    <section className="px-4 py-16 bg-red-900">
      
      
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          
          <h2 className="text-2xl font-bold text-white">
            Explore Powerful Features Built for Your Daily Convenience
          </h2>

          <p className="max-w-xl text-sm leading-relaxed text-white md:text-base md:text-right">
            SuddenGo is more than delivery — it's a complete lifestyle and financial
            super-app. Enjoy real-time tracking, secure payments, referral rewards,
            and access to in-app micro-loans designed for everyday convenience.
          </p>

        </div>
      </div>

    
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          loop={true}
          speed={900}
          autoplay={{
            delay: 2500, 
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {previews.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative overflow-hidden shadow-lg rounded-2xl h-[350px]">
                  <Image
                  src={src}
                  alt={`Preview ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}
