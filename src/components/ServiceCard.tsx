
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isHighlighted?: boolean;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  isHighlighted = false,
  delay = 0,
}) => {
  return (
    <div 
      className={cn(
        "relative p-6 rounded-xl transition-all duration-300 card-hover",
        "border border-gray-800 bg-black/40 backdrop-blur-sm",
        isHighlighted ? "border-meghax-light-blue/50" : "border-gray-800",
        "animate-fade-in"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={cn(
        "absolute top-0 left-0 w-full h-full rounded-xl opacity-0 transition-opacity duration-300 -z-10",
        isHighlighted ? "opacity-10 bg-gradient-primary" : "",
      )}></div>
      
      <div className="mb-4">
        <div className={cn(
          "w-14 h-14 flex items-center justify-center rounded-lg mb-4",
          isHighlighted 
            ? "bg-gradient-primary text-white" 
            : "bg-gray-800 text-meghax-light-blue"
        )}>
          <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
