
// Copy the existing HeroSection component here but update the import paths if necessary
import React from 'react';
import Hero3D from '../Hero3D';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden py-16">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transforming Ideas into <span className="text-gradient-blue">Digital Excellence</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-xl">
              We build innovative software solutions that empower businesses to thrive in the digital landscape.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="px-6 py-3 rounded-lg bg-gradient-primary text-white font-medium transition-all hover:shadow-lg hover:shadow-meghax-light-blue/20 hover:scale-105">
                Our Services
              </a>
              <a href="#contact" className="px-6 py-3 rounded-lg border border-meghax-light-green text-white font-medium transition-all hover:bg-meghax-light-green/10 hover:shadow-lg hover:shadow-meghax-light-green/20">
                Contact Us
              </a>
            </div>
            
            <div className="mt-12 flex items-center space-x-8">
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full border-2 border-background bg-meghax-dark-blue flex items-center justify-center text-white font-bold text-sm">AB</div>
                <div className="w-10 h-10 rounded-full border-2 border-background bg-meghax-light-green flex items-center justify-center text-background font-bold text-sm">CL</div>
                <div className="w-10 h-10 rounded-full border-2 border-background bg-meghax-light-blue flex items-center justify-center text-white font-bold text-sm">MK</div>
                <div className="w-10 h-10 rounded-full border-2 border-background bg-gradient-primary flex items-center justify-center text-white font-bold text-sm">+5</div>
              </div>
              <div className="text-sm text-gray-300">
                <span className="font-bold text-white">50+ clients</span> trust us with their digital needs.
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-lg h-[400px] lg:h-[500px] relative">
              <Hero3D />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-60 -z-10"></div>
    </section>
  );
};

export default HeroSection;
