"use client";

import Button from "../StyleElements/button";
import Link from "../StyleElements/link"

const OurClients = () => {
  return (
    <div className="grid">
      <div className="py-[6.67vw] sm:py-[4.67vw] md:py-[3.67vw] lg:py-[1.67vw] xl:py-[1.67vw] 2xl:py-[1.67vw] bg-white grid gap-[12.5vw] sm:gap-[10.5vw] md:gap-[5.5vw] lg:gap-[3.5vw] xl:gap-[3.5vw] 2xl:gap-[3.5vw] justify-items-center sm:justify-items-center md:justify-items-center">
        <div id="info-clients" className="grid gap-[8vw] sm:gap-[5vw] md:gap-[3vw] lg:gap-[2vw] xl:gap-[2vw] 2xl:gap-[2vw] text-center items-center">
          <h1 className="text-[clamp(32px,2.5vw,250px)] text-[#4D4D4D] font-semibold">Our Clients</h1>
          <p className="text-[clamp(16px,1.1vw,100px)] text-[#717171] font-normal">
            We have been working with some Fortune 500+ clients
          </p>
          <div className="grid lg:grid-cols-4 xl:grid-cols-7 2xl:grid-cols-7 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[2vw] sm:gap-[2vw] md:gap-[2vw] lg:gap-[9.1vw] justify-items-center my-[1.11vw]">
            <img src="/images/client1.png" className="w-[3vw] h-auto min-w-[48px] max-w-full object-contain"/>
            <img src="/images/client2.png" className="w-[3vw] h-auto min-w-[48px] max-w-full object-contain"/>
            <img src="/images/client3.png" className="w-[3vw] h-auto min-w-[48px] max-w-full object-contain"/>
            <img src="/images/client4.png" className="w-[3vw] h-auto min-w-[48px] max-w-full object-contain"/>
            <img src="/images/client5.png" className="w-[3vw] h-auto min-w-[48px] max-w-full object-contain"/>
            <img src="/images/client7.png" className="w-[3vw] h-auto min-w-[48px] max-w-full object-contain"/>
            <img src="/images/client6.png" className="w-[3vw] h-auto min-w-[48px] max-w-full object-contain"/>
          </div>
        </div>
        <div id="info-manage" className="my-[1.67vw] grid gap-[4vw] sm:gap-[2.85vw] md:gap-[2.85vw] lg:gap-[0.85vw] xl:gap-[0.85vw] 2xl:gap-[0.85vw] text-center justify-items-center sm:justify-items-center md:justify-items-center items-center">
          <h1 className="text-[clamp(32px,2.5vw,250px)] text-[#4D4D4D] font-semibold">
            Manage your entire community
            <br /> in a single
          </h1>
          <p className="text-[clamp(16px,1.1vw,150px)] text-[#717171] font-normal">
            Who is Nextcent suitable for?
          </p>
          <div className="lg:flex xl:flex 2xl:flex justify-center gap-[7.8vw] my-[1.4vw] grid sm:grid md:grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-center sm:justify-items-center md:justify-items-center">
            <div className="grid justify-items-center gap-[1.11vw] items-center bg-white shadow-[0_0px_5px_rgba(0,0,0,0.05)] py-[2.8vw] px-[1.67vw] rounded-lg">
              <img src="/images/manage-membership.png" className="w-[3.4vw] h-auto min-w-[48px] max-w-full object-contain"/>
              <h2 className="text-[clamp(28px,2.1vw,200px)] text-[#4D4D4D] font-semibold">
                Membership Organisations
              </h2>
              <p className="text-[clamp(16px,1.1vw,150px)] text-[#717171] font-normal">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
            <div className="grid justify-items-center gap-[1.11vw] items-center bg-white shadow-[0_0px_5px_rgba(0,0,0,0.05)] py-[2.8vw] px-[1.67vw] rounded-lg">
              <img src="/images/manage-national.png" className="w-[3.4vw] h-auto min-w-[48px] max-w-full object-contain"/>
              <h2 className="text-[clamp(28px,2.1vw,200px)] text-[#4D4D4D] font-semibold">
                National Associations
              </h2>
              <p className="text-[clamp(16px,1.1vw,150px)] text-[#717171] font-normal">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
            <div className="grid justify-items-center gap-[1.11vw] items-center shadow-[0_0px_5px_rgba(0,0,0,0.05)] py-[2.8vw] px-[1.67vw] rounded-lg">
              <img src="/images/manage-clubs.png" className="w-[3.4vw] h-auto min-w-[48px] max-w-full object-contain"/>
              <h2 className="text-[clamp(28px,2.1vw,200px)] text-[#4D4D4D] font-semibold">
                Clubs And Groups
              </h2>
              <p className="text-[clamp(16px,1.1vw,150px)] text-[#717171] font-normal">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
        </div>
        <div
          id="info-card-1"
          className="grid sm:grid md:grid lg:grid xl:flex 2xl:flex lg:justify-center xl:justify-center 2xl:justify-between 2xl:items-center justify-items-center sm:justify-items-center md:justify-items-center lg:items-center xl:items-center  py-[6.7vw]"
        >
          <img
            src="/images/info-illustration-1.png"
            className="w-[50vw] h-auto min-w-[220px] max-w-full object-contain"
          />
          <div className="grid justify-items-center sm:justify-items-center md:justify-items-center lg:justify-items-center xl:justify-items-start 2xl:justify-items-start gap-[8vw] sm:gap-[5vw] md:gap-[3vw] lg:gap-[2vw] xl:gap-[2vw] 2xl:gap-[2vw] items-center w-[60vw]">
            <h1 className="text-[clamp(32px,2.5vw,250px)] font-semibold text-[#4D4D4D] text-center sm:text-center md:text-center lg:text-center xl:text-start 2xl:text-start">
              The unseen of spending three years at Pixelgrade
            </h1>
            <p className="text-[clamp(16px,1.1vw,100px)] text-[#717171] text-center sm:text-center md:text-center lg:text-center xl:text-start 2xl:text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <Button type="button" label="Learn More" className="bg-[#4CAF4F] text-[clamp(18px,1.1vw,150px)] lg:py-[1.51vw] lg:px-[4vw] px-[10vw] py-[3vw] sm:px-[8vw] md:px-[6vw] xl:px-[1.67vw] 2xl:px-[1.67vw] sm:py-[3vw] md:py-[2vw] xl:py-[1vw] 2xl:py-[1vw] text-slate-50 rounded-sm"/>
          </div>
        </div>
      </div>
      <div
        id="info-heplingBusiness"
        className="gap-[10.85vw] sm:gap-[8.85vw] md:gap-0 lg:gap-0 xl:gap-0 2xl:gap-0 my-[6.7vw] grid sm:grid md:flex lg:flex xl:flex 2xl:flex items-center justify-items-center sm:justify-items-center md:justify-between lg:justify-between xl:justify-between 2xl:justify-between bg-transparent"
      >
        <div className="grid gap-[8vw] sm:gap-[5vw] md:gap-[3vw] lg:gap-[2vw] xl:gap-[2vw] 2xl:gap-[2vw]">
          <h1 className="text-[clamp(32px,2.5vw,250px)] font-semibold text-[#717171] text-center sm:text-center md:text-start xl:text-start 2xl:text-start">
            Helping a local{" "}
            <p className="text-[#4CAF4F]">business reinvent itself</p>
          </h1>
          <p className="text-[clamp(16px,1.1vw,150px)] font-normal text-[#18191F] text-center sm:text-center md:text-start lg:text-start xl:text-start 2xl:text-start">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="grid grid-cols-2 gap-[8.8vw] sm:gap-[5.8vw] md:gap-[5.8vw] lg:gap-[2.8vw] xl:gap-[2.8vw] 2xl:gap-[2.8vw]">
          <div className="flex gap-[0.85vw]">
            <img
              src="/images/info-members-icon.png"
              className="w-[3vw] h-auto min-w-[48px] max-w-full object-contain hidden sm:block md:block lg:block xl:block 2xl:block"
            />
            <div className="grid justify-items-start">
              <p className="text-[clamp(24px,2.1vw,200px)] font-bold text-[#4D4D4D]">2,245,341</p>
              <span className="text-[clamp(16px,1.1vw,150px)] font-normal text-[#717171]">
                Members
              </span>
            </div>
          </div>
          <div className="flex gap-[0.85vw]">
            <img
              src="/images/info-clubs-icon.png"
              className="w-[3vw] h-auto min-w-[48px] object-contain hidden sm:block md:block lg:block xl:block 2xl:block"
            />
            <div className="grid justify-items-start">
              <p className="text-[clamp(24px,2.1vw,200px)] font-bold text-[#4D4D4D]">46,328</p>
              <span className="text-[clamp(16px,1.1vw,150px)] font-normal text-[#717171]">Clubs</span>
            </div>
          </div>
          <div className="flex gap-[0.85vw]">
            <img
              src="/images/info-event-icon.png"
              className="w-[3vw] h-auto min-w-[48px] max-w-full object-contain hidden sm:block md:block lg:block xl:block 2xl:block"
            />
            <div className="grid justify-items-start">
              <p className="text-[clamp(24px,2.1vw,200px)] font-bold text-[#4D4D4D]">828,867</p>
              <span className="text-[clamp(16px,1.1vw,150px)] font-normal text-[#717171]">
                Event Bookings
              </span>
            </div>
          </div>
          <div className="flex gap-[0.85vw]">
            <img
              src="/images/info-payments-icon.png"
              className="w-[3vw] h-auto min-w-[48px] max-w-full object-contain hidden sm:block md:block lg:block xl:block 2xl:block"
            />
            <div className="grid justify-items-start">
              <p className="text-[clamp(24px,2.1vw,200px)] font-bold text-[#4D4D4D]">1,926,436</p>
              <span className="text-[clamp(16px,1.1vw,150px)] font-normal text-[#717171]">
                Payments
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="info-card-2" className="bg-white ">
        <div
          id="info-card"
          className="grid sm:grid md:grid lg:grid xl:flex 2xl:flex lg:justify-center xl:justify-center 2xl:justify-between 2xl:items-center justify-items-center sm:justify-items-center md:justify-items-center lg:items-center xl:items-center  py-[6.7vw]"
        >
          <img
            src="/images/info-illustration-2.png"
            className="w-[50vw] h-auto min-w-[220px] max-w-full object-contain"
          />
          <div className="grid justify-items-center sm:justify-items-center md:justify-items-center lg:justify-items-center xl:justify-items-start 2xl:justify-items-start gap-[8vw] sm:gap-[5vw] md:gap-[3vw] lg:gap-[2vw] xl:gap-[2vw] 2xl:gap-[2vw] items-center w-[60vw]">
            <h1 className="text-[clamp(32px,2.5vw,250px)] font-semibold text-[#4D4D4D] text-center sm:text-center md:text-center lg:text-start xl:text-start 2xl:text-start">
              How to design your site footer like we did
            </h1>
            <p className="text-[clamp(16px,1.1vw,150px)] text-[#717171] text-center sm:text-center md:text-center lg:text-center xl:text-start 2xl:text-start">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <Button type="button" label="Learn More" className="bg-[#4CAF4F] text-[clamp(18px,1.1vw,250px)] lg:py-[1.51vw] lg:px-[4vw] px-[10vw] py-[3vw] sm:px-[8vw] md:px-[6vw] xl:px-[1.67vw] 2xl:px-[1.67vw] sm:py-[3vw] md:py-[2vw] xl:py-[1vw] 2xl:py-[1vw] text-slate-50 rounded-sm"/>
          </div>
        </div>
      </div>
      <div id="info-tesla" className="grid sm:grid md:grid lg:flex xl:flex 2xl:flex lg:justify-center xl:justify-center 2xl:justify-between 2xl:items-center justify-items-center sm:justify-items-center md:justify-items-center lg:items-center xl:items-center gap-[8vw] sm:gap-[5vw] md:gap-[3vw] lg:gap-[2vw] xl:gap-[2vw] 2xl:gap-[2vw] py-[6.7vw]">
        <img src="/images/info-tesla.png" className="w-[145vw] h-auto  max-w-full object-contain"/>
        <div className="grid justify-items-center sm:justify-items-center md:justify-items-center lg:justify-items-start xl:justify-items-start 2xl:justify-items-start items-center 2xl:gap-[1vw] xl:gap-0 lg:gap-0 md:gap-0 sm:gap-0 gap-0 2xl:mb-[1.5vw] xl:mb-0 lg:mb-0 md:mb-0 sm:md-0 mb-0">
          <p className="text-[clamp(14px,1.1vw,150px)] font-medium text-center sm:text-center md:text-center lg:text-start xl:text-start 2xl:text-start text-[#717171]">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <div className="grid sm:grid md:grid lg:grid xl:grid 2xl:grid gap-[2vw] 2xl:justify-items-start xl:justify-items-start lg:justify-items-start md:justify-items-center sm:justify-items-center justify-items-center">
          <div className="grid justify-items-center text-center sm:text-center md:text-center lg:text-start xl:text-start 2xl:text-start sm:justify-items-center md:justify-items-center lg:justify-items-start xl:justify-items-start 2xl:justify-items-start gap-[1.5vw] mt-[1.5vw] sm:gap-0 md:gap-0 lg:gap-0 xl:gap-0 2xl:gap-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0">
            <span className="text-[#4CAF4F] text-[clamp(24px,2.5vw,200px)] font-semibold">Tim Smith</span>
            <span className="text-[clamp(16px,1.1vw,150px)] text-[#89939E]">
              British Dragon Boat Racing Association
            </span>
          </div>
          <div className="grid sm:grid md:flex lg:flex xl:flex 2xl:flex justify-items-center sm:justify-items-center md:gap-[1.3vw] lg:gap-[5vw] xl:gap-[7vw]">
          <div className="flex gap-[2vw] justify-between items-center">
            <img src="/images/client1-color.png" className="w-[3vw] h-auto min-w-[30px] max-w-full object-contain"/>
            <img src="/images/client2-color.png"  className="w-[3vw] h-auto min-w-[30px] max-w-full object-contain"/>
            <img src="/images/client3-color.png"  className="w-[3vw] h-auto min-w-[30px] max-w-full object-contain"/>
            <img src="/images/client4-color.png" className="w-[3vw] h-auto min-w-[30px] max-w-full object-contain"/>
            <img src="/images/client5-color.png" className="w-[3vw] h-auto min-w-[30px] max-w-full object-contain"/>
            <img src="/images/client6-color.png" className="w-[3vw] h-auto min-w-[30px] max-w-full object-contain"/>
          </div>
            <div className="flex gap-2 items-center ml-[5vw] sm:ml-[5vw] mt-[5vw] sm:mt-[5vw] md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0 md:ml-[5vw] lg:ml-0 xl:ml-0 2xl:ml-0">
              <Link label="Meet all customers" className="text-[clamp(18px,1.4vw,150px)] text-[#4CAF4F] font-semibold"/>
              <img src="/images/arrow-right.png" className="w-[1.7vw] h-auto min-w-[24px] max-w-full object-contain"/>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
