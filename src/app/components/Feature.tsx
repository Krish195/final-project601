import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <section id="feature">
        <div className="container pt-40" >
        {/* <h2 className="text-6xl font-bold" style={{ marginLeft: '30px' }}>Our</h2> */}
        <h2 className="text-6xl font-bold pt-2" style={{ marginLeft: '30px' }}>
            Signature <span className="text-accent">Items</span>
        </h2>

        {/* <p className="max-w-[550px] pt-10 text-gray-700" style={{ marginLeft: '30px' }}>
            Same Indian Taste.
        </p> */}


        <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
            <div className="w-fit mx-auto self-end">
            <Image
                className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
                src="/Chhole.jpg"
                width={300}
                height={600}
                alt="grid image"
            />

            <div className="space-y-4">
                <h2 className="font-medium text-xl">Chhole Bhature</h2>
                <p className="text-gray-700 text-[14px] xl:text-[16px]">
                Delicious Chhole with Delhite Flavors
                </p>
            </div>
            </div>
            <div className="w-fit mx-auto">
            <Image
                className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
                src="/Halwa.jpg"
                width={500}
                height={900}
                alt="grid image"
            />

            <div className="space-y-4">
                <h2 className="font-medium text-xl">Halwa</h2>
                <p className="text-gray-700 text-[14px] xl:text-[16px]">
                Mom made Halwa. Poured with love.
                </p>
            </div>
            </div>
            <div className="w-fit mx-auto self-end">
            <Image
                className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
                src="/Biryani.jpg"
                width={300}
                height={600}
                alt="grid image"
            />

            <div className="space-y-4">
                <h2 className="font-medium text-xl">Biryani</h2>
                <p className="text-gray-700 text-[14px] xl:text-[16px]">
                Royal Indian Taste. Marinated with 32 different spices.
                </p>
            </div>
            </div>
        </div>
        </div>
        </section>
  );
};

export default Featured;