import Image from "next/image";
import appStore from "@/public/images/app-Store.png";
import iphone from "@/public/images/iphone.png"



export default function Hero() {
  return (
    <section
    style={{ backgroundImage: `url('/images/hero.png')` }}
  className="bg-cover bg-center min-h-screen">
     
     <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
      
      <div className="flex flex-col items-center text-center px-8 pt-32 gap-4 text-white">
        <h1 className="text-4xl  font-bold leading-tight">
            Your Delivery & financial Lifestyle App - All In One Place
        </h1>

        <p className="text-1xl text-white/80">
        Get fast deliveries,send packages, pay with your wallet,earn referral rewards, and unlock micro-loans when you need them.
        </p>

       <div className="flex gap-4 flex-wrap">

            <a href="#">
            <Image
            src={appStore}
            alt="Downlod on Google play"
            className="h-40 w-auto border "/>

        </a>
        </div> 
</div>


        <div className="flex justify-center">
            <Image src={iphone}
            alt="SuddenGo App"
            className="w-40 md:w-96 p-3 mt-20 drop-shadow-2xl"
        />

        </div>


     </div>
    </section>

  );
}
