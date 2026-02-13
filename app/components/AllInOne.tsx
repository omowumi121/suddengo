import Image from "next/image";
import download from '@/public/images/download.png'
import allinone from '@/public/images/allinone.png'

export default function AllInOne() {

    return(
        <section className="relative z-10 -mt-32 md:-mt-48 lg:-mt-36 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-4xl mx-auto p-4">
                <div className="bg-amber-100 rounded-2xl md:rounded-2xll p-6 md:p-10 relative overflow-hidden flex flex-col lg:flex-row item-center justify-between gap-16 border border-[#440906] leading-[1.1] mb-2 ">
                  <div className="lg:w-1/2" >
                  <h2 className="text-xl md:text-3xl font-black  text-[#440906] leading-[1.1] mb-6">
                  Deliveries, Groceries, Wallet & Loans - All in One App
                  </h2>

                  <p className="text-sm text-[#440906] opacity-90 leading-relaxed mb-10 max-w-xl">
                    SuddenGo connects you to meals, essentials, courier services, digital payments, referral rewards, and micro-loans — all in one powerful super-app.
                   </p>

                <div className="flex gap-2 flex-wrap">

                   <a href="#">
                   <Image
                       src={download}
                       alt="Downlod on Google play"
                       className="h-40 w-auto border "/>

                  </a>
                </div> 

                <div className="mt-auto">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-10 bg-[#fe5722] rounded-2xl flex items-center justify-center text-white font-black italic shadow-lg shadow-[#fe5722]/20">S</div>
                     <span className="text-3xl font-black text-[#fe5722] tracking-tighter">SuddenGo</span>
                    </div>
                    </div>
                    </div>


                    <div className="lg:w-2/5 relative">
                    <div className="relate z-10 transform lg:scale-110 lg:translate-y-8 translate-y-6 max-w-112.5">
                        <Image src={allinone} alt="woman using SuddenGo App"  className="w-full h-auto object-contain"/>
                    </div>

                    </div>
                </div>

            </div>


        </section>


    );
}