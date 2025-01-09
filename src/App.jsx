// App.jsx
import React from 'react';
import { Navbar } from './components/Navbar';
import Herosection from './components/Herosection';
import ClientsSection from './components/ClientsSection';
import FeaturesSection from './components/FeaturesSection';
import InfoSection from './components/InfoSection';
import StatsSection from './components/StatsSection';
import InfoSection2 from './components/InfoSection2.jsx';
import CustomerHighlight from './components/CustomerHighlight.jsx';
import ImageCardSection from './components/ImageCardSection.jsx';
import DemoSection from './components/DemoSection.jsx';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Herosection />
      <ClientsSection />
      <FeaturesSection />
      <InfoSection/>
      <StatsSection/>
      <InfoSection2/>
      <CustomerHighlight/>
      <ImageCardSection/>
      <DemoSection/>
      <Footer/>
    </>
  );
}

export default App;
