import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/Lib_logo.jpg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const apniRef = useRef(null);
  const libraryRef = useRef(null);

  useEffect(() => {
    const apniPosition = apniRef.current.getBoundingClientRect().left;
    const libraryPosition = libraryRef.current.getBoundingClientRect().right;
    apniRef.current.style.animationDelay = `-${apniPosition / 100}px`;
    libraryRef.current.style.animationDelay = `-${(window.innerWidth - libraryPosition) / 100}px`;
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="border-gray-200 bg-black dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <div ref={apniRef} className="animate-text">Apni</div>
            <img src={logo} className="h-18 w-28" alt="apni library Logo" />
            <div ref={libraryRef} className="animate-text">Library</div>
          </Link>
          <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded={menuOpen}>
            <span className="sr-only">Open main menu</span>
            {menuOpen ? (
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            )}
          </button>
          <div className={`md:hidden fixed inset-0 z-50 bg-black bg-opacity-50 ${menuOpen ? 'block' : 'hidden'}`} id="navbar-solid-bg">
            <div className="flex justify-end p-4">
              <button onClick={toggleMenu} className="text-gray-300 hover:text-gray-100 focus:outline-none">
                <svg className="w-10 h-10  bg-black text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col items-center justify-center h-screen bg-white ">
              <li onClick={closeMenu}>
                <Link to="/" className="block py-2 px-3 text-black font-semibold rounded hover:text-green-500">Home</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/about" className="block py-2 px-3 text-black font-semibold rounded hover:text-green-500">About Us</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/services" className="block py-2 px-3 text-black font-semibold rounded hover:text-green-500">Services</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/contact" className="block py-2 px-3 text-black font-semibold rounded hover:text-green-500">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <Link to="/" className="block py-2 px-3 md:p-0 text-white rounded md:bg-transparent hover:text-green-500 md:dark:text-green-500 dark:bg-green-600 md:dark:bg-transparent" onClick={closeMenu}>Home</Link>
              </li>
              <li>
                <Link to="/about" className="block py-2 px-3 text-white md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={closeMenu}>About Us</Link>
              </li>
              <li>
                <Link to="/services" className="block py-2 px-3 text-white md:p-0  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={closeMenu}>Services</Link>
              </li>
              <li>
                <Link to="/contact" className="block py-2 px-3 text-white md:p-0  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={closeMenu}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
