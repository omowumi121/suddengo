"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Tracking() {
  const features = [
    {
      title: "Refer Friends & Earn Rewards",
      desc: "Share your unique referral code and get instant bonuses when your friends sign up and place their first order.",
      image: "/images/preview1.png",
    },
    {
      title: "Track Your Orders in Real Time",
      desc: "Know exactly where your order is at every moment. SuddenGo gives you live delivery updates.",
      image: "/images/preview2.png",
    },
    {
      title: "Access Quick Micro-Loans Instantly",
      desc: "Unlock flexible micro-loans based on your activity and referrals. Build your score and climb the leaderboard.",
      image: "/images/preview3.png",
    },
    {
      title: "Secure Wallet & Payments",
      desc: "Pay seamlessly inside the app. Fast, secure, and designed for stress-free transactions.",
      image: "/images/preview4.png",
    },
  ];

  return (
    <section className="px-4 py-20 bg-[#0d0d1a] text-white">
      
      
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
          Explore Powerful Features Built for Your Daily Convenience
        </h2>
        <p className="mt-3 text-sm sm:text-base text-white/75">
          SuddenGo is more than delivery — it’s a complete lifestyle and financial
          super-app. Enjoy real-time tracking, secure payments, referral rewards,
          and access to in-app micro-loans designed for everyday convenience.
        </p>
      </div>

      
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1.05}
          loop
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            480: { slidesPerView: 1.2 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.1 },
            1024: { slidesPerView: 3 },
          }}
        >
          {features.map((feat, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col h-full p-6 shadow-xl bg-gradient-to-b from-red-600 to-orange-500 rounded-3xl">
                
                <h3 className="text-base font-bold text-white sm:text-lg">
                  {feat.title}
                </h3>
                
                <p className="mt-2 text-xs sm:text-sm text-white/90">
                  {feat.desc}
                </p>

                <div className="relative w-full h-[200px] sm:h-[240px] mt-4">
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
