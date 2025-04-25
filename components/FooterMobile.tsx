import React from 'react';
import Image from 'next/image';
import ProfileImage from '../public/assets/profile.jpg'; // Replace with your actual profile image

const FooterMobile = () => {
  return (
    <footer className='bg-[#0A3A56] text-white text-center py-10 px-6'>
      <h2 className='text-xl font-semibold mb-2'>
        Empowering Financial Advisors with AI Insights
      </h2>
      <p className='text-sm mb-4'>
        Navigating the intersection of technology and finance.
      </p>
      <button className='bg-white text-[#0A3A56] font-medium px-6 py-2 rounded hover:bg-gray-100 transition mb-8'>
        Subscribe for Weekly Updates
      </button>
      <div className='flex items-center justify-center gap-4'>
        <Image
          src={ProfileImage}
          alt='Profile'
          width={50}
          height={50}
          className='rounded-full'
        />
        <div className='text-left'>
          <h3 className='text-md font-semibold'>About</h3>
          <p className='text-sm'>
            Sharing my journey through Microsoft certifications and AI in
            finance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile;
