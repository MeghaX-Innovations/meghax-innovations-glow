
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero3D from './Hero3D';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-meghax-dark-blue/10 to-meghax-dark-green/10 -z-20"></div>
      
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-meghax-light-blue/10 rounded-full filter blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-meghax-light-green/10 rounded-full filter blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      
      <Hero3D />
      
      <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center z-10">
        <div className="relative">
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-primary rounded-full opacity-20 filter blur-2xl animate-pulse-slow"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-secondary rounded-full opacity-20 filter blur-2xl animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="block">Innovative</span>
            <span className="text-gradient-blue">Software Solutions</span>
            <span className="block">for the Future</span>
          </h1>
        </div>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 animate-fade-in relative" style={{ animationDelay: "200ms" }}>
          <span className="relative z-10">MeghaX Innovations delivers cutting-edge software solutions that transform businesses through innovation and technology excellence.</span>
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-primary rounded-full opacity-50"></span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <Button className="bg-gradient-primary hover:opacity-90 px-8 py-6 text-lg relative overflow-hidden group">
            <span className="relative z-10">Explore Services</span>
            <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
          </Button>
          <Button variant="outline" className="border-meghax-light-blue hover:bg-meghax-light-blue/10 px-8 py-6 text-lg relative overflow-hidden group">
            <span className="relative z-10">Contact Us</span>
            <span className="absolute inset-0 w-full h-full bg-meghax-light-blue/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#services" aria-label="Scroll to services" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
            <span className="text-sm mb-2">Discover More</span>
            <ArrowDown className="text-gradient-blue" size={32} />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-[1]"></div>
    </section>
  );
};

export default HeroSection;
