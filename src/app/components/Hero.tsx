import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <Image
        className="lg:w-[580px] xl:w-[620px] h-[680px] absolute right-0 top-0 -z-10 rounded-full" style={{ marginTop: '30px', marginRight: '30px'}}
        src="/restaurant.jpeg"
        width={1000}
        height={600}
        alt="hero_bg"
      />
      <Navbar />
      
      <div className="container h-[calc(100vh-120px)] grid items-center" >
        <div className="space-y-4 bg-[#ffffff98] w-fit p-4" style={{ marginLeft: '200px' }}>
          <p className="uppercase font-medium">The only place in New Jersey which serves the</p>
          <h2 className="text-4xl sm:text-6xl font-bold">
            Indian <span className="text-accent">Food</span>
          </h2>
          <p className="text-gray-700 text-[14px] sm:text-[16px]">
            Get special christmas discounts upto 50%.
            <br /> Limited Period Offer!!!
            <br />
            <br />
          </p>
          <a href="#feature" className="bg-accent text-white px-6 py-2 rounded-3xl text-[14px] sm:text-[16px]">
            Check Out the Menu
          </a>
        </div>
      </div>
    </div>
  );
};


export default Hero;