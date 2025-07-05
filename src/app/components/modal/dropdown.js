import React from "react";

const Dropdown = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div
      id="modal_background"
      className=" fixed z-100 inset-0 flex justify-center items-center p-[2.1vw] bg-[rgba(0,0,0,0.14)] backdrop-blur-xs"
    >
      <div className="bg-white flex rounded-4xl  shadow-[0_0px_35px_rgba(0,0,0,0.05)]">
        <div id="modal" className="flex items-start py-[20vw] px-[20vw] sm:py-[7vw] sm:px-[17vw] md:py-[5vw] md:px-[16vw] lg:py-[5vw] lg:px-[16vw] xl:py-[3vw] 2xl:py-[1.5vw] gap-[25vw] sm:gap-[25vw]">
          <div id="section-drop" className="mt-[5vw] justify-items-center text-[clamp(24px,1.1vw,50px)] gap-[3vw] grid">
            <a href="#">Home</a>
            <a href="#">Service</a>
            <a href="#">Feature</a>
            <a href="#">Product</a>
            <a href="#">Testimonial</a>
            <a href="#">FAQ</a>
          </div>

          <img
            onClick={onClose}
            src="/images/close.png"
            id="header-close-menu"
            className="w-[clamp(36px,3.3vw,100px)] absolute ml-[34.5vw] sm:ml-[27.5vw] md:ml-[25.5vw] lg:ml-[20.5vw] xl:ml-[15.5vw] 2xl:ml-[17.5vw] items-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
