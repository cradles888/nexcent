import React, { useState } from 'react';
import Dropdown from './form';
import Button from '../StyleElements/button';

const ParentComponent = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    document.body.style.overflow = 'hidden'
    setIsModalOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = 'auto'
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button label="Get a Demo" onClick={showModal} className="bg-[#4CAF4F] text-[clamp(18px,1.1vw,100px)] lg:py-[1.51vw] lg:px-[4vw] px-[10vw] py-[3vw] sm:px-[8vw] md:px-[6vw] xl:px-[1.67vw] 2xl:px-[1.67vw] sm:py-[3vw] md:py-[2vw] xl:py-[1vw] 2xl:py-[1vw] text-slate-50 rounded-sm"/>
      <Dropdown isOpen={isModalOpen} onClose={closeModal} 
      />
    </div>
  );
};

export default ParentComponent;
