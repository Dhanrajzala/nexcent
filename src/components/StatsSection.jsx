import React from 'react';
import { FaUsers, FaRegBuilding, FaCalendarCheck, FaMoneyCheckAlt } from 'react-icons/fa';

const StatsSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 px-4">
          <h2 className="text-gray-600 font-bold text-xl mb-2">
            Helping a local
          </h2>
          <h3 className="text-green-500 font-bold text-xl mb-2">
            Business reinvent itself
          </h3>
          <p className="text-gray-500 text-sm font-light">
            This is a brief description or tagline that provides additional context.
          </p>
        </div>
        {/* Right Section */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-6 px-4">
          {/* Member Count */}
          <div className="flex items-center">
            <FaUsers className="text-green-500 text-3xl mr-4" />
            <div>
              <p className="text-gray-600 font-semibold">23,32,4456</p>
              <p className="text-gray-500 text-sm">Members</p>
            </div>
          </div>
          {/* Club Count */}
          <div className="flex items-center">
            <FaRegBuilding className="text-green-500 text-3xl mr-4" />
            <div>
              <p className="text-gray-600 font-semibold">1,22,234</p>
              <p className="text-gray-500 text-sm">Clubs</p>
            </div>
          </div>
          {/* Event Bookings */}
          <div className="flex items-center">
            <FaCalendarCheck className="text-green-500 text-3xl mr-4" />
            <div>
              <p className="text-gray-600 font-semibold">5,678</p>
              <p className="text-gray-500 text-sm">Event Bookings</p>
            </div>
          </div>
          {/* Payments */}
          <div className="flex items-center">
            <FaMoneyCheckAlt className="text-green-500 text-3xl mr-4" />
            <div>
              <p className="text-gray-600 font-semibold">9,312,35</p>
              <p className="text-gray-500 text-sm">Payments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
