import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <Image
        className="hidden lg:block lg:w-[580px] xl:w-[620px] h-[680px] absolute right-0 top-0 -z-10 rounded-full"
        style={{ marginTop: '30px', marginRight: '30px' }}
        src="/restaurant.jpeg"
        width={1000}
        height={600}
        alt="hero_bg"
      />

      <Navbar />
      
      <div className="container h-[calc(100vh-120px)] grid items-center justify-center sm:justify-start">
    <div className="space-y-4 bg-[#ffffff98] w-fit p-4 mx-auto sm:mx-0 sm:ml-[200px]">
      <p className="uppercase font-medium text-center sm:text-left">The only place in New Jersey which serves the</p>
      <h2 className="text-4xl sm:text-6xl font-bold text-center sm:text-left">
        Indian <span className="text-accent">Food</span>
      </h2>
      <p className="text-gray-700 text-[14px] sm:text-[16px] text-center sm:text-left">
        Get special christmas discounts up to 50%.
        <br /> Limited Period Offer!!!
        <br />
        <br />
      </p>
      <a href="#feature" className="bg-accent text-white px-6 py-2 rounded-3xl text-[14px] sm:text-[16px] block mx-auto sm:inline-block text-center">
        Check Out the Menu
      </a>
    </div>
</div>

    </div>
  );
};


export default Hero;