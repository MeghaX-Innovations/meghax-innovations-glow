'use client';

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

  const [projectCount, setProjectCount] = React.useState(0);
  const [clientCount, setClientCount] = React.useState(0);
  const [yearCount, setYearCount] = React.useState(0);

  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (statsInView) {
      const p = setInterval(() => {
        setProjectCount(prev => {
          if (prev < 150) return prev + 3;
          clearInterval(p);
          return 150;
        });
      }, 20);
      const c = setInterval(() => {
        setClientCount(prev => {
          if (prev < 50) return prev + 1;
          clearInterval(c);
          return 50;
        });
      }, 60);
      const y = setInterval(() => {
        setYearCount(prev => {
          if (prev < 15) return prev + 1;
          clearInterval(y);
          return 15;
        });
      }, 200);
      return () => {
        clearInterval(p);
        clearInterval(c);
        clearInterval(y);
      };
    }
  }, [statsInView]);

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

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-gradient-green">MeghaX Innovations</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              MeghaX Innovations is a forward-thinking software development company dedicated to creating innovative solutions that help businesses thrive in the digital era.
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
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
            >
              {[{
                value: projectCount,
                label: "Projects Completed",
                gradient: "text-gradient-blue"
              }, {
                value: clientCount,
                label: "Happy Clients",
                gradient: "text-gradient-green"
              }, {
                value: yearCount,
                label: "Years Experience",
                gradient: "text-gradient-mixed"
              }].map(({ value, label, gradient }, i) => (
                <motion.div
                  key={i}
                  className="bg-gradient-to-br from-meghax-dark-blue/30 to-meghax-light-green/20 backdrop-blur-sm border border-gray-800 rounded-lg p-4 flex-1 min-w-[150px] hover:shadow-lg hover:shadow-meghax-light-green/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`counter text-4xl font-bold ${gradient} flex items-center justify-center`}>
                    <span className="text-5xl tabular-nums">{value}</span>
                    <span className="ml-1">+</span>
                  </div>
                  <div className="text-gray-400 text-center">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
              {/* Central MeghaX logo */}
              <div className="relative z-10 w-40 h-40 rounded-full bg-gradient-to-br from-meghax-dark-blue to-meghax-light-green animate-pulse-slow flex items-center justify-center">
                <img
                  src="/lovable-uploads/78d8d4a7-061e-457a-b513-44201dcbef25.png"
                  alt="MeghaX Logo"
                  className="w-36 h-36 object-contain p-2"
                />
              </div>

              {/* Rotating circle of tech icons */}
              <div className="absolute w-full h-full flex items-center justify-center">
                <div className="relative w-[320px] h-[320px] animate-spin-slow">
                  {techs.map((tech, i) => {
                    const angle = (360 / techs.length) * i;
                    const x = 130 * Math.cos((angle * Math.PI) / 180);
                    const y = 130 * Math.sin((angle * Math.PI) / 180);
                    return (
                      <div
                        key={i}
                        className="absolute hover:scale-110 transition-transform duration-300 rounded-full p-3 border border-white/10 backdrop-blur-sm"
                        style={{
                          transform: `translate(${x}px, ${y}px)`,
                          backgroundColor: `${tech.color}20`,
                          boxShadow: `0 0 20px ${tech.color}40`,
                        }}
                      >
                        <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
                      </div>
                    );
                  })}
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
