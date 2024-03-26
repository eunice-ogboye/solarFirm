import React from 'react'

function Navbar() {
    return (
        <nav className="bg-blue-900 p-4 px-12">
        <div className="flex flex-wrap items-center justify-between">
          <div className="text-white text-2xl font-bold mb-4 sm:mb-0">GNTLimited</div>
          <ul className="flex flex-wrap space-x-4">
            <li><a href="#home" className="text-white hover:text-gray-300">Home</a></li>
            <li><a href="#about" className="text-white hover:text-gray-300">About</a></li>
            <li><a href="#services" className="text-white hover:text-gray-300">Services</a></li>
            <li><a href="#contact" className="text-white hover:text-gray-300">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    );
  };
    

export default Navbar