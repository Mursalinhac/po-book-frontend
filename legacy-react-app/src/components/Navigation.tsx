import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { NavigationProps } from '../types';

const Navigation: React.FC<NavigationProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-corvette-dark">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <Link to="/" className="text-white text-xl font-semibold">
            Corvette Purchase Order
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-gray-300 focus:outline-none"
            aria-controls="responsive-navbar-nav"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <div className="flex space-x-8">
              <Link to="/customers" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Customer List
              </Link>
              <Link to="/orders" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Trade-in
              </Link>
            </div>

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
              >
                Login Name
                <svg className="ml-1 h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <a href="#action/3.1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Action
                  </a>
                  <a href="#action/3.2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Another action
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden" id="responsive-navbar-nav">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/customers" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
                Customer List
              </Link>
              <Link to="/orders" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
                Trade-in
              </Link>
              <div className="border-t border-gray-700 pt-4">
                <a href="#action/3.1" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
                  Action
                </a>
                <a href="#action/3.2" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
                  Another action
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;