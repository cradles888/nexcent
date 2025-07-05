"use client"

const Footer = () => {  

    
    return(
        <div id="footer-container" className="bg-[#263238] gap-y-[10vw] sm:gap-y-[5vw] md:gap-y-[5vw] lg:gap-y-0 xl:gap-y-0 2xl:gap-y-0 py-[9vw] sm:py-[7vw] md:py-[6vw] lg:py-[5vw] xl:py-[5vw] 2xl:py-[5vw] md:grid sm:grid grid lg:flex xl:flex 2xl:flex grid-cols-1 sm:grid-cols-2  justify-items-center justify-between items-start">
            <div className="grid gap-[3vw] justify-items-center sm:justify-items-center md:justify-items-start lg:justify-items-start xl:justify-items-start 2xl:justify-items-start">
                <img src="/images/full-logo-dark.png" className="w-[10vw] h-auto min-w-[191px] max-w-full object-contain"/>
                <p className="text-[clamp(16px,1.1vw,100px)] text-[#F5F7FA] text-center sm:text-start md:text-start lg:text-start xl:text-start 2xl:text-start">Copyright &copy; Nexcent ltd.<br/>All rights reserved</p>
                <div className="flex gap-[1.2vw] mt-[1vw] justify-center sm:justify-start md:justify-start lg:justify-start xl:justify-start 2xl:justify-start">
                    <img src="/images/inst.png" className="w-[2vw] h-auto min-w-[32px] max-w-full object-contain"/>
                    <img src="/images/myachik.png" className="w-[2vw] h-auto min-w-[32px] max-w-full object-contain"/>
                    <img src="/images/twitter.png" className="w-[2vw] h-auto min-w-[32px] max-w-full object-contain"/>
                    <img src="/images/youtube.png" className="w-[2vw] h-auto min-w-[32px] max-w-full object-contain"/>
                </div>
            </div>
            <div className="2xl:grid sm:grid md:grid lg:grid xl:grid hidden justify-items-start gap-[3vw]  text-[#F5F7FA]">
                <h1 className="text-[clamp(18px,1.4vw,100px)] font-semibold">Company</h1>
                <div className="grid gap-[1.3vw] text-[clamp(16px,1.1vw,100px)]">
                    <p>About us</p>
                    <p>Blog</p>
                    <p>Contact us</p>
                    <p>Pricing</p>
                    <p>Testimonials</p>
                </div>
            </div>
            <div className="2xl:grid sm:grid md:grid lg:grid xl:grid hidden justify-items-start gap-[3vw]  text-[#F5F7FA]">
                <h1 className="text-[clamp(18px,1.4vw,100px)] font-semibold">Support</h1>
                <div className="grid gap-[1.3vw] text-[clamp(16px,1.1vw,100px)]">
                    <p>Help center</p>
                    <p>Terms of service</p>
                    <p>Legal</p>
                    <p>Privacy policy</p>
                    <p>Status</p>
                </div>
            </div>
            <div className="flex gap-[7vw] justify-center sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
                <div className="grid justify-items-center gap-[3vw]  text-[#F5F7FA]">
                <h1 className="text-[clamp(18px,1.4vw,100px)] font-semibold">Company</h1>
                <div className="grid gap-[1.3vw] text-center text-[clamp(16px,1.1vw,100px)]">
                    <p>About us</p>
                    <p>Blog</p>
                    <p>Contact us</p>
                    <p>Pricing</p>
                    <p>Testimonials</p>
                </div>
            </div>
            <div className="grid justify-items-center gap-[3vw]  text-[#F5F7FA]">
                <h1 className="text-[clamp(18px,1.4vw,100px)] font-semibold">Support</h1>
                <div className="grid gap-[1.3vw] text-center text-[clamp(16px,1.1vw,100px)]">
                    <p>Help center</p>
                    <p>Terms of service</p>
                    <p>Legal</p>
                    <p>Privacy policy</p>
                    <p>Status</p>
                </div>
            </div>
            </div>
                <div className="grid mt-[5vw] sm:mt-[5vw] md:mt-[5vw] lg:mt-0 xl:mt-0 2xl:mt-0 gap-[3vw] justify-items-center sm:justify-items-start md:justify-items-start lg:justify-items-start xl:justify-items-start 2xl:justify-items-start text-[#F5F7FA]">
                <h1 className="text-[clamp(18px,1.4vw,100px)] font-semibold  sm:text-start md:text-start lg:text-start xl:text-start 2xl:text-start">Stay up to date</h1>
                <div className="flex gap-[1.3vw] bg-gray-600 py-[0.8vw] rounded-lg px-[0.8vw]">
                    <input className="appearance-none p-[1vw] sm:p-0 md:p-0 lg:p-0 xl:p-0 2xl:p-0 outline-0 text-[clamp(16px,1.1vw,100px)]" placeholder="Your email address"/>
                    <img src="/images/send.png" className="w-[1vw] h-auto min-w-[24px] max-w-full object-contain"/>
                </div>
            </div>
        </div>
    );
    };  

export default Footer;  