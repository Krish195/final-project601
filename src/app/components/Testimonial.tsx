import React from 'react';
import Image from 'next/image';

const Testimonial: React.FC = () => {
  return (
    <section id="testimonial" className="bg-white py-10 px-6 md:py-16 md:px-20" style={{ marginTop: '100px' }}>
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
        What People Say About Us
      </h2>
      <blockquote className="text-center text-gray-600 text-lg md:text-xl" style={{ marginTop: '50px' }}>
        <p>
          I had the most amazing experience at this restaurant! The food was absolutely delicious and the service was impeccable. It made me feel better to be here as some of my spending for every delicious food I buy goes to charity.
        </p>
        <div className="flex items-center justify-center mt-6">
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            <Image
              src="/Rock.jpeg" // Replace with path to your image
              alt="Andrew"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <div className="ml-4">
            <div className="font-medium">Dwayne Jhonson</div>
            <div className="text-yellow-400">★★★★★</div>
          </div>
        </div>
      </blockquote>
    </section>
  );
};

export default Testimonial;
