import React from 'react';

const DemoSection = () => {
  return (
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Text Section */}
        <p className="text-5xl text-gray-800 font-bold mb-4">
          Experience the future of technology with our innovative solutions.
        </p>
        
        {/* Button */}
        <a
          href="#"
          className="inline-block bg-green-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
        >
          Get Demo
        </a>
      </div>
    </section>
  );
};

export default DemoSection;
