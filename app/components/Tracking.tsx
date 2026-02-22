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
    <section className="py-16 pb-0 text-white bg-gradient-to-b from-[#5b0f0f] to-[#2a0707]">

      {/* Top Text Section */}
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

          <h2 className="text-2xl font-bold leading-snug md:text-4xl md:max-w-lg">
            Explore Powerful Features <br />
            Built for Your Daily Convenience
          </h2>

          <p className="text-base text-white/80 md:text-right md:max-w-lg">
            SuddenGo is more than delivery — it’s a complete lifestyle and financial super-app.
            Enjoy real-time tracking, secure payments, referral rewards, and access to in-app
            micro-loans designed for everyday convenience.
          </p>

        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl px-4 mx-auto mt-16">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          loop
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14"
        >
          {features.map((feat, i) => (
            <SwiperSlide key={i}>

              <div className="relative flex flex-col items-center h-[720px] mt-5  px-6 pt-10 text-center border shadow-xl bg-gradient-to-b from-red-600 to-red-700 rounded-3xl border-7 border-black">

                <h3 className="text-xl font-bold leading-tight">
                  {feat.title}
                </h3>

                <p className="mt-4 text-sm text-white/90">
                  {feat.desc}
                </p>

                {/* Phone Image */}
                <div className="relative w-[560px] h-[420px] mt-auto">
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