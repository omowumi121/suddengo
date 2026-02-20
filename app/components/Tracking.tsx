"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Tracking() {
  const features = [
    {
      title: "Access Quick Micro-Loans Instantly",
      desc: "Unlock flexible micro-loans based on your app activity and referrals. Build your score as you order, earn badges, and climb the leaderboard.",
      image: "/images/preview1.png",
    },
    {
      title: "Earn Badges & Climb the Leaderboard",
      desc: "Get rewarded for every order you make. Unlock badges, track your progress, and compete with friends.",
      image: "/images/preview2.png",
    },
    {
      title: "Track Your Orders in Real Time",
      desc: "Know exactly where your rider is at every moment. From pickup to drop-off, SuddenGo gives live updates.",
      image: "/images/preview3.png",
    },
    {
      title: "Refer Friends & Earn Rewards",
      desc: "Share your referral code and earn instant bonuses when friends sign up and place their first order.",
      image: "/images/preview4.png",
    },
  ];

  return (
    <section className="px-2 py-4 text-white bg-[#0d0d1a]">

      
      <div className="max-w-6xl pt-8 mx-auto">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          
          <h2 className="text-xl font-bold leading-tight sm:text-3xl md:text-sm md:max-w-xl">
            Explore Powerful Features <br />
            Built for Your Daily Convenience
          </h2>

          
          <p className="text-sm text-white/70 sm:text-base md:text-right md:max-w-xl">
            SuddenGo is more than delivery — it’s a complete lifestyle and financial
            super-app. Enjoy real-time tracking, secure payments, referral rewards,
            and access to in-app micro-loans designed for everyday convenience.
          </p>

        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-3">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          loop
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 1.1 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-20"
        >
          {features.map((feat, i) => (
            <SwiperSlide key={i} className="w-[280px]">

              <div className="w-full p-6 shadow-sm bg-gradient-to-b from-red-600 to-orange-500 rounded-3xl">

                <h3 className="px-4 pt-10 text-lg font-bold leading-tight text-center sm:text-xl">
                  {feat.title}
                </h3>

                <p className="mt-2 text-sm text-center text-white/90">
                  {feat.desc}
                </p>

                <div className="relative w-full mt-30 aspect-[1.15/1]">
                  <Image
                    src={feat.image}
                    alt={feat.title}
                    fill
                    className="object-contain"
                  />
                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}
