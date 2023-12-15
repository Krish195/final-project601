import Image from 'next/image'
import React from 'react'
import { IoMdMenu } from "react-icons/io";


const Navbar = () => {
  return (
    <div className='container pt-6'>
        <div className="flex justify-between items-center">
            <Image src="/logo.png" width={50} height={50} alt='logo' />
            <ul className='md:flex hidden gap-8 items-center font-semibold text-[14px]' style={{ marginRight: '600px' }}>
              <li><a href="#" className="text-black hover:text-accent transition-colors">Home</a></li>
              <li><a href="#feature" className="text-black hover:text-accent transition-colors">Menu</a></li>
              <li><a href="#footer" className="text-black hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#testimonial" className="text-black hover:text-accent transition-colors">Testimonial</a></li>
            </ul>
<IoMdMenu className="md:hidden text-accent" size={30} style={{ marginRight: '20px' }} />
        </div>
    </div>
  )
}

export default Navbar