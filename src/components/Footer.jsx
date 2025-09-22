import React, { useState } from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center">
        <p className="text-sm text-center">&copy; {new Date().getFullYear()} Quize App. All rights reserved by Vanshika Koshti.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
