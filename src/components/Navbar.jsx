import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className=" text-white px-6 py-4 shadow- bg-blue-800">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h2 className="text-xl font-bold">QuizApp</h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:font-semibold">Home</Link></li>
          {/* <li><Link to="/quiz" className="hover:underline">Quiz</Link></li>
          <li><Link to="/result" className="hover:underline">Result</Link></li> */}
          <li><Link to="/html" className="hover:font-semibold">Html</Link></li>
          <li><Link to="/css" className="hover:font-semibold">Css</Link></li>
          <li><Link to="/javascript" className="hover:font-semibold">Javascript</Link></li>
          <li><Link to="/bootstrap" className="hover:font-semibold">Bootstrap</Link></li>
          <li><Link to="/reactjs" className="hover:font-semibold">React</Link></li>
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="mt-4 flex flex-col space-y-3 md:hidden">
          <li><Link to="/" className="hover:underline" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/quiz" className="hover:underline" onClick={toggleMenu}>Quiz</Link></li>
          <li><Link to="/result" className="hover:underline" onClick={toggleMenu}>Result</Link></li>
        </ul>
      )}
    </nav>
  );
}

