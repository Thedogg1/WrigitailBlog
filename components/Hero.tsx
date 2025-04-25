import React from 'react';

const Hero = () => {
  return (
    <div className='bg-[#1B3143] text-white py-16 px-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl md:text-5xl font-bold mb-3'>
          Empowering Financial Advisors with AI Insights
        </h1>
        <p className='text-lg mb-8'>
          Navigating the intersection of technology and finance.
        </p>
        <button className='bg-white text-[#1B3143] px-5 py-2 rounded font-medium hover:bg-gray-100 transition-colors'>
          Subscribe for Weekly Updates
        </button>
      </div>
    </div>
  );
};

export default Hero;
