import React from "react";

const InfoSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section: Illustration */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src="src/assets/images/pana.png"
            alt="Illustration"
            className="h-auto"
            style={{ width: "420px", height: "450px" }}
          />
        </div>
        {/* Right Section: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            How to design footer like us
          </h2>
          <p className="text-gray-700 mb-6">
            This is a brief paragraph that provides additional information about
            the topic highlighted in the heading. It should be concise and
            engaging to encourage users to learn more.
          </p>
          <button className="bg-green-500 text-white font-medium py-2 px-4 rounded hover:bg-green-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
