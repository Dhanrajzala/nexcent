import React from 'react';
import { FaApple, FaMicrosoft, FaGoogle } from 'react-icons/fa'; // Example brand icons

const CustomerHighlight = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        {/* Left Section: Image */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <img
            src="src\assets\images\image 9.png"
            alt="Customer"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
        {/* Right Section: Text and Icons */}
        <div className="w-full md:w-2/3 md:pl-8">
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <p className="text-green-500 font-semibold">
            Dhanraj Zala
          </p>
          <p className="text-gray-600 text-sm font-light mb-4">
            D365 Developer at Innoventix Solutions
          </p>
          {/* Brand Icons */}
          <div className="flex space-x-4 mb-4">
            <FaApple className="text-gray-600 text-2xl" />
            <FaMicrosoft className="text-gray-600 text-2xl" />
            <FaGoogle className="text-gray-600 text-2xl" />
            {/* Add more brand icons as needed */}
          </div>
          <a href="/customers" className="text-green-500 font-medium">
            Meet all customers &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomerHighlight;
