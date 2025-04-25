import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className='max-w-6xl mx-auto px-5 my-12 flex flex-col md:flex-row items-center md:items-start gap-8'>
      <div className='w-36 h-36 relative flex-shrink-0'>
        <Image
          src='/api/placeholder/150/150' // Replace with your actual profile image
          alt='Profile photo'
          className='rounded-full object-cover'
          fill
        />
      </div>
      <div>
        <h2 className='text-xl font-bold mb-3'>About</h2>
        <p className='text-gray-700'>
          Navigating the intersection of technology and finance, documenting my
          progress through Microsoft certifications, offering insights and
          guidance to financial professionals.
        </p>
      </div>
    </div>
  );
};

export default About;
