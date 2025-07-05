"use client";
import Form from "./form/index"

const News = () => {
  return (
    <div className="">
      <div id="news" className="bg-white py-12">
      <div className="grid text-center gap-[8vw] sm:gap-[5vw] md:gap-[3vw] lg:gap-[2vw] xl:gap-[2vw] 2xl:gap-[2vw]">
        <h1 className="text-[clamp(32px,2.5vw,65px)] font-semibold text-[#4D4D4D]">
          Caring is the new marketing
        </h1>
        <p className="text-[clamp(16px,1.1vw,50px)] text-[#717171]">
          The Nexcent blog is the best place to read about the latest membership
          insights,
          <br /> trends and more. See who's joining the community, read about
          how our community
          <br /> are increasing their membership income and lot's more.​
        </p>
        <div className="hidden sm:hidden md:hidden lg:hidden xl:flex 2xl:flex justify-between">
          <div className="grid justify-items-center shadow-[0_0px_5px_rgba(0,0,0,0.05)]">
            <img
              src="/images/news-card-img.png"
              className="w-[33vw] max-w-[16vw]"
            />
            <div className="absolute mt-[8vw] w-[clamp(29cqmin,6vw,30cqmin)]  rounded-lg bg-[#F5F7FA] grid gap-3 justify-items-center shadow-[0_0px_5px_rgba(0,0,0,0.05)]">
              <h1 className="text-center text-[clamp(16px,1.1vw,50px)] font-semibold">
                Creating Streamlined Safeguarding Processes with OneRen
              </h1>
              <div className="flex gap-2 items-center">
                <a
                  href="#"
                  className="text-[clamp(18px,1.1vw,50px)] text-[#4CAF4F] font-semibold"
                >
                  Read more
                </a>
                <img src="/images/arrow-right.png" className="w-[2vw]" />
              </div>
            </div>
          </div>
                    <div className="grid justify-items-center shadow-[0_0px_5px_rgba(0,0,0,0.05)]">
            <img
              src="/images/news-card-img.png"
              className="w-[33vw] max-w-[16vw]"
            />
            <div className="absolute mt-[8vw] w-[clamp(29cqmin,6vw,30cqmin)]  rounded-lg bg-[#F5F7FA] grid gap-3 justify-items-center shadow-[0_0px_5px_rgba(0,0,0,0.05)]">
              <h1 className="text-center text-[clamp(16px,1.1vw,50px)] font-semibold">
                Creating Streamlined Safeguarding Processes with OneRen
              </h1>
              <div className="flex gap-2 items-center">
                <a
                  href="#"
                  className="text-[clamp(16px,1.1vw,50px)] text-[#4CAF4F] font-semibold"
                >
                  Read more
                </a>
                <img src="/images/arrow-right.png" className="w-[2vw]" />
              </div>
            </div>
          </div>
                    <div className="grid justify-items-center shadow-[0_0px_5px_rgba(0,0,0,0.05)]">
            <img
              src="/images/news-card-img.png"
              className="w-[33vw] max-w-[16vw]"
            />
            <div className="absolute mt-[8vw] w-[clamp(29cqmin,6vw,30cqmin)]  rounded-lg bg-[#F5F7FA] grid gap-3 justify-items-center shadow-[0_0px_5px_rgba(0,0,0,0.05)]">
              <h1 className="text-center text-[clamp(16px,1.1vw,50px)] font-semibold">
                Creating Streamlined Safeguarding Processes with OneRen
              </h1>
              <div className="flex gap-2 items-center">
                <a
                  href="#"
                  className="text-[clamp(16px,1.1vw,50px)] text-[#4CAF4F] font-semibold"
                >
                  Read more
                </a>
                <img src="/images/arrow-right.png" className="w-[2vw]" />
              </div>
            </div>
          </div>
        </div>
          <div className="grid sm:grid md:grid lg:grid xl:hidden 2xl:hidden gap-[1vw]">
            <div className="gap-[2vw] sm:gap-0 md:gap-0 lg:gap-0 xl:gap-0 2xl:gap-0 bg-gray-50 border-solid items-center border-2 border-gray-400 justify-items-center grid sm:flex md:flex lg:flex xl:flex 2xl:flex  justify-between px-[3vw] sm:py-[2vw] md:py-[2vw] lg:py-[2vw] xl:py-[2vw] 2xl:py-[2vw] py-[4vw]">
              <h1 className="text-[#4D4D4D] text-[clamp(20px,1.1vw,50px)] font-semibold text-center sm:text-start md:text-start lg:text-start xl:text-start 2xl:text-start w-auto sm:w-[60cqmin] md:w-[50cqmin] lg:w-[45cqmin] xl:w-[50cqmin] 2xl:w-[50cqmin]">
                Creating Streamlined Safeguarding Processes with OneRen
              </h1>
              <div className="flex gap-2 items-center">
                <a
                  href="#"
                  className="text-[clamp(16px,1.1vw,50px)] text-[#4CAF4F] font-semibold"
                >
                  Read more
                </a>
                <img src="/images/arrow-right.png" className="w-[2vw]" />
              </div>
            </div>
          </div>
      </div>
      </div>
      <div id="news-info" className=" my-[6.7vw] grid justify-items-center gap-[8vw] sm:gap-[5vw] md:gap-[3vw] lg:gap-[2vw] xl:gap-[2vw] 2xl:gap-[2vw] ">
        <h1 className="text-[clamp(64px,4.45vw,300px)] font-semibold text-center text-[#263238]">Pellentesque suscipit<br/>fringilla libero eu.</h1>
        <div className="flex items-center gap-[0.2vw]">
          <Form/>
        </div>
      </div>
    </div>
  );
};

export default News;
