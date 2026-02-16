import Image from "next/image";

export default function Feedback() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-8">

        
          <div className="relative rounded-3xl overflow-hidden h-105 md:h-130">

            <Image
              src="/images/feedback1.jpg"
              alt="smiling client"
              width={600}
              height={700}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">

              <h2 className="text-white text-4xl md:text-3xl font-bold mb-70">
                Food, Groceries & Essentials Delivered the Easy Way.
              </h2>

             <div className="w-28">
                <Image
                  src="/images/google-play.png"
                  alt="Google Play"
                  width={200}
                  height={200}
                  className="h-auto"
                />
              </div>

            </div>
          </div>

          <div className="rounded-3xl overflow-hidden bg-slate-100">
            <Image
              src="/images/feedback2.jpg"
              alt="App Preview"
              width={600}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
