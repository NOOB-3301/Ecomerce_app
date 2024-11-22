import React, { useState } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility
  const [searchQuery, setSearchQuery] = useState(""); // State to manage search input

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Search query submitted:", searchQuery);
  };

  return (
    <header className="bg-gradient-to-r from-teal-600 to-blue-500 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">MBU</a>
        </div>

        {/* Desktop Navigation */}
        {/* <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-blue-300">Home</a>
          <a href="/products" className="hover:text-blue-300">Recents</a>
          <a href="/about" className="hover:text-blue-300">About Us</a>
        </nav> */}

        {/* Search Input Field */}
        <div className="hidden md:flex items-center space-x-4 w-1/3">
          <form onSubmit={handleSubmit} className="relative w-full">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring focus:ring-blue-300"
            />
          </form>
        </div>

        {/* User Avatar */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/profile">
            <img
              src="https://via.placeholder.com/40" // Replace with your avatar image URL
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)} // Toggle menu visibility
            className="text-white focus:outline-none"
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-teal-600 to-blue-500">
          <ul className="space-y-4 px-6 py-4">
            <li>
              <a href="/" className="block text-white hover:text-blue-300">Home</a>
            </li>
            <li>
              <a href="/products" className="block text-white hover:text-blue-300">Recents</a>
            </li>
            <li>
              <a href="/about" className="block text-white hover:text-blue-300">About Us</a>
            </li>
            {/* Mobile Search Input Field */}
            <li>
              <form onSubmit={handleSubmit} className="relative w-full">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring focus:ring-blue-300"
                />
              </form>
            </li>
            {/* User Avatar in Mobile Menu */}
            <li>
              <a href="/discord" className="flex items-center space-x-2">
                <img
                  src="https://via.placeholder.com/40" // Replace with your avatar image URL
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <span className="text-white hover:text-blue-300">Profile</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
