
import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection: React.FC = () => {
  const features = [
    "Expert team of developers and designers",
    "Cutting-edge technologies and frameworks",
    "Agile development methodology",
    "Dedicated support and maintenance",
    "Cost-effective solutions",
    "Timely delivery"
  ];

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const counterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const techs = [
    { name: "React", color: "#61DAFB" },
    { name: "Node.js", color: "#8CC84B" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Flutter", color: "#02569B" },
    { name: "Python", color: "#FFD43B" },
    { name: "AWS", color: "#FF9900" },
    { name: "Docker", color: "#2496ED" },
    { name: "GraphQL", color: "#E535AB" }
  ];

  const animationRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const animateFloatingTechs = () => {
      const techElements = animationRef.current?.querySelectorAll('.tech-bubble');
      if (!techElements) return;
      
      techElements.forEach((element, index) => {
        const el = element as HTMLElement;
        // Random position within the container
        const randomX = Math.random() * 80;
        const randomY = Math.random() * 80;
        
        // Set initial position
        el.style.left = `${randomX}%`;
        el.style.top = `${randomY}%`;
        
        // Animate with random timing
        const animDuration = 15 + Math.random() * 20;
        el.style.animation = `float ${animDuration}s ease-in-out infinite`;
        el.style.animationDelay = `${Math.random() * 10}s`;
      });
    };
    
    animateFloatingTechs();
  }, []);

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
            
            <motion.div 
              ref={statsRef}
              className="flex gap-4 flex-wrap"
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              <motion.div 
                className="bg-gradient-to-br from-meghax-dark-blue/30 to-meghax-light-blue/20 backdrop-blur-sm border border-gray-800 rounded-lg p-4 flex-1 min-w-[150px] hover:shadow-lg hover:shadow-meghax-light-blue/20 transition-all duration-300"
                variants={counterVariants}
              >
                <div className="counter text-4xl font-bold text-gradient-blue">150+</div>
                <div className="text-gray-400">Projects Completed</div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-meghax-dark-green/30 to-meghax-light-green/20 backdrop-blur-sm border border-gray-800 rounded-lg p-4 flex-1 min-w-[150px] hover:shadow-lg hover:shadow-meghax-light-green/20 transition-all duration-300"
                variants={counterVariants}
              >
                <div className="counter text-4xl font-bold text-gradient-green">50+</div>
                <div className="text-gray-400">Happy Clients</div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-meghax-dark-blue/30 to-meghax-light-green/20 backdrop-blur-sm border border-gray-800 rounded-lg p-4 flex-1 min-w-[150px] hover:shadow-lg hover:shadow-meghax-light-blue/20 transition-all duration-300"
                variants={counterVariants}
              >
                <div className="counter text-4xl font-bold text-gradient-mixed">15+</div>
                <div className="text-gray-400">Years Experience</div>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-diagonal opacity-40"></div>
              
              <div ref={animationRef} className="tech-animation absolute inset-0">
                {techs.map((tech, index) => (
                  <div 
                    key={index}
                    className="tech-bubble absolute p-3 rounded-full border border-white/10 backdrop-blur-sm flex items-center justify-center text-sm font-medium"
                    style={{ 
                      backgroundColor: `${tech.color}30`,
                      boxShadow: `0 0 20px ${tech.color}50`,
                      width: `${Math.max(80, tech.name.length * 14)}px`,
                      height: `${Math.max(80, tech.name.length * 6)}px`,
                    }}
                  >
                    {tech.name}
                  </div>
                ))}
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-meghax-dark-blue to-meghax-light-green animate-pulse-slow flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/78d8d4a7-061e-457a-b513-44201dcbef25.png" 
                      alt="MeghaX Innovations Logo" 
                      className="w-24 h-24"
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
