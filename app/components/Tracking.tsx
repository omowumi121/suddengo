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
      desc: "Unlock flexible micro-loans based on your app activity and referrals. build your score as you order, earn badges, and climb the leaderboard",
      image: "/images/preview1.png",
    },
    {
      title: "Earn Badges & Climb the Leaderboard",
      desc: "Get rewarded for every order you make. Unlock badges, track your progress and compete with friends as you enjoy fast, reliable deliveries.",
      image: "/images/preview2.png",
    },
    {
      title: "Track Your Orders in Real Time",
      desc: "Know exactly where your rider is at every moment. from pickup to drop-off, SuddenGo gives you live delivery updates so you stay informed.",
      image: "/images/preview3.png",
    },
    {
      title: "Refers Friends & Earn Rewards",
      desc: "Share your unique referral code and get instant bonuses when your friends sign up and place their first order. More invites= more rewards.",
      image: "/images/preview4.png",
    },
  ];

  return (
    <section className="px-4 py-20 text-white bg-[#0d0d1a]">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="pt-12 pb-30 mr-30 text-2xl font-stretch-50% sm:text-3xl md:text-sm">
          Explore Powerful Features Built for Your <br /> <span className="mr-35"> Daily Convenience</span>
        </h2>
        <p className="text-sm mb-30 md:text-xs ml-50 text-white/70 sm:text-base">
          SuddenGo is more than delivery — it’s a complete lifestyle <br /> and  financial super-app.Enjoy real-time tracking, secure <br /> payments, referral rewards nd access to in-app micro- <br />loans designed for everyday Convenience.
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="max-w-6xl mx-auto mt-3">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          loop
          autoplay={{ delay: 2000 }}
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
            <SwiperSlide key={i} className="w-[280pxs]">
  <div className="w-full max-w-sm mx-auto overflow-hidden shadow-sm rounded-2xl bg-gradient-to-b from-red-600 to-orange-500">

    <h3 className="px-4 pt-10 text-3xl font-bold leading-tight text-center">
      {feat.title}
    </h3>

    <p className="px-4 pt-4 mt-2 text-lg text-center text-white/90">
      {feat.desc}
    </p>

    <div className="relative w-full mt-30 aspect-[1.15/1] pt-8">
      <Image
        src={feat.image}
        alt={feat.title}
        fill
        className="w-full"
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
