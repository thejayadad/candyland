'use client'
import React from 'react';

const Hero = () => {
  return (
    <section
      className='h-screen'
      style={{
        backgroundImage: `url('/header.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center h-screen">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-6xl text-4xl mb-4 font-medium text-gray-900">
            Sweet Dreams Delight
            <br className="hidden lg:inline-block" />Handcrafted Delicacies
          </h1>
          <p className="mb-8 leading-relaxed">
            Indulge in the delightful flavors of our handcrafted delicacies. From artisanal chocolates to gourmet pastries, each treat is a journey to sweet dreams. Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-4 px-10 focus:outline-none hover:bg-indigo-600 rounded text-2xl">
              Explore Now
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {/* Placeholder image, you can replace it with your actual image */}
          <img className="object-cover object-center rounded" alt="hero" src="/hero.png" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
