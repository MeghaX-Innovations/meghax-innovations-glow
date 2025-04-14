
import React from 'react';
import { 
  Globe, 
  Code, 
  Smartphone, 
  Cube, 
  Brain, 
  MessageSquare, 
  ShoppingCart, 
  Briefcase, 
  Cloud, 
  Link2 
} from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom websites tailored to your business needs with responsive design and modern UI/UX.",
      isHighlighted: true,
    },
    {
      icon: Code,
      title: "Software Development",
      description: "End-to-end software solutions that automate processes and enhance productivity.",
      isHighlighted: false,
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications with seamless user experiences.",
      isHighlighted: false,
    },
    {
      icon: Cube,
      title: "3D Modeling & AR",
      description: "Immersive 3D models and augmented reality experiences for your products and services.",
      isHighlighted: true,
    },
    {
      icon: Brain,
      title: "AI & ML Solutions",
      description: "Intelligent systems that learn, adapt, and solve complex business problems.",
      isHighlighted: false,
    },
    {
      icon: MessageSquare,
      title: "Chatbot Integration",
      description: "AI-powered chatbots that enhance customer service and engagement.",
      isHighlighted: false,
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Comprehensive online shopping platforms with secure payment gateways.",
      isHighlighted: false,
    },
    {
      icon: Briefcase,
      title: "Enterprise Resource Planning",
      description: "Integrated ERP systems that streamline your business operations.",
      isHighlighted: true,
    },
    {
      icon: Cloud,
      title: "Cloud-Based Solutions",
      description: "Scalable cloud architectures for reliable and flexible business applications.",
      isHighlighted: false,
    },
    {
      icon: Link2,
      title: "API Development",
      description: "Robust APIs that connect different systems and enable seamless data exchange.",
      isHighlighted: false,
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient-blue">Services</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We provide comprehensive software solutions to help businesses innovate and grow in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              isHighlighted={service.isHighlighted}
              delay={index * 100}
            />
          ))}
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-meghax-dark-blue/20 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-meghax-dark-green/10 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
};

export default ServicesSection;
