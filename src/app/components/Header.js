"use client"
import { useState } from "react";
import Modal from "./modal/index";
import Button from "./StyleElements/button"
import Link from "./StyleElements/link"

const Header = () => {  
    const [ isOpen, setIsOpen ] = useState(false)
    const showMenu = () => {
        document.body.style.overflow = 'hidden'
        setIsOpen(true)
    }
    const closeMenu = () => {
        document.body.style.overflow = 'auto'
        setIsOpen(false)
    }
    return(
        <div className="py-[0.85vw] flex justify-between items-center">
            <img src="/images/full-logo.png" alt="logo" className="w-[10vw] h-auto min-w-[191px] max-w-full object-contain" />
            <div className="hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex gap-[2.8vw] text-[clamp(16px,1.1vw,100px)]">
                <a href="#">Home</a>
                <a href="#">Service</a>
                <a href="#">Feature</a>
                <a href="#">Product</a>
                <a href="#">Testimonial</a>
                <a href="#">FAQ</a>
            </div>
            <div className="hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex gap-[2.8vw] items-center text-[clamp(14px,1.1vw,50px)]">
                <Link disabled={false} label="Login" className="text-[clamp(14px,1vw,100px)]"/>
                <Button label={"Sign up"} className="bg-[#4CAF4F] py-[0.7vw] text-[clamp(14px,1vw,100px)] px-[1.11vw] rounded-md text-white"/>
            </div>            
            <img onClick={showMenu} className="block ml-[15vw] sm:ml-0 md:ml-0 lg:ml-0 xl:ml-0 2xl:ml-0 sm:block md:block lg:hidden xl:hidden 2xl:hidden w-[3vw] h-auto min-w-[48px] max-w-full object-contain" src="/images/header-burger-menu.png"/>
           <Modal isOpen={isOpen} onClose={closeMenu}/>
        </div>
    );
    };  

export default Header;  