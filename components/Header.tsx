import React from 'react';
import Logo from '../public/assets/m.png';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <nav
      className='flex justify-between bg-[#1C252A] text-white py-3 md:py-5 px-5 md:px-10 lg:px-20 font-semibold
    text-[12px] md:text-[14px] lg:text-16px items-center'
    >
      <Link href='/blog' className='flex items-center'>
        <span>
          <Image src={Logo} alt='Logo' className='h-8 w-8 mx-2' />
        </span>
        <span className='hidden md:inline-block'>my travel blog</span>
      </Link>
    </nav>
  );
};

export default Header;
