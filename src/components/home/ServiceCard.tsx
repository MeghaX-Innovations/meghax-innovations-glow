
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isHighlighted?: boolean;
  color?: string;
  hoverColor?: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  isHighlighted = false,
  color = "from-meghax-dark-blue to-meghax-light-blue",
  hoverColor = "hover:shadow-meghax-light-blue/20",
  delay = 0,
}) => {
  return (
    <div 
      className={cn(
        "relative p-6 rounded-xl transition-all duration-500 h-full flex flex-col group",
        "border border-gray-800 bg-black/40 backdrop-blur-sm",
        "animate-fade-in hover:scale-105 hover:shadow-lg", 
        hoverColor
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={cn(
        "absolute top-0 left-0 w-full h-full rounded-xl opacity-0 transition-opacity duration-300 -z-10 bg-gradient-to-br",
        color,
        "group-hover:opacity-10"
      )}></div>
      
      <div className="mb-4 flex-grow">
        <div className={cn(
          "w-14 h-14 flex items-center justify-center rounded-lg mb-4 transition-all duration-300",
          "bg-gray-800 group-hover:bg-gradient-to-br", color,
          "text-white/80 group-hover:text-white"
        )}>
          <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300">{title}</h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
