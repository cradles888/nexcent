"use client";
import Form from "../form/index";
import News1280px from "./News1280px/news1280px";
import News320px from "./News320px/news320px";

const News = () => {
  return (
    <div className="">
      <div id="news" className="bg-white py-12">
        <div className="grid bg-white  text-center gap-[8vw] sm:gap-[5vw] md:gap-[3vw] lg:gap-[2vw] xl:gap-[2vw] 2xl:gap-[2vw]">
          <h1 className="text-[clamp(32px,2.5vw,200px)] font-semibold text-[#4D4D4D]">
            Caring is the new marketing
          </h1>
          <p className="text-[clamp(16px,1.1vw,100px)] text-[#717171]">
            The Nexcent blog is the best place to read about the latest
            membership insights,
            <br /> trends and more. See who's joining the community, read about
            how our community
            <br /> are increasing their membership income and lot's more.​
          </p>
          <div className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:block">
            <News1280px />
          </div>
          <div className="block sm:block md:block lg:block xl:hidden 2xl:hidden">
            <News320px />
          </div>
        </div>
      </div>
      <div
        id="news-info"
        className=" my-[6.7vw] grid justify-items-center gap-[8vw] sm:gap-[5vw] md:gap-[3vw] lg:gap-[2vw] xl:gap-[2vw] 2xl:gap-[2vw] "
      >
        <h1 className="text-[clamp(40px,4.45vw,400px)] font-semibold text-center text-[#263238]">
          Pellentesque suscipit
          <br />
          fringilla libero eu.
        </h1>
        <div className="flex items-center gap-[0.2vw]">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default News;
