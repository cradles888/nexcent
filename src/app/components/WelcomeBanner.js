"use client";

import Button from "./StyleElements/button";

const WelcomeBanner = () => {
  return (
    <div id="welcomeBanner" className="grid gap-[4.45vw] mt-[6.7vw] pb-[1.67vw] content-between sm:justify-items-center md:justify-items-center lg:justify-items-center justify-items-center">
      <div className="grid sm:grid md:grid lg:grid xl:flex 2xl:flex justify-between sm:justify-items-center md:justify-items-center lg:justify-items-center justify-items-center gap-[8vw] sm:gap-[8vw] md:gap-[5vw] lg:gap-[4vw] xl:gap-[3vw] 2xl:gap-[2vw] items-center">
        <div className="grid content-center xl:justify-items-start 2xl:justify-items-start sm:justify-items-center md:justify-items-center lg:justify-items-center justify-items-center gap-[5vw] sm:gap-[3vw] md:gap-[3vw] lg:gap-[2vw] xl:gap-[1vw] 2xl:gap-[1vw]">
            <h1 className="text-center sm:text-center md:text-cemter lg:text-center xl:text-start 2xl:text-start text-[clamp(28px,4.5vw,400px)] font-semibold text-[#717171]">Lessons and insights <p className="text-[#4CAF4F]">from 8 years</p></h1>
            <p className="text-center sm:text-center md:text-cemter lg:text-center xl:test-start 2xl:text-start text-[#717171] text-[clamp(16px,1.1vw,200px)]">Where to grow your business as a photographer. site or social media?</p>
            <Button label="Register" className="my-[0.8vw] bg-[#4CAF4F] text-[clamp(16px,1.1vw,200px)] lg:py-[1.51vw] lg:px-[4vw] px-[10vw] py-[3vw] sm:px-[8vw] md:px-[6vw] xl:px-[1.67vw] 2xl:px-[1.67vw] sm:py-[3vw] md:py-[2vw] xl:py-[1vw] 2xl:py-[1vw] text-slate-50 rounded-sm"/>
            
        </div>
        <img src="/images/welcome.png" alt="welcome-banner-illustration" className="w-[20vw] h-auto min-w-[50cqmin] max-w-full object-contain" />
      </div>
      <div className="flex py-[3vw] sm:py-[3vw] md:py-[3vw] lg:py-[1vw] xl:py-0 2xl:py-0 justify-center ml-0 sm:ml-0 md:ml-0 lg:ml-[6vw] xl:ml-[6vw] 2xl:ml-0">
        <img src="/images/welcome-banner-dots.png" className="w-[3vw] h-auto min-w-[46px] max-w-full object-contain"/>
      </div>
    </div>
  );
};

export default WelcomeBanner;
