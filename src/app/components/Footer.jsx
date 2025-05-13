import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-[#121212] text-white'>
      <div className='container p-8 md:p-12 flex flex-col md:flex-row justify-between items-center'>
        {/* Logo */}
        <span className='text-2xl font-semibold text-[#39FF14] mb-4 md:mb-0'>
          <Image src="/images/LOGO FIX.png" width={60} height={60} alt='LOGO'/>
        </span>

        {/* Copyright / Footer Text */}
        <p className='text-center md:text-right text-sm text-gray-400'>
          &copy; 2025 All Rights Reserved.
        </p>
      </div>

      {/* Footer Bottom Bar */}
      <div className='bg-[#33353F] py-2'>
        <div className='container text-center'>
          <p className='text-sm text-gray-500'>
            Designed by Taufiqu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
