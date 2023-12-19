'use client'; // Ensure this component is treated as a client-side component

import Image from 'next/image'
import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container pt-6'>
        <div className="flex justify-between items-center">
            <Image src="/logo.png" width={50} height={50} alt='logo' />

            {/* Hamburger Menu Icon */}
            <IoMdMenu 
                className="md:hidden text-accent cursor-pointer" 
                size={30} 
                style={{ marginRight: '20px' }} 
                onClick={toggleMenu} 
            />

            {/* Menu Items */}
            <ul className={`md:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row gap-8 items-center font-semibold text-[14px] absolute md:relative md:top-auto top-16 md:left-0 left-1/2 transform -translate-x-1/2 md:translate-x-0 z-10`}
                style={{ marginRight: '600px' }}>
              <li><a href="#" className="text-black hover:text-accent transition-colors">Home</a></li>
              <li><a href="#feature" className="text-black hover:text-accent transition-colors">Menu</a></li>
              <li><a href="#footer" className="text-black hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#testimonial" className="text-black hover:text-accent transition-colors">Testimonial</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;
