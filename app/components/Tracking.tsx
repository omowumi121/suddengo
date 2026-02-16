import Image from "next/image";

export default function Tracking() {
  return (
    <section className="px-4 py-16 bg-red-900">
      <div className="max-w-6xl px-4 mx-auto mb-20">
  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
    
    
    <h2 className="text-2xl font-bold text-white dark:not-last:text-gray-800">
      Explore Powerful Features Built for Your Daily Convenience
    </h2>

    <p className="max-w-xl text-sm leading-relaxed text-white md:text-base md:text-right">
      SuddenGo is more than delivery — it's a complete lifestyle and financial
      super-app. Enjoy real-time tracking, secure payments, referral rewards,
      and access to in-app micro-loans designed for everyday convenience.
    </p>

  </div>
</div>


        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="overflow-hidden bg-blue-200 rounded-2xl">
            <Image
              src="/images/preview1.png"
              alt="Tracking 1"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="overflow-hidden bg-red-200 rounded-2xl">
            <Image
              src="/images/preview2.png"
              alt="Tracking 2"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="overflow-hidden bg-green-200 rounded-2xl">
            <Image
              src="/images/preview3.png"
              alt="Tracking 3"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="overflow-hidden bg-yellow-200 rounded-2xl">
            <Image
              src="/images/preview4.png"
              alt="Tracking 4"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
    </section>
  );
}
