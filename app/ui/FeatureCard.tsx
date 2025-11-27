
import { ReactNode } from "react";

interface FeatureCardProps {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  isVisible: boolean;
  delay: number;
}

function FeatureCard({ id, icon, title, description, isVisible, delay }: FeatureCardProps) {
  return (
    <div
      id={id}
      className={`animate-on-scroll relative w-full transition-all duration-700 hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Folder Tab Shape */}
      <svg 
        className="w-full h-auto" 
        viewBox="0 0 400 380" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`gradient-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        
        {/* Folder Shape with Tab */}
        <path
          d="M 30 50 
             L 30 30 
             Q 30 15, 45 15 
             L 100 15 
             Q 108 15, 112 22 
             L 122 38 
             Q 126 45, 134 45 
             L 370 45 
             Q 385 45, 385 60 
             L 385 350 
             Q 385 365, 370 365 
             L 30 365 
             Q 15 365, 15 350 
             L 15 65 
             Q 15 50, 30 50 
             Z"
          fill={`url(#gradient-${id})`}
          className="drop-shadow-2xl"
        />
      </svg>
      
      {/* Content Container */}
      <div className="absolute inset-0 pt-16 px-8 pb-8 text-white flex flex-col">
        <div className="mb-5 ms-5 transform transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-lg font-bold mb-3 leading-tight">{title}</h3>
        <p className="text-white/90 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeatureCard;