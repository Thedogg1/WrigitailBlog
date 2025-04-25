import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProfileImage from '../public/assets/profile.jpg'; // Replace with your actual profile image

const Footer = () => {
  return (
    <footer className='bg-[#0A3A56] text-white py-12'>
      <div className='max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div>
          <h2 className='text-2xl font-semibold mb-2'>
            Empowering Financial Advisors with AI Insights
          </h2>
          <p className='text-sm mb-4'>
            Navigating the intersection of technology and finance.
          </p>
          <button className='bg-white text-[#0A3A56] font-medium px-6 py-2 rounded hover:bg-gray-100 transition'>
            Subscribe for Weekly Updates
          </button>
        </div>
        <div className='flex items-center gap-4 md:justify-end'>
          <Image
            src={ProfileImage}
            alt='Profile'
            width={60}
            height={60}
            className='rounded-full'
          />
          <div>
            <h3 className='text-md font-semibold'>About</h3>
            <p className='text-sm'>
              Documenting my journey through Microsoft certifications and
              sharing AI insights with financial professionals.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
