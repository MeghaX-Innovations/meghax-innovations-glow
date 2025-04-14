
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
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

  // Counter animation states
  const [projectCount, setProjectCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const [yearCount, setYearCount] = useState(0);
  
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  // Run counter animations when section is in view
  useEffect(() => {
    if (statsInView) {
      // Projects counter animation
      const projectInterval = setInterval(() => {
        setProjectCount(prev => {
          if (prev < 150) return prev + 3;
          clearInterval(projectInterval);
          return 150;
        });
      }, 20);
      
      // Clients counter animation
      const clientInterval = setInterval(() => {
        setClientCount(prev => {
          if (prev < 50) return prev + 1;
          clearInterval(clientInterval);
          return 50;
        });
      }, 60);
      
      // Years counter animation
      const yearInterval = setInterval(() => {
        setYearCount(prev => {
          if (prev < 15) return prev + 1;
          clearInterval(yearInterval);
          return 15;
        });
      }, 200);
      
      return () => {
        clearInterval(projectInterval);
        clearInterval(clientInterval);
        clearInterval(yearInterval);
      };
    }
  }, [statsInView]);

  const counterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Tech stack icons with colors and logos
  const techs = [
    { name: "React", color: "#61DAFB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
    { name: "Node.js", color: "#8CC84B", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
    { name: "TypeScript", color: "#3178C6", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
    { name: "Python", color: "#FFD43B", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
    { name: "AWS", color: "#FF9900", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Docker", color: "#2496ED", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
    { name: "MongoDB", color: "#4DB33D", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
    { name: "JavaScript", color: "#F7DF1E", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" }
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
                <div className="counter text-4xl font-bold text-gradient-blue flex items-center justify-center">
                  <span className="text-5xl tabular-nums">{projectCount}</span>
                  <span className="ml-1">+</span>
                </div>
                <div className="text-gray-400 text-center">Projects Completed</div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-meghax-dark-green/30 to-meghax-light-green/20 backdrop-blur-sm border border-gray-800 rounded-lg p-4 flex-1 min-w-[150px] hover:shadow-lg hover:shadow-meghax-light-green/20 transition-all duration-300"
                variants={counterVariants}
              >
                <div className="counter text-4xl font-bold text-gradient-green flex items-center justify-center">
                  <span className="text-5xl tabular-nums">{clientCount}</span>
                  <span className="ml-1">+</span>
                </div>
                <div className="text-gray-400 text-center">Happy Clients</div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-meghax-dark-blue/30 to-meghax-light-green/20 backdrop-blur-sm border border-gray-800 rounded-lg p-4 flex-1 min-w-[150px] hover:shadow-lg hover:shadow-meghax-light-blue/20 transition-all duration-300"
                variants={counterVariants}
              >
                <div className="counter text-4xl font-bold text-gradient-mixed flex items-center justify-center">
                  <span className="text-5xl tabular-nums">{yearCount}</span>
                  <span className="ml-1">+</span>
                </div>
                <div className="text-gray-400 text-center">Years Experience</div>
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
                    className="tech-bubble absolute p-3 rounded-full border border-white/10 backdrop-blur-sm flex items-center justify-center"
                    style={{ 
                      backgroundColor: `${tech.color}20`,
                      boxShadow: `0 0 20px ${tech.color}40`,
                      width: '80px',
                      height: '80px',
                    }}
                  >
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className="w-12 h-12 object-contain"
                      title={tech.name}
                    />
                  </div>
                ))}
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-meghax-dark-blue to-meghax-light-green animate-pulse-slow flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/78d8d4a7-061e-457a-b513-44201dcbef25.png" 
                      alt="MeghaX Innovations Logo" 
                      className="w-40 h-40 rounded-full p-2"
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
