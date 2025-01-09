import React from 'react';
import icon1 from '../assets/icons/icon1.png';
import icon2 from '../assets/icons/icon2.png';
import icon3 from '../assets/icons/icon3.png';

const features = [
  {
    icon: icon1,
    title: 'Membership Organizations',
    description: 'Description for feature one. consectetur adipiscing elit.',
  },
  {
    icon: icon2,
    title: 'National Associations',
    description: 'Description for feature two. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: icon3,
    title: 'Clubs & Societies',
    description: 'Description for feature three. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Manage Your Entire Community in a Single System
        </h2>
        <p className="text-lg mb-8">
          Our platform offers comprehensive tools to streamline your community management.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-full md:w-1/4 lg:w-1/5 p-4 bg-white rounded-lg shadow-md"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-12 h-12 mb-4 font-bold"
              />
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
