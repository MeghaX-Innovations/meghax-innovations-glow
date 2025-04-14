
import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    "Expert team of developers and designers",
    "Cutting-edge technologies and frameworks",
    "Agile development methodology",
    "Dedicated support and maintenance",
    "Cost-effective solutions",
    "Timely delivery"
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-gradient-green">MeghaX Innovations</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-6">
              MeghaX Innovations is a forward-thinking software development company dedicated to creating innovative solutions that help businesses thrive in the digital era. We combine technical expertise with creative thinking to deliver software that makes a difference.
            </p>
            
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-meghax-light-green mt-1 flex-shrink-0" size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex gap-4 flex-wrap">
              <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-4 flex-1 min-w-[150px]">
                <div className="text-3xl font-bold text-gradient-blue">150+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-4 flex-1 min-w-[150px]">
                <div className="text-3xl font-bold text-gradient-green">50+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-4 flex-1 min-w-[150px]">
                <div className="text-3xl font-bold text-gradient-mixed">15+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-diagonal opacity-40 animate-pulse-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-72 h-72">
                  <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-meghax-light-blue/30 animate-spin-slow"></div>
                  <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full border-4 border-meghax-light-green/30 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/78d8d4a7-061e-457a-b513-44201dcbef25.png" 
                      alt="MeghaX Innovations Logo" 
                      className="w-48 h-48 animate-float" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-meghax-light-blue/10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-meghax-light-green/10 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
};

export default AboutSection;
