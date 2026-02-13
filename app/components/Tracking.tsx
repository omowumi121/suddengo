import Image from "next/image";

export default function Tracking() {
  return (
    <section className="py-16 px-4 bg-amber-900">
      <div className="max-w-6xl mx-auto px-4 mb-20">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
    
    
    <h2 className="text-2xl font-bold text-white dark:not-last:text-gray-800">
      Explore Powerful Features Built for Your Daily Convenience
    </h2>

    <p className="text-sm md:text-base text-white md:text-right max-w-xl leading-relaxed">
      SuddenGo is more than delivery — it's a complete lifestyle and financial
      super-app. Enjoy real-time tracking, secure payments, referral rewards,
      and access to in-app micro-loans designed for everyday convenience.
    </p>

  </div>
</div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-2xl overflow-hidden bg-blue-200">
            <Image
              src="/images/preview1.png"
              alt="Tracking 1"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-2xl overflow-hidden bg-red-200">
            <Image
              src="/images/preview2.png"
              alt="Tracking 2"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-2xl overflow-hidden bg-green-200">
            <Image
              src="/images/preview3.png"
              alt="Tracking 3"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-2xl overflow-hidden bg-yellow-200">
            <Image
              src="/images/preview4.png"
              alt="Tracking 4"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
    </section>
  );
}
