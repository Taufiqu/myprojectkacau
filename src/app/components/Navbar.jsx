"use client";
import React, { useState } from 'react';
import Link from "next/link";
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" }
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[rgba(18,18,18,0.9)] shadow-md">
      <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-4 max-w-7xl'>
        {/* Logo */}
        <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>
          LOGO
        </Link>

        {/* Mobile Toggle Button */}
        <div className='block md:hidden'>
          <button
            onClick={toggleNavbar}
            className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
          >
            {navbarOpen ? (
              <XMarkIcon className='h-6 w-6' />
            ) : (
              <Bars3Icon className='h-6 w-6' />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:block md:w-auto'>
          <ul className='flex space-x-6 text-white font-medium'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {navbarOpen && (
        <div className="block md:hidden px-4 pb-4 pt-2 bg-[#121212]">
          <ul className='flex flex-col space-y-4 text-white font-medium'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  onClick={() => setNavbarOpen(false)}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
