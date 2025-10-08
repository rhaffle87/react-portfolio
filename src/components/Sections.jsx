import React from 'react';

const Sections = ({ active }) => {
  return (
    <div className="h-screen w-full flex items-center justify-center text-white transition-all duration-700 bg-gradient-to-br from-[#1a1a1a] to-[#222]">
      {active === 'Home' && <h1 className="text-4xl font-bold">Welcome to Home</h1>}
      {active === 'About' && <h1 className="text-4xl font-bold">About Us</h1>}
      {active === 'Services' && <h1 className="text-4xl font-bold">Our Services</h1>}
      {active === 'Contact' && <h1 className="text-4xl font-bold">Contact Us</h1>}
    </div>
  );
};

export default Sections;