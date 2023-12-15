import Image from "next/image";
import React from "react";

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
      
    </div>
  );
};

export default Hero;