import React from "react";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <a href="./">
          <img
            src="src\assets\images\logoh.png"
            alt="Logo"
            className="h-3 md:h-4 lg:h-5 w-auto" // Adjusts height for different screen sizes
          />
        </a>
        <nav className="flex space-x-20 items-center">
          <a href="/" className="text-gray-800 hover:text-gray-600">
            Home
          </a>
          <a href="/" className="text-gray-800 hover:text-gray-600">
            About
          </a>
          <a href="/" className="text-gray-800 hover:text-gray-600">
            Portfolio
          </a>
          <a href="/" className="text-gray-800 hover:text-gray-600">
            Services
          </a>
          <a href="/" className="text-gray-800 hover:text-gray-600">
            Contact
          </a>
        </nav>
        <div className="flex space-x-4 items-center">
          <a href="/login" className="text-green-600 hover:text-green-500">
            Login
          </a>
          <a
            href="/signin"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
          >
            Sign In
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
