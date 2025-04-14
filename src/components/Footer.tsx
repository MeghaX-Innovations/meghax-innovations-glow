
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-black/60 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/78d8d4a7-061e-457a-b513-44201dcbef25.png" 
                alt="MeghaX Innovations Logo" 
                className="h-10 w-auto" 
              />
              <span className="font-bold text-xl">MeghaX</span>
            </a>
            <p className="text-gray-400 mb-4">
              Innovative software solutions for businesses of all sizes. We're dedicated to transforming ideas into powerful digital products.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Website Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Mobile App Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">AI & ML Solutions</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Colombo 10, Sri Lanka</li>
              <li>Phone: (+94) 76 643 3975</li>
              <li>Email: meghaxinnovations@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {currentYear} MeghaX Innovations. All rights reserved.
          </p>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
