import React from 'react';
import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.png';
import logo3 from '../assets/images/logo3.png';
import logo4 from '../assets/images/logo4.png';
import logo5 from '../assets/images/logo5.png';
import logo6 from '../assets/images/logo6.png';
import logo7 from '../assets/images/logo7.png';
import logo8 from '../assets/images/logo8.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

const ClientsSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Clients</h2>
        <p className="text-lg mb-8">We are working with Fortune 500 companies</p>
        <div className="scrolling-wrapper">
          <div className="scrolling-content">
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="logo-box">
                <img src={logo} alt={`Client ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
