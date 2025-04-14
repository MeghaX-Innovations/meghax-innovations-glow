
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero3D from './Hero3D';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <Hero3D />
      
      <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          <span className="block">Innovative</span>
          <span className="text-gradient-blue">Software Solutions</span>
          <span className="block">for the Future</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
          MeghaX Innovations delivers cutting-edge software solutions that transform businesses through innovation and technology excellence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <Button className="bg-gradient-primary hover:opacity-90 px-8 py-6 text-lg">
            Explore Services
          </Button>
          <Button variant="outline" className="border-meghax-light-blue hover:bg-meghax-light-blue/10 px-8 py-6 text-lg">
            Contact Us
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#services" aria-label="Scroll to services">
            <ArrowDown className="text-white" size={32} />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-[1]"></div>
    </section>
  );
};

export default HeroSection;
