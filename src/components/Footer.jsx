import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        {/* Left Section */}
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <img src="src\assets\images\Logo.png" alt="Company Logo" className="mb-7 h-4 md:h-5 lg:h-6 w-auto" />
          <p className="text-sm">
            &copy; 2020 Nexcent Ltd. <br />
            All rights reserved.
          </p>
          <div className="flex mt-4 space-x-4">
            <FaFacebook className="h-6 w-6" />
            <FaTwitter className="h-6 w-6" />
            <FaInstagram className="h-6 w-6" />
            <FaLinkedin className="h-6 w-6" />
          </div>
        </div>

        {/* Center Section */}
        <div className="w-full md:w-1/2 flex justify-around mb-8 md:mb-0">
          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Blogs</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Testimonials</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
            </ul>
          </div>
          {/* Support Links */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Legal</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Status</a></li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/4">
          <h3 className="font-semibold mb-4">Stay up to date</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-lg bg-gray-700 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-500 px-4 py-2 rounded-r-lg hover:bg-green-600 focus:outline-none"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
