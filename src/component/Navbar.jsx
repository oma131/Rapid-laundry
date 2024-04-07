import React, { useState } from 'react';
import Logo from '../assets/Logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex ">
            <img src={Logo} alt='Rapid Clean logo'  className='w-48'/>
          </div>
          
          {/* Links */}
          <div className="hidden md:flex justify-center flex-grow">
            <div className="flex space-x-4">
              <a href="#" className="text-black hover:text-[#0100BB] px-3 py-2 rounded-md text-lg hover:underline-offset-8 font-medium active:text-[#0100BB]">Home</a>
              <a href="#" className="text-black hover:text-[#0100BB] px-3 py-2 rounded-md text-lg hover:underline-offset-8 font-medium">Services</a>
              <a href="#" className="text-black hover:text-[#0100BB] px-3 py-2 rounded-md text-lg hover:underline-offset-8 font-medium">Pricing</a>
            </div>
          </div>

          {/* Button */}
          <div className="flex items-center">
            <button className="text-white bg-[#0100BB] hover:text-white px-14 py-2 rounded-md text-sm text-lg font-medium">Book Now</button>
            <div className="-mr-2 flex md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} type="button" className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Menu */}
      {isOpen && (
        <div className="md:hidden bg-red-400">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Link 1</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Link 2</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Link 3</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
