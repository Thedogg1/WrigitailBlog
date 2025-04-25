import React from 'react';
import Logo from '../public/assets/logo-t.png';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className='flex justify-between bg-white text-[#1B3143] py-4 px-5 md:px-10 lg:px-20 font-medium shadow-sm items-center'>
      <Link href='/' className='flex items-center'>
        <span>
          <Image src={Logo} alt='Logo' className='h-6 w-20 mx-2' />
        </span>
      </Link>
      <div className='flex items-center gap-6'>
        <Link href='/blog' className='hover:text-[#E7493F] transition-colors'>
          Blog
        </Link>
        <Link
          href='/resources'
          className='hover:text-[#E7493F] transition-colors'
        >
          Resources
        </Link>
        <Link
          href='/contact'
          className='hover:text-[#E7493F] transition-colors'
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Header;
